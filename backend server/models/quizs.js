const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: {
        type: {
          option1: String,
          option2: String,
          option3: String,
          option4: String,
        },
        required: true,
      },
      answers: {
        type: String,
        required: true,
      },
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
