import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

function generateAccessToken(user: User) {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: "1d",
    }
  );
}

function generateRefreshToken(user: User): string {
  return jwt.sign(
    {
      userId: user.id,
    },
    process.env.REFRESH_TOKEN_SECRET as string,
    {
      expiresIn: "10d",
    }
  );
}

function verifyRefreshToken(refreshToken:string){
  return jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET as string);
}

export { generateAccessToken, generateRefreshToken,verifyRefreshToken };
