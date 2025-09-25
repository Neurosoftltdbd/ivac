import IvacCustomerModel from '../model/ivacCustomerModel.js';
import IvacPanelCodeModel from '../model/ivacPanelCodeModel.js';
import UserModel from '../model/userModel.js';

export const ivacPanelCode = async (req, res) => {
    const data = await IvacPanelCodeModel.aggregate([
        {
            $lookup: {  
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user",
                pipeline: [
                    { $project: { password: 0 } }
                ]
            }
        }
    ]);
    res.json({ status: "success", data: data });
};
export const setIvacPanelCode = async (req, res) => {
    try {
        const reqBody = req.body;
        const userId = req.headers.userId;
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        reqBody.userId = userId;
        const ivacPanelCode = await IvacPanelCodeModel.find();
        let data;
        if (ivacPanelCode && ivacPanelCode.length > 0) {
            data = await IvacPanelCodeModel.updateOne({userId: userId}, reqBody, { new: true });
        } else {
            data = await IvacPanelCodeModel.create(reqBody);
        }
        res.json({ status: "success", message: "Ivac panel code saved successfully", data: data });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}

export const createIvacCustomer = async (req, res) => {
    try {
        const reqBody = req.body;
        const data = await IvacCustomerModel.create(reqBody);
        res.json({ status: "success", message: "Ivac customer created successfully", data: data });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}