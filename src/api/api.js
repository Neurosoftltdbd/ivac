const express = require('express');
const UserController = require("../controller/userController");
const router = express.Router();
const AuthMiddleware = require("../middleware/authMiddleware");

router.post("/register", UserController.userRegistration)
router.post("/login", UserController.userLogin)
router.get("/profile", AuthMiddleware, UserController.userProfileRead)
router.put("/profile", UserController.userProfileUpdate)











module.exports = router;