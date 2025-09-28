import { decodeToken } from "./jwt";
import { cookies } from 'next/headers';

export const isAuthenticated = async (req) => {
    const token = req.cookies.get("token")?.value;
    //console.log('isAuthenticated token:', token);
    if (token) {
        const userData = await decodeToken(token);
        if (userData.email) {
            return true;
        }
        console.log('isAuthenticated: No userData');
        return false;
    }
    return false;
}


export const isAdmin = async () => {
    const token = (await cookies()).get("token")?.value;
    //console.log('isAdmin token:', token);
    if (token) {
        console.log('isAdmin token exists');
        const userData = await decodeToken(token);
        if (userData.role === "admin") {
            console.log('isAdmin: Is an admin');
            return true;
        }
        console.log('isAdmin: Not an admin');
        return false;
    }
    return false;
}