import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: email }, 
        });
        if (existingUser) {
            return NextResponse.json({ status: "userExists", message: "User already exists", data: existingUser });
        }

        // Create new user
        const newUser = await prisma.user.create({
            data: { email: email, password: password, role: "user" },
        });
        return NextResponse.json({ status: "success", message:"User registration success", data: newUser });
    } catch (error) {
        return NextResponse.json({ status: "error",message: "error occured ", data: error.message });
    }
}


     