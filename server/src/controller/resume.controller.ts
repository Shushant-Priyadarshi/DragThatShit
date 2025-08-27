import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import fs from "fs";
import { uploadResumeOnCloudinary } from "../utils/cloudinary";
import prisma from "../utils/prisma";
import { v2 as cloudinary } from "cloudinary";
import { Request,Response } from "express";
import { StatusCodes } from "http-status-codes";

//upload resume
const uploadResume = asyncHandler<Request,Response>(async (req, res) => {
  const user = req.user;
  const { resumeName } = req.body;
  if (!user) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorised Access");
  }

  const existingResumes = await prisma.resume.findMany({
    where: {
      userID: user.id,
    },
  });

  if (existingResumes.length >= user.resumeLimit) {
    throw new ApiError(
      StatusCodes.PAYMENT_REQUIRED,
      `You have reached your resume upload limit of ${user.resumeLimit}.`
    );
  }

  if (!req.file) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "please upload a resume");
  }

  if (req.file.mimetype !== "application/pdf") {
    fs.unlinkSync(req.file.path);
    throw new ApiError(StatusCodes.BAD_REQUEST, "Only pdfs are allowed");
  }

  const response = await uploadResumeOnCloudinary(req.file.path);
  if (!response) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Upload to cloudinary failed");
  }

  const savedResume = await prisma.resume.create({
    data: {
      userID: user.id,
      cloudinaryURL: response.secure_url,
      resumeName,
      public_id: response.public_id,
    },
  });

  if (!savedResume) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong while saving the resume");
  }

  res
    .status(StatusCodes.CREATED)
    .json(new ApiResponse(StatusCodes.CREATED, response.secure_url, "Uploaded successfully"));
});

//get all resumes
const getAllResumes = asyncHandler<Request,Response>(async (req, res) => {
  const userId = req.user.id;
  const userResumes = await prisma.resume.findMany({
    where: {
      userID: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  res
    .status(StatusCodes.OK)
    .json(new ApiResponse(StatusCodes.OK, userResumes, "Resume fetched successfully!"));
});

//get resume by id
const getResumeById = asyncHandler<Request,Response>(async (req, res) => {
  const userId = req.user.id;
  const resumeId = req.params.id;

  const resume = await prisma.resume.findUnique({
    where: {
      id: resumeId,
    },
  });

  if (!resume || resume.userID !== userId) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Resume not found! Access denied!");
  }

  res
    .status(StatusCodes.OK)
    .json(new ApiResponse(StatusCodes.OK, resume, "Resume fetched successfully"));
});

//delete resume
const deleteResumeById = asyncHandler<Request,Response>(async (req, res) => {
  const resumeId = req.params.id;
  const userId = req.user.id;

  const resume = await prisma.resume.findUnique({
    where: {
      id: resumeId,
    },
  });

  if (!resume || resume.userID !== userId) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Resume not found or access denied");
  }

  await cloudinary.uploader.destroy(resume.public_id,{
    resource_type:"raw"
  })

  await prisma.resume.delete({
    where:{
        id:resume.id
    }
  })

  res.status(StatusCodes.OK).json(new ApiResponse(StatusCodes.OK, null, "Resume deleted successfully"));
});

export { uploadResume, getAllResumes, getResumeById, deleteResumeById };
