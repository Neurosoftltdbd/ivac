import { isAdmin } from "@/lib/auth";
import { decodeToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const reqBody = await request.json();
        const userData = (await cookies()).get("userData")?.value;
        reqBody.userId = JSON.parse(userData).id;
        
        if (!reqBody.name || !reqBody.email || !reqBody.mobile || !reqBody.address || !reqBody.status) {
            return NextResponse.json({ status: 'failed', message: 'All fields are required' });
        }
        const existingCustomer = await prisma.ivacCustomer.findUnique({
            where: {
                email: reqBody.email    
            }
        });
        if (existingCustomer) {
            return NextResponse.json({ status: 'duplicate', message: 'Customer with this email already exists' });
        }

    const data = await prisma.ivacCustomer.create({
        data: {
            name: reqBody.name,
            email: reqBody.email,
            mobile: reqBody.mobile,
            address: reqBody.address,
            status: reqBody.status,
            userId: reqBody.userId
        }
    });
    return NextResponse.json({ status: 'success', message: "Customer created successfully", data: data });
    }catch (error) {
        return NextResponse.json({status:'error', message: error.message});
    }  
}


export async function GET() {
    try {
        if (isAdmin()) {
            const data = await prisma.ivacCustomer.findMany({
                include: { user: { select: { id: true, name: true, email: true } } },
                include: { device: true },
                orderBy: {
                    id: 'desc'
                }
            });
            return NextResponse.json({ status: 'success', message: "Customers fetched successfully", data: data });
        } else {
            return NextResponse.json({ status: 'unauthorized', message: 'You are not authorized to access this resource' });
        }
    } catch (error) {
        return NextResponse.json({ status: 'error', message: error.message });
    }
}