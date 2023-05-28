// importing needed libraries
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// importing routes files
import UserRoutes from "./routes/user.routes.js";

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
