import mongoose from "mongoose";

const JobSeeker = mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default:
      "https://as1.ftcdn.net/v2/jpg/02/53/27/72/1000_F_253277232_w0KhD626du0CeTExyY9HV5wANXHRjswV.jpg",
  },
  fullname: {
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
