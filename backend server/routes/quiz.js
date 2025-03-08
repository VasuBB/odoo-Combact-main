const express = require('express');
const {add_quiz} = require('../controllers/quiz')

const quizrouter = express.Router() ; 
quizrouter.post("/add_quiz" , add_quiz) ; 
module.exports = quizrouter;