import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import prisma from "../utils/prisma";
import {  CustomJwtPayload } from "../types/utils.types";
import { Request, Response} from "express";



const isValidJwtPayload = (payload: any): payload is CustomJwtPayload => {
  return (
    payload && typeof payload === "object" && typeof payload.email === "string"
  );
};

const verifyJwt = asyncHandler<Request, Response>(
  async (req, _, next) => {
    try {
      const token: string =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

      if (!token) {
        throw new ApiError(400, "Unauthorized request");
      }

      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);

      if (!isValidJwtPayload(decodedToken)) {
        throw new ApiError(401, "Invalid token format");
      }

      const userFromDB = await prisma.user.findUnique({
        where: {
          email: decodedToken?.email,
        },
      });

      if (!userFromDB) {
        throw new ApiError(400, "Invalid access token");
      }
      const { refreshToken, ...safeUser } = userFromDB;
      req.user = safeUser ;
      next();
    } catch (error) {
        if(error instanceof ApiError){
        throw new ApiError(400,"Token verification failed! Unauthorized access!")
      }
      
    }
  }
);
export { verifyJwt };
