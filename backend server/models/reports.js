const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  sid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  qid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
  score: {
    type: Number,
    required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
