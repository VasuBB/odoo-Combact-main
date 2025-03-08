const Teacher = require("../models/teachers");

async function removeTeacher(req, res) {
  const id = req.body.id;
  try {
    await Teacher.findByIdAndDelete(id);
    res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function addTeacher(req, res) {
  const body = req.body;
  try {
    const result = await Teacher.create(body);
    return res.status(201).json({ msg: "Teacher created", id: result._id });
  } catch (error) {
    console.log(error);
    return res.status(409).json({ msg: "teacher exist" });
  }
}

async function getUser(req, res) {
  try {
    const result = await Teacher.find();
    console.log(result);
    return res.status(200).json({ msg: "Teachers", data: result });
  } catch (error) {
    return res.status(409).json({ msg: "Error" });
  }
}

module.exports = { addTeacher, removeTeacher, getUser };
