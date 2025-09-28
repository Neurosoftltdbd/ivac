import { isAdmin } from "@/lib/auth";
import { decodeToken } from "@/lib/jwt";
import { obfuscateJsCode } from "@/lib/obsfucate";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        if (await isAdmin()) {
            const code = await prisma.ivacPanelCode.findFirst({ include: { user: { select: { id: true, name: true, email: true, role: true } } } });
            return NextResponse.json({ status: "success", message: "code fetched successfully", data: code });
        } else {
            return NextResponse.json({ status: "unauthorized", message: "Unauthorized access" });
        };
    } catch (error) {
        return NextResponse.json({ status: "error", message: "Error occurred", data: error.message });
    }
}


export async function PUT(req) {
    try {
        const reqBody = await req.json();
        const token = (await cookies()).get("token")?.value;
        const { userId } = await decodeToken(token);
        reqBody.userId = userId;
        console.log('reqBody from code PUT:', reqBody.userId);

        reqBody.obsfucatedCode = obfuscateJsCode(reqBody.code);

        const isExisting = await prisma.ivacPanelCode.findFirst();

        if (await isAdmin()) {
            let code;
            if (isExisting) {
                code = await prisma.ivacPanelCode.update({
                    where: { id: isExisting.id },
                    data: { code: reqBody.code, obsfucatedCode: reqBody.obsfucatedCode, userId: reqBody.userId }
                });
            } else {
                code = await prisma.ivacPanelCode.create({
                    data: { code: reqBody.code, obsfucatedCode: reqBody.obsfucatedCode, userId: reqBody.userId }
                });
            }
            return NextResponse.json({ status: "success", message: "code saved successfully", data: code });
        } else {
            return NextResponse.json({ status: "unauthorized", message: "Unauthorized access" });
        };
    } catch (error) {
        return NextResponse.json({ status: "error", message: "Error occurred", data: error.message });
    }
}