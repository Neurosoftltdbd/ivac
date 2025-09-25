
const UserModel = require("../model/userModel");
const {encodeToken} = require("../utility/jwt");


const userLogin = async (req, res) => {
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
            res.json({ status: "success", token: token });
        } else {
            res.json({ status: "userNotFound" });
        }
    } catch (error) {
        res.json({ status: "error", data: error.message });
    }
}

const userRegistration = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await UserModel.find({ email: reqBody.email })
        if (user.length > 0) {
            res.json({ status: "duplicate" });
        } else {
            const data = await UserModel.create(reqBody);
            res.json({ status: "success", message: "User registration success ... ", data: data });
        }
    } catch (error) {
        res.json({ status: "error", data: error });
    }
}



const userProfileRead = async (req, res) => {
    try {
        const {userId} = req.headers;
        console.log(userId);
        const user = await UserModel.findOne({_id:userId}, {password:0});
        res.json({status:"success", data:user});
    } catch (error) {
        res.json({status:"error", data:error});
    }
}



const userProfileUpdate = async (req, res) => {
    try {
        const {userId} = req.headers;
        const {name, email, password, phone, address} = req.body;
        const user = await UserModel.findOneAndUpdate({_id:userId}, {name, email, password, phone, address}, {new:true});
        res.json({status:"success", data:user});
    } catch (error) {
        res.json({status:"error", data:error});
    }
}

module.exports = {userLogin, userRegistration, userProfileRead, userProfileUpdate};
