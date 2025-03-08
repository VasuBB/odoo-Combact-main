const Teacher = require("../models/teachers");
const Admin = require("../models/admins");
const Student = require("../models/students");
// const Teacher = require("../models/teachers");

async function signin(req, res) {
  const { email, password, field } = req.body;

  try {
    let user;
    let isPasswordValid = false;

    if (field === "Admin") {
      user = await Admin.findOne({ email });
      if (user) {
        if (user.password === password) {
          isPasswordValid = true;
        }
      }
    } else if (field === "Student") {
      user = await Student.findOne({ email1: email });
      if (user) {
        isPasswordValid = user.password1 === password ? true : false;
      }
    } else if (field === "Parent") {
      user = await Student.findOne({ email2: email });
      if (user) {
        isPasswordValid = user.password2 === password ? true : false;
      }
    } else {
      user = await Teacher.findOne({ email: email });
      if (user) {
        isPasswordValid = user.password === password ? true : false;
      }
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Successfully authenticated
    return res
      .status(200)
      .json({ message: "Sign-in successful", userId: user._id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { signin };
