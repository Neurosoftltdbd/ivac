const jwt = require("jsonwebtoken");
const { jwtVerify } = require("jose");

export const encodeToken = (email, userId, role) => {
    const key = "1234-abcd";
    const expire = { expiresIn: "30d" };
    const payload = { email: email, userId: userId , role: role };
    return jwt.sign(payload, key, expire);
};



// export const decodeToken=(token)=>{
//     return jwt.verify(token, "1234-abcd");
// }


const key = new TextEncoder().encode('1234-abcd');

export async function decodeToken(token) {
  try {
    const { payload } = await jwtVerify(token, key);
    return payload;
  } catch (e) {
    return null;
  }
}


