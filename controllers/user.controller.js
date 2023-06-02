import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY);
};

export const createUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // check if this username exists in the database
    const user = await UserModel.findOne({ username: username });
    if (user) {
      return res.status(409).json({
        status: "failed",
        message: "User is already registered",
      });
    }

    // the user does not exist, hash the password and create a new user in the database
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) console.log(err);
      else {
        const user = new UserModel({
          username: username,
          password: hashedPassword,
        });
        user.save();
        res.status(200).json({
          status: "success",
          message: `${username} is created successfully`,
          data: user,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // check if the user is not found in the database
    const user = await UserModel.findOne({ username: username });
    if (!user) {
      return res.status(401).json({
        status: "failed",
        message: "User not found. Please sign up first.",
      });
    }

    // the user is found, compare the password and login
    bcrypt.compare(password, user.password, (err, match) => {
      // check if the entered password matching the password in the database
      if (!match) {
        return res.status(401).json({
          status: "failed",
          message: "Incorrect password. Please try again.",
        });
      }

      if (err) {
        console.log(err);
        return;
      }

      return res.status(200).json({
        status: "success",
        id: user._id,
        username: user.username,
        token: generateToken(user._id),
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.log(erorr);
  }
};
