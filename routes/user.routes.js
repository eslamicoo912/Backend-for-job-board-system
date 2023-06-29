import {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  getJobseekerByUserId,
} from "../controllers/user.controller.js";
import { Router } from "express";

const routes = Router();

routes.post("/", createUser);
routes.post("/login", loginUser);
routes.get("/", getAllUsers);
routes.get("/get/:id", getUserById);
routes.get("/get_jobseeker/:id", getJobseekerByUserId);
routes.patch("/update/:id", updateUser);

export default routes;
