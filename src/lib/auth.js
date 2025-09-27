import { decodeToken } from "./jwt";

export const isAuthenticated = async (req) => {
    const token = req.cookies.get("token")?.value;
    console.log('isAuthenticated token:', token);
    if (token) {
        const userData = await decodeToken(token);
        if (userData.email) {
            console.log('isAuthenticated userData:', userData);
            return true;
        }
        console.log('isAuthenticated: No userData');
        return false;
    }
    return false;
}


export const isAdmin = async (req) => {
    const token = req.cookies.get("token")?.value;
    if (token) {
        const userData = await decodeToken(token);
        if (userData.role === "admin") {
            return true;
        }
        return false;
    }
    return false;
}