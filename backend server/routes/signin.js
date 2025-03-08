const express = require("express");
const { signin } = require("../controllers/signin");

const router = express.Router();

router.route("/").post(signin);
// router.route("/add").post(addTeacher);
// router.route("/delete").post(removeTeacher);

module.exports = router;
