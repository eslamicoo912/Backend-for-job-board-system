import {
  createExperience,
  deleteExperience,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
} from "../controllers/experience.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/", createExperience);
routes.get("/", getAllExperiences);
routes.get("/get/:id", getSingleExperience);
routes.patch("/update/:id", updateExperience);
routes.delete("/delete/:id", deleteExperience);

export default routes;
