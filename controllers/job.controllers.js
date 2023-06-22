import JobModel from "../models/job.model.js";

export const createJob = async (req, res) => {
  try {
    const job = new JobModel(req.body);
    job.save();
    res.json({
      status: "success",
      data: job,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await JobModel.find();
    res.json(jobs);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await JobModel.findById(id);
    res.json(job);
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedJobs = async (req, res) => {
  const { industry, location, level, type } = req.query;
  try {
    const jobs = await JobModel.find({
      industry: industry,
      location: location,
      experience_level: level,
      employ_type: type,
    });
    res.json(jobs);
  } catch (error) {
    console.log(error);
  }
};

export const getJobsByLocation = async (req, res) => {
  const { location } = req.params;
  try {
    const jobs = await JobModel.find({ location: location });
    res.json(jobs);
  } catch (error) {
    console.log(error);
  }
};

export const getJobsByIndustry = async (req, res) => {
  const { industry } = req.params;
  try {
    const jobs = await JobModel.find({ industry: industry });
    res.json(jobs);
  } catch (error) {
    console.log(error);
  }
};

export const getJobsByExperienceLevel = async (req, res) => {
  const { experience_level } = req.params;
  try {
    const jobs = await JobModel.find({ experience_level: experience_level });
    res.json(jobs);
  } catch (error) {
    console.log(error);
  }
};

export const getJobsByEmployType = async (req, res) => {
  const { employ_type } = req.params;
  try {
    const jobs = await JobModel.find({ employ_type: employ_type });
    res.json(jobs);
  } catch (error) {
    console.log(error);
  }
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedJob = await JobModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedJob);
  } catch (error) {
    console.log(error);
  }
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    await JobModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      message: `job ${id} deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
