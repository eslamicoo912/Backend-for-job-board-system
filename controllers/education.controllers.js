import EducationModel from "../models/education.model.js";
import JobSeekerModel from "../models/jobseeker.model.js";

export const createEducation = async (req, res) => {
  try {
    const education = new EducationModel(req.body);
    const jobseeker = await JobSeekerModel.findById(req.body.jobseekerid);
    if (!jobseeker) {
      return res.status(400).json({
        status: "failed",
        message: `jobseeker ${req.body.jobseekerid} not found`,
      });
    }
    education.save();
    return res.status(200).json({
      status: "success",
      data: education,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllEducations = async (req, res) => {
  try {
    const Educations = await EducationModel.find();
    res.json(Educations);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const education = await EducationModel.findById(id);
    res.json(education);
  } catch (error) {
    console.log(error);
  }
};

export const updateEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEducation = await EducationModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      status: "success",
      message: `education ${id} updated`,
      data: updatedEducation,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEducation = async (req, res) => {
  const { id } = req.params;
  try {
    await EducationModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      message: `education ${id} deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
