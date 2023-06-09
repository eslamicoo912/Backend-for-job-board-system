import mongoose from "mongoose";

const User = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("UserModel", User);

export default UserModel;
