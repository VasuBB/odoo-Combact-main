const express = require("express");
const { addTeacher, removeTeacher, getUser } = require("../controllers/admin");

const router = express.Router();

router.route("/").get(getUser);
router.route("/add").post(addTeacher);
router.route("/delete").post(removeTeacher);
// router.route("/members-token-verify").post(verifyMemebr);
// router.route("/add-event").post(addEvent);
// router.route("/remove-event/:id").delete(removeEvent);
module.exports = router;
