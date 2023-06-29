import mongoose from "mongoose";

const JobSeeker = mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  portfolio_link: {
    type: String,
  },
  specialization: {
    type: String,
    required: true,
  },
  contact_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  resume_link: {
    type: String,
    required: true,
  },
});

const JobSeekerModel = mongoose.model("JobSeekerModel", JobSeeker);

export default JobSeekerModel;
