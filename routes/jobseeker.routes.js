import {
  createJobSeeker,
  deleteJobSeeker,
  getAllJobSeekers,
  getSingleJobSeeker,
  updateJobSeeker,
} from "../controllers/jobseeker.controller.js";
import { Router } from "express";

const routes = Router();

routes.post("/", createJobSeeker);
routes.get("/", getAllJobSeekers);
routes.get("/getjobseeker/:id", getSingleJobSeeker);
routes.patch("/update/:id", updateJobSeeker);
routes.delete("/delete/:id", deleteJobSeeker);

export default routes;
