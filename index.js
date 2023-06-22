// importing needed libraries
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// importing routes files
import UserRoutes from "./routes/user.routes.js";
import JobSeekerRoutes from "./routes/jobseeker.routes.js";
import EducationRoutes from "./routes/education.routes.js";
import ExperienceRoutes from "./routes/experience.routes.js";
import SkillRoutes from "./routes/skill.routes.js";
import JobRoutes from "./routes/job.routes.js";
import ApplicationRoutes from "./routes/application.routes.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("Hello!");
});
app.use("/api/users", UserRoutes);
app.use("/api/jobseekers", JobSeekerRoutes);
app.use("/api/educations", EducationRoutes);
app.use("/api/experiences", ExperienceRoutes);
app.use("/api/skills", SkillRoutes);
app.use("/api/jobs", JobRoutes);
app.use("/api/applications", ApplicationRoutes);

// database connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening for port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
