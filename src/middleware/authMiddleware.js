const {decodeToken}=require("../utility/jwt");
const UserModel = require("../model/UserModel");

const AuthMiddleware= async (req, res, next)=>{
    try {
        let token= req.headers["token"] || req.cookies["token"];
        if(!token){
            res.status(401).json({status:"token failed", message:"No token provided"});
        }

        const decode = decodeToken(token);
        if(decode != null){
            const {email, userId, role} = decode;
            const data = await UserModel.findOne({_id: userId});

            if(data != null){
                req.headers.email=email;
                req.headers.userId=userId;
                req.headers.role=role;
                next();
            }
        }else{
            return res.status(401).json({status:"fail", message:"Unauthorized user"});
        }
    } catch (error) {
        return {status:"fail", message:error}
    }
}



module.exports=AuthMiddleware;
