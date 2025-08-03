// import nodemailer from "nodemailer";
// import { ApiError } from "./ApiError.js";
// import dotenv from "dotenv";

// dotenv.config();

// export const sendVerificationEmail = async (to, otp, userName) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"DragThat*hit" <${process.env.SMTP_USER}>`,
//       to,
//       subject: "Your OTP for Email Verification",
//       html: getEmailHTMLTemplate(otp, userName),
//     });
//   } catch (error) {
//     throw new ApiError(500, "Something went wrong while sending the OTP.");
//   }
// };

// const getEmailHTMLTemplate = (otp, name) => `
//   <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #ddd;">
//     <h2 style="text-align: center; color: #4A90E2;">🔐 Email Verification</h2>
//     <p style="font-size: 16px; color: #333;">Hi ${name},</p>
//     <p style="font-size: 16px; color: #333;">Your one-time password (OTP) to verify your email is:</p>
    
//     <div style="text-align: center; margin: 30px 0;">
//       <span style="display: inline-block; font-size: 28px; letter-spacing: 8px; font-weight: bold; background: #4A90E2; color: white; padding: 10px 20px; border-radius: 8px;">
//         ${otp}
//       </span>
//     </div>

//     <p style="font-size: 14px; color: #666;">This OTP is valid for the next <strong>10 minutes</strong>. Do not share it with anyone.</p>

//     <p style="font-size: 14px; color: #999; margin-top: 40px; border-top: 1px solid #eee; padding-top: 10px;">
//       If you didn’t request this, please ignore this email.<br/>
//       — DragThat*hit Team
//     </p>
//   </div>
// `;

