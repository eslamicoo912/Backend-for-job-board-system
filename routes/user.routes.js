import {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
} from "../controllers/user.controller.js";
import { Router } from "express";

const routes = Router();

routes.post("/", createUser);
routes.post("/login", loginUser);
routes.get("/", getAllUsers);
routes.get("/:id", getUserById);

export default routes;
