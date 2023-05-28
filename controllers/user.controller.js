import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

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
