import mongoose from "mongoose";

const Education = mongoose.Schema({
  jobseekerid: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  grad_year: {
    type: Number,
    required: true,
  },
});

const EducationModel = mongoose.model("EducationModel", Education);

export default EducationModel;
