import { Router } from "express";
import {
  createSkill,
  deleteSkill,
  getAllSkills,
  getSingleSkill,
  updateSkill,
} from "../controllers/skill.controllers.js";

const routes = Router();

routes.post("/", createSkill);
routes.get("/", getAllSkills);
routes.get("/get/:id", getSingleSkill);
routes.patch("/update/:id", updateSkill);
routes.delete("/delete/:id", deleteSkill);

export default routes;
