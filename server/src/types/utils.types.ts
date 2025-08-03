import { User } from "@prisma/client";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface IApiError {
  statusCode: number;
  message: string;
  success: false;
  errors: string[];
  data: null;
}


export interface IApiResponse<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

export interface CustomJwtPayload extends JwtPayload{
  userId?:number,
  email:string
}

declare global {
  namespace Express {
    interface Request {
      user: Omit<User, 'refreshToken'>;
    }
  }
}
