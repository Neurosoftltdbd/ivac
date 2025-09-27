import { NextRequest, NextResponse } from "next/server";

export async function Post(req) {
try {
        const { email, password } = req.body;
        const user = await UserModel.find({ email: email, password: password });
        if (user.length > 0) {
            const userId = user[0]._id;
            const role = user[0].role;
            const token = await encodeToken(email, userId, role);
            const cookieOption = { expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), httpOnly: false };
            res.cookie("token", token, cookieOption);
            res.setHeader("token", token);
            return NextResponse.json({ status: "success", token: token });
        } else {
            return NextResponse.json({ status: "userNotFound" });
        }
    } catch (error) {
        return NextResponse.json({ status: "error", data: error.message });
    }   
}



export async function GET(req) {
    try {
        const token = req.cookies.get("token");
        if (!token) {
            return NextResponse.json({ status: "unauthorized" });
        }
        const userData = await decodeToken(token);
        if (userData) {
            const userId = userData.id;
            const user = await UserModel.findById(userId).select("-password");
            if (user) {
                return NextResponse.json({ status: "success", data: user });
            } else {
                return NextResponse.json({ status: "userNotFound" });
            }
        } else {
            return NextResponse.json({ status: "unauthorized" });
        }
    } catch (error) {
        return NextResponse.json({ status: "error", data: error.message });
    }
}

