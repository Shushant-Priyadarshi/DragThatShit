import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware";
import {loginUser,logoutUser,getUserProfile,refreshAccessToken} from "../controller/user.controller"
const router = Router();


router.route("/login").post(loginUser);
router.route("/logout").post(verifyJwt, logoutUser);
router.route("/user-profile").get(verifyJwt, getUserProfile);
router.route("/refresh-access-token").post(refreshAccessToken);

export default router;
