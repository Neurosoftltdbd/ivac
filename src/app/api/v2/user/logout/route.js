import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const response = NextResponse.json({ status: "success", message: "Logged out successfully" });
        response.cookies.set("token", "", { expires: new Date(0), httpOnly: false });
        return response;
    } catch (error) {
        return NextResponse.json({ status: "error", data: error.message });
    }
}
