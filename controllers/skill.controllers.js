import SkillModel from "../models/skill.model.js";
import JobSeekerModel from "../models/jobseeker.model.js";

export const createSkill = async (req, res) => {
  try {
    const skill = new SkillModel(req.body);
    const jobseeker = await JobSeekerModel.findById(req.body.jobseekerid);
    if (!jobseeker) {
      return res.status(400).json({
        status: "failed",
        message: `jobseeker ${req.body.jobseekerid} not found`,
      });
    }
    skill.save();
    return res.status(200).json({
      status: "success",
      data: skill,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllSkills = async (req, res) => {
  try {
    const skills = await SkillModel.find();
    res.json(skills);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const skill = await SkillModel.findById(id);
    res.json(skill);
  } catch (error) {
    console.log(error);
  }
};

export const updateSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSkill = await SkillModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      status: "success",
      message: `Skill ${id} updated`,
      data: updatedSkill,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    await SkillModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      message: `Skill ${id} deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
