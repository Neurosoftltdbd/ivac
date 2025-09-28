import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    try {
        const { id } = params;
        const customerId = parseInt(id);
        const customer = await prisma.ivacCustomer.findUnique({
            where: { id: customerId },
            include: { user: { select: { id: true, name: true, email: true, role: true } } },
            include: { device: true },
        });
        if (!customer) {
            return NextResponse.json({ status: "error", message: "Customer not found" });
        }
        return NextResponse.json({ status: "success", message: "Customer fetched successfully", data: customer });
    } catch (error) {
        return NextResponse.json({ status: "error", message: "Error occurred", data: error.message });
    }
}