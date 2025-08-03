import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import prisma from "../utils/prisma";
import { ApiResponse } from "../utils/ApiResponse";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/jwt";
import { googleClient } from "../app";
import { Request, Response } from "express";

//login user
const loginUser = asyncHandler(async (req, res) => {
  const { credentials } = req.body;
  if (!credentials) {
    throw new ApiError(400, "No google oauth credentials found");
  }

  const ticket = await googleClient.verifyIdToken({
    idToken: credentials,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  if (!payload) {
    throw new ApiError(400, "Invalid Google OAuth payload");
  }
  const { name, email, picture } = payload;
  if (!name || !email || !picture) {
    throw new ApiError(400, "cannot get user info");
  }

  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  let user;
  if (!userExist) {
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        picture,
      },
    });

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while saving the user");
    }
    user = createdUser;
  } else {
    user = userExist;
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken,
    },
  });

  const userResponse = {
    id: user.id,
    name: user.name,
    email: user.email,
    picture: user.picture,
    accessToken: accessToken,
  };

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, userResponse, "Logged In successfully"));
});

//logout
const logoutUser = asyncHandler<Request,Response>(async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new ApiError(400, "Invalid user");
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      refreshToken: null,
    },
  });
  return res
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .status(200)
    .json(new ApiResponse(200, "Logged out successfully"));
});


const generateAccessAndRefreshToken = async (userId:string) => {
   try {
    if (!userId) {
      throw new ApiError(400, "User id is required to generate token");
    }
    const userFromDB = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!userFromDB) {
      throw new ApiError(400, "User not found");
    }
    const accessToken = generateAccessToken(userFromDB);
    const newRefreshToken = generateRefreshToken(userFromDB);

    //userFromDB.refreshToken = refreshToken;
    await prisma.user.update({
      where: {
        id: userFromDB.id,
      },
      data: {
        refreshToken: newRefreshToken,
      },
    });
    return { accessToken, newRefreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generate access and refresh token"
    );
  }
};

//refresh access token
const refreshAccessToken = asyncHandler<Request,Response>(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized access");
  }

  try {
    const decodedToken = verifyRefreshToken(incomingRefreshToken);
    if (!decodedToken || typeof decodedToken === "string") {
      throw new ApiError(401, "Invalid refresh token! Unauthorized request");
    }
    const userFromDB = await prisma.user.findUnique({
      where: {
        id: decodedToken.userId,
      },
    });
    if (!userFromDB) {
      throw new ApiError(
        400,
        "Invalid refresh token! user not found in database"
      );
    }

    if (incomingRefreshToken !== userFromDB?.refreshToken) {
      throw new ApiError(401, "Refresh token expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(userFromDB.id);
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          201,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed successfully!"
        )
      );
  } catch (error) {
    if(error instanceof ApiError){
      throw new ApiError(400, error?.message || "Invalid refresh token");
    }else{
      throw new Error("Something unexpected happened while refreshing the token")
    }
    
  }
});

//get profile
const getUserProfile = asyncHandler<Request,Response>(async (req, res) => {
  res
    .status(201)
    .json(new ApiResponse(200, req.user, "User fetched successfully"));
});

export { loginUser, logoutUser, getUserProfile, refreshAccessToken };
