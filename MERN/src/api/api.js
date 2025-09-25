const express = require("express");
const AuthMiddleware = require("../middleware/authMiddleware");
const UserController = require("../controller/userController");
const router = express.Router();
const Ivaccontroller = require("../controller/ivacController");



router.post("/register", UserController.userRegistration)
router.post("/login", UserController.userLogin)
router.get("/profile", AuthMiddleware, UserController.userProfileRead)
router.put("/profile", AuthMiddleware, UserController.userProfileUpdate)

router.get("/ivac", Ivaccontroller.ivacPanelCode)
router.post("/ivac", AuthMiddleware, Ivaccontroller.setIvacPanelCode)
router.post("/ivac-customer", AuthMiddleware, Ivaccontroller.createIvacCustomer)



module.exports = router;
