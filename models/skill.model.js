import mongoose from "mongoose";

const Skill = mongoose.Schema({
  jobseekerid: {
    type: String,
    required: true,
  },
  skillname: {
    type: String,
    required: true,
  },
});

const SkillModel = mongoose.model("SkillModel", Skill);

export default SkillModel;
