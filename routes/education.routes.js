import {
  createEducation,
  deleteEducation,
  getAllEducations,
  getSingleEducation,
  updateEducation,
} from "../controllers/education.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/", createEducation);
routes.get("/", getAllEducations);
routes.get("/geteducation/:id", getSingleEducation);
routes.patch("/update/:id", updateEducation);
routes.delete("/delete/:id", deleteEducation);

export default routes;
