const express = require("express");
const AuthMiddleware = require("../middleware/authMiddleware");
const UserController = require("../controller/userController");
const router = express.Router();



router.post("/register", UserController.userRegistration)
router.post("/login", UserController.userLogin)
router.get("/profile", AuthMiddleware, UserController.userProfileRead)
router.put("/profile-update", UserController.userProfileUpdate)



module.exports = router;
