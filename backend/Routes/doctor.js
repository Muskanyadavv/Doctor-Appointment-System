import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  getDoctorProfile
} from "../Controllers/doctorController.js";
import express from "express";

import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();

//nested route
router.use("/:doctorId/reviews", reviewRouter);
router.get("/profile/me", authenticate, restrict(["doctor"]),getDoctorProfile);
router.get("/", getAllDoctor);

router.get("/:id", getSingleDoctor);

router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);

router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);



export default router;
