import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { razorpay } from "../utils/razorpay";
import crypto from "crypto";
import { ApiError } from "../utils/ApiError";
import prisma from "../utils/prisma";
import { ApiResponse } from "../utils/ApiResponse";

const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const { slots } = req.body;
  if (!slots || slots == 0) {
    throw new ApiError(400, "Please select valid slot");
  }
  const amount = slots * 200;

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
    payment_capture: 1,
  };

  const order = await razorpay.orders.create(options);

  res.status(200).json({
    success: true,
    orderId: order.id,
    currency: order.currency,
    amount: order.amount,
  });
});

const verifyPayment = asyncHandler(async (req: Request, res: Response) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, slots } =
    req.body;
  const userId = req.user.id;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(sign.toString())
    .digest("hex");

  if (expectedSign !== razorpay_signature) {
    throw new ApiError(400, "Invalid payment signature!");
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: { resumeLimit: { increment: slots } },
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        `Congratualtions your resume limit is now ${user.resumeLimit}`,
        "Payment successfull"
      )
    );
});

export { createOrder, verifyPayment };
