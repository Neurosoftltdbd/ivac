import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ status: "success", message: "IVAC fetched successfully" });
    } catch (error) {
        return NextResponse.json({ status: "error", message: "Error occurred", data: error.message });
    }
}