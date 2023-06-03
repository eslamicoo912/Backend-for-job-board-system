import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJobsByEmployType,
  getJobsByExperienceLevel,
  getJobsByIndustry,
  getJobsByLocation,
  getSearchedJobs,
  getSingleJob,
  updateJob,
} from "../controllers/job.controllers.js";

const routes = Router();

routes.post("/", createJob);
routes.get("/", getAllJobs);
routes.get("/get/:id", getSingleJob);
routes.get("/search", getSearchedJobs);
routes.get("/industry/:industry", getJobsByIndustry);
routes.get("/emp_type/:employ_type", getJobsByEmployType);
routes.get("/location/:location", getJobsByLocation);
routes.get("/experience/:experience_level", getJobsByExperienceLevel);
routes.patch("/update/:id", updateJob);
routes.delete("/delete/:id", deleteJob);

export default routes;
