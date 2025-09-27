import { isAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        if (await isAdmin()) {
            const users = await prisma.user.findMany();
            return NextResponse.json({ status: "success", message: "User list fetched successfully", data: users });
        }else{
            return NextResponse.json({ status: "unauthorized", message: "Unauthorized" });
        };
    } catch (error) {
        return NextResponse.json({ status: "error", message: "Error occurred", data: error.message });
    }
}