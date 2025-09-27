import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

export async function POST(req) {
    try {
        const {name, email, password, role, mobile, address, image } = await req.json();
        if (!email || !password || !name || !role) {
            return NextResponse.json({ status: "invalidData", message: "Name, Email, password and role are required" });
        }
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: email }, 
        });

        if (existingUser) {
            return NextResponse.json({ status: "userExists", message: "User already exists", data: existingUser });
        }

        // Create new user
        const newUser = await prisma.user.create({
            data: { email, password, role, name, mobile, address, image },
        });
        return NextResponse.json({ status: "success", message:"User registration success", data: newUser });
    } catch (error) {
        return NextResponse.json({ status: "error",message: "error occured ", data: error.message });
    }
}


     