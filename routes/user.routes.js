import { createUser } from "../controllers/user.controller";
import { Router } from "express";

const routes = Router();

routes.post("/", createUser);

export default routes;
