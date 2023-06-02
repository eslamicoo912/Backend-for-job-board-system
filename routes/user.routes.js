import {
  createUser,
  loginUser,
  getAllUsers,
} from "../controllers/user.controller.js";
import { Router } from "express";

const routes = Router();

routes.post("/", createUser);
routes.post("/login", loginUser);
routes.get("/", getAllUsers);

export default routes;
