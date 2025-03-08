const Teacher = require("../models/teachers");
const Admin = require("../models/admins");
const Student = require("../models/students");
const Quiz = require("../models/quizs");
// const Teacher = require("../models/teachers");

async function getquiz(req, res) {
  // const id = req.body.id;
  const quiz = await Quiz.find();
  // const student = await Student.find({ _id: id });
  // if (!student) {
  //   return res.status(400).json({ message: "Student not found" });
  // } else {
  // const teacherid = student.teacherid;
  // const teacher = await Teacher.find({ _id: teacherid });
  // if (!teacher) {
  //   return res.status(400).json({ message: "teacher not found" });
  // } else {
  //   const url = teacher.url;
  return res.status(200).json({ quiz });
  // }
  // }
}

module.exports = { getquiz };
