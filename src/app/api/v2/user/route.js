import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { encodeToken, decodeToken } from "@/lib/jwt";
import { cookies } from "next/headers";


export async function POST(req) {
    try {
        const { email, password } = await req.json();
        console.log(email, password);
        if (!email || !password) {
            return NextResponse.json({ status: "invalidData", message: "Email and password are required" });
        }
        const user = await prisma.user.findFirst({
            where: { email: email, password: password },
            select: { id: true, email: true, name: true, mobile: true, role: true, address: true, image: true, createdAt: true, updatedAt: true }
        });
        console.log(user);
        if (user) {
            const token = encodeToken(user.email, user.id, user.role);
            const cookieOption = { expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), httpOnly: false };
            const response = NextResponse.json({ status: "success", message: "User logged in successfully", token: token, data: user });
            response.cookies.set("token", token, cookieOption);
            response.headers.set("token", token);
            response.cookies.set("userData", JSON.stringify(user));
            return response;
        } else {
            return NextResponse.json({ status: "userNotFound", message: "User not found" });
        }
    } catch (error) {
        return NextResponse.json({ status: "error", message: error.message });
    }
}



export async function GET() {
    try {
        const token = (await cookies()).get("token")?.value;
        if (!token) {
            return NextResponse.json({ status: "unauthorized", message: "User not authenticated. Please login" });
        }
        const userData = await decodeToken(token);
        if (userData) {
                const user = await prisma.user.findUnique({
                where: { email: userData.email },
                select: { id: true, email: true, name: true, mobile: true, role: true, address: true, image: true, updatedAt: true, createdAt: true },
            });
 
            if (user) {
                return NextResponse.json({ status: "success", message: "User found", data: user });
            } else {
                return NextResponse.json({ status: "userNotFound", message: "User not found" });
            }


        } else {
            return NextResponse.json({ status: "unauthorized", message: "User not authenticated. Please login" });
        }
    } catch (error) {
        return NextResponse.json({ status: "error", message: error.message });
    }
}


export async function PUT(req) {
    try {
        const token = (await cookies()).get("token")?.value;
        if (!token) {
            return NextResponse.json({ status: "unauthorized", message: "User not authenticated. Please login" });
        }
        const userData = await decodeToken(token);
        if (userData) {
            const { email, name, mobile, address, password } = await req.json();

            let where = {};
            if (userData.id) where.id = userData.id;
            else if (userData.email) where.email = userData.email;
            else return NextResponse.json({ status: "userNotFound", message: "User not found" });

            const updatedUser = await prisma.user.update({
                where,
                data: { email, name, mobile, address, password, updatedAt: new Date() },
                select: { id: true, email: true, name: true, mobile: true, role: true, address: true, image: true, createdAt: true, updatedAt: new Date() }
            });

            if (updatedUser) {
                return NextResponse.json({ status: "success", message: "User updated successfully", data: updatedUser });
            }
            return NextResponse.json({ status: "userNotFound", message: "User not found" });
        }
        return NextResponse.json({ status: "unauthorized", message: "User not authenticated. Please login" });
    } catch (error) {
        return NextResponse.json({ status: "error", message: error.message });
    }
}

