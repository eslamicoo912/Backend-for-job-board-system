import JobSeekerModel from "../models/jobseeker.model.js";
import UserModel from "../models/user.model.js";

export const createJobSeeker = async (req, res) => {
  try {
    const jobseeker = new JobSeekerModel(req.body);
    const user = await UserModel.findById(req.body.userid);
    if (!user) {
      return res.status(400).json({
        status: "failed",
        message: `user ${req.body.userid} not found`,
      });
    }
    jobseeker.save();
    return res.status(200).json({
      status: "success",
      data: jobseeker,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobSeekers = async (req, res) => {
  try {
    const jobseekers = await JobSeekerModel.find();
    res.json(jobseekers);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleJobSeeker = async (req, res) => {
  const { id } = req.params;
  try {
    const jobseeker = await JobSeekerModel.findById(id);
    res.json(jobseeker);
  } catch (error) {
    console.log(error);
  }
};

export const updateJobSeeker = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedJobSeeker = await JobSeekerModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      status: "success",
      message: `user ${id} updated`,
      data: updatedJobSeeker,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteJobSeeker = async (req, res) => {
  const { id } = req.params;
  try {
    await JobSeekerModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      message: `user ${id} deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
