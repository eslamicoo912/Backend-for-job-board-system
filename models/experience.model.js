import mongoose from "mongoose";

const Experience = mongoose.Schema({
  jobseekerid: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
});

const ExperienceModel = mongoose.model("ExperienceModel", Experience);

export default ExperienceModel;
