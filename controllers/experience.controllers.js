import ExperienceModel from "../models/experience.model.js";
import JobSeekerModel from "../models/jobseeker.model.js";

export const createExperience = async (req, res) => {
  try {
    const experience = new ExperienceModel(req.body);
    const jobseeker = await JobSeekerModel.findById(req.body.jobseekerid);
    if (!jobseeker) {
      return res.status(400).json({
        status: "failed",
        message: `jobseeker ${req.body.jobseekerid} not found`,
      });
    }
    experience.save();
    return res.status(200).json({
      status: "success",
      data: experience,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await ExperienceModel.find();
    res.json(experiences);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleExperience = async (req, res) => {
  const { id } = req.params;
  try {
    const experience = await ExperienceModel.findById(id);
    res.json(experience);
  } catch (error) {
    console.log(error);
  }
};

export const updateExperience = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedExperience = await ExperienceModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      status: "success",
      message: `Experience ${id} updated`,
      data: updatedExperience,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExperience = async (req, res) => {
  const { id } = req.params;
  try {
    await ExperienceModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      message: `Experience ${id} deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
