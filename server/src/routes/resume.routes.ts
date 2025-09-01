import { Router } from "express";
import { uploadResume,getAllResumes,getResumeById,deleteResumeById} from "../controller/resume.controller";
import {upload} from "../middlewares/multer.middleware"
import { verifyJwt } from "../middlewares/auth.middleware";
const router = Router();


router.route("/upload").post(verifyJwt,upload.single("resume"),uploadResume)
router.route("/get/all").get(verifyJwt,getAllResumes)
router.route("/get/:resumeId").get(verifyJwt,getResumeById)
router.route("/delete/:resumeId").delete(verifyJwt,deleteResumeById)

export default router