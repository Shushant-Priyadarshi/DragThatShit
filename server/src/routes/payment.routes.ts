import {Router} from "express"
import { verifyJwt } from "../middlewares/auth.middleware";
import { createOrder, verifyPayment } from "../controller/payment.controller";

const router = Router()


router.route("/create-order").post(verifyJwt,createOrder)
router.route("/verify-payment").post(verifyJwt,verifyPayment)

export default router