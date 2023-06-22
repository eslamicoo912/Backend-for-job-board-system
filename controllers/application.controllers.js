import ApplicationModel from "../models/application.model.js";
import JobSeekerModel from "../models/jobseeker.model.js";

export const createApplication = async (req, res) => {
  try {
    const jobseeker = await JobSeekerModel.findById(req.body.jobseekerid);
    if (!jobseeker) {
      return res.status(400).json({
        status: "failed",
        message: `jobseeker ${req.body.jobseekerid} not found`,
      });
    }
    const application = new ApplicationModel(req.body);
    application.save();
    return res.status(200).json({
      status: "success",
      data: application,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await ApplicationModel.find();
    res.json(applications);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await ApplicationModel.findById(id);
    res.json(application);
  } catch (error) {
    console.log(error);
  }
};

export const getStatusApplications = async (req, res) => {
  const { status } = req.params;
  try {
    const applications = await ApplicationModel.find({ status: status });
    res.json(applications);
  } catch (error) {
    console.log(error);
  }
};

export const updateApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedApplication = await ApplicationModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      status: "success",
      message: `Application ${id} updated`,
      data: updatedApplication,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteApplication = async (req, res) => {
  const { id } = req.params;
  try {
    await ApplicationModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      message: `Application ${id} deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
