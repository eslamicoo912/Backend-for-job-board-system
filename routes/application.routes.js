import {
  createApplication,
  deleteApplication,
  getAllApplications,
  getSingleApplication,
  getStatusApplications,
  updateApplication,
} from "../controllers/application.controllers.js";
import { Router } from "express";

const routes = Router();

routes.post("/", createApplication);
routes.get("/", getAllApplications);
routes.post("/get/:id", getSingleApplication);
routes.get("/status/:status", getStatusApplications);
routes.patch("/update", updateApplication);
routes.delete("/delete", deleteApplication);

export default routes;
