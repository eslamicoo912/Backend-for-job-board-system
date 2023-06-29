import mongoose from "mongoose";

const Job = mongoose.Schema({
  img: {
    type: String,
    default:
      "https://t3.ftcdn.net/jpg/05/25/17/98/360_F_525179852_dPo0NiSY6GsguULdiHAH4X2mFIuk9HQ2.jpg",
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date().toUTCString(),
  },
  benefits: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: Array,
    required: true,
  },
  salary: {
    type: String,
  },
  employ_type: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  experience_level: {
    type: String,
    required: true,
  },
  education_level: {
    type: String,
  },
});

const JobModel = mongoose.model("JobModel", Job);

export default JobModel;
