
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