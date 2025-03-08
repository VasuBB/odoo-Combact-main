const Quiz = require('../models/quizs');

exports.add_quiz = async (req, res) => {
    try {
       console.log(req.body)
        const newQuiz = new Quiz(req.body);
        await newQuiz.save();
        res.status(200).json(newQuiz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};