import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Divider,
  Box,
  Snackbar,
} from '@mui/material';

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    correctAnswer: 0,
  },
  // Add more questions similarly
];

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNextQuestion = () => {
    const correctAnsIndex = quizQuestions[currentQuestion].correctAnswer;
    if (selectedOption === quizQuestions[currentQuestion].options[correctAnsIndex]) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSnackbarClose = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption('');
  };

  return (
    <Card variant="outlined" sx={{ width: "100%",height:"100%", margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Quiz
        </Typography>
        {showScore ? (
          <Box>
            <Typography variant="h6" gutterBottom>
              Your Score: {score} out of {quizQuestions.length}
            </Typography>
            <Snackbar open={showScore} autoHideDuration={6000} onClose={handleSnackbarClose}>
              <Typography>
                Quiz Completed!
              </Typography>
            </Snackbar>
          </Box>
        ) : (
          <Box>
            <Typography variant="body1" gutterBottom>
              Question {currentQuestion + 1} / {quizQuestions.length}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {quizQuestions[currentQuestion].question}
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Options</FormLabel>
              <RadioGroup
                aria-label="quiz-options"
                name="quiz-options"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              sx={{ marginTop: 2 }}
            >
              {currentQuestion + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question'}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizComponent;
