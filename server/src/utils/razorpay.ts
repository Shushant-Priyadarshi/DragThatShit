import Razorpay from "razorpay";

export const razorpay = new Razorpay({
    key_id:process.env.RAZOR_TEST_ID,
    key_secret:process.env.RAZOR_TEST_SECRET
})