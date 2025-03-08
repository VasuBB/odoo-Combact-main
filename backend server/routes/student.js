const express = require("express");
const { getquiz } = require("../controllers/student");

const router = express.Router();

router.route("/getquiz").get(getquiz);
// router.route("/add").post(addTeacher);
// router.route("/delete").post(removeTeacher);

module.exports = router;
