import mongoose from "mongoose";

const Application = mongoose.Schema({
  jobseekerid: {
    type: String,
    required: true,
  },
  jobid: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const ApplicationModel = mongoose.model("ApplicationModel", Application);

export default ApplicationModel;
