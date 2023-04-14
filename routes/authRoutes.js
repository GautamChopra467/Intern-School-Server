const express = require("express");
const router = express.Router();

const { signup, login,verifyEmail,verifyOtp,newPassword,getUserDetails} = require("../controllers/authControllers");

const {CheckUser} = require('../Middleware/AuthMiddleware');

const {CheckCompany} = require('../Middleware/AuthMiddlewareCompany');

const Handler = require("../ErrorHandling/Authentication/AuthError").STUDENT;

const { 
  SIGNUP,
  LOGIN,
  VERIFYEMAIL,
  VERIFYOTP,
  STUDENT,
  COMPANY,
  NEWPASSWORD,
  USERDETAILS
} = require("../utils/constants/app_constants").ROUTES.AUTH;
  
router.route(SIGNUP).post(Handler.register,signup);

router.route(LOGIN).post(Handler.login,login);

router.route(VERIFYEMAIL).post(Handler.verifyEmail,verifyEmail);

router.route(VERIFYOTP).post(Handler.otpVerify,verifyOtp);

router.route(STUDENT).post(CheckUser);

router.route(COMPANY).post(CheckCompany);

router.route(NEWPASSWORD).post(Handler.forgotPassword,newPassword);

router.route(USERDETAILS).get(getUserDetails);

module.exports = router;