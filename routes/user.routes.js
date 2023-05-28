import { createUser } from "../controllers/user.controller.js";
import { Router } from "express";

const routes = Router();

routes.post("/", createUser);

export default routes;
