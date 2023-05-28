import { createUser, loginUser } from "../controllers/user.controller.js";
import { Router } from "express";

const routes = Router();

routes.post("/", createUser);
routes.post("/login", loginUser);

export default routes;
