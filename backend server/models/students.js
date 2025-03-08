const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email1: {
    type: String,
    required: true,
    unique: true,
  },
  email2: {
    type: String,
    required: true,
    unique: true,
  },
  password1: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  },
  roll_number: {
    type: String,
    required: true,
    unique: true,
  },
  reportid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Report",
  },
  teacherid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
  class: {
    type: String,
    required: true,
  },
  highscore: {
    type: Number,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
