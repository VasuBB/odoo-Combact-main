import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Games() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white');
   const [questions, setQuestions] = useState([
      { question: 'What is 4! ?', answer: '24' },
      { question: 'What is the capital of France?', answer: 'Paris' },
      { question: 'Who wrote "To be, or not to be"?', answer: 'Shakespeare' },
      { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
      { question: 'What is the square root of 64?', answer: '8' },
      { question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' },
      { question: 'What is the boiling point of water in Celsius?', answer: '100' },
      { question: 'What is the chemical symbol for gold?', answer: 'Au' },
      { question: 'Who is known as the "Father of Computers"?', answer: 'Charles Babbage' },
      { question: 'What is the capital of Japan?', answer: 'Tokyo' },
      { question: 'What is the smallest prime number?', answer: '2' },
      { question: 'What is the longest river in the world?', answer: 'Nile' },
      { question: 'Who wrote "Pride and Prejudice"?', answer: 'Jane Austen' }
    ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      setQuestion(questions[currentQuestionIndex].question);
    }
  }, [currentQuestionIndex]);

  const handleAnswerSubmit = () => {
    if (answer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
      setScore(score + 10);
      setBackgroundColor('white');
    } else {
      setScore(score - 10);
      setBackgroundColor('red');
    }
    setAnswer('');
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length); // Loop back to the start
  };

  return (
    <>
      <Card className="w-[80vw] h-[80vh] m-[auto]" sx = {{background : "url(https://i.pinimg.com/originals/93/33/81/93338121b5740dca5013b9fdfc9566a3.gif)" , backgroundSize : "cover"}}>
        <Card className="w-[60vw] flex justify-around my-2 mx-[auto] font-bold text-[3vh] flex text-center justify-center">
          Fight the Question Bot 🔥🔥 <span>Your score: {score}</span>
        </Card>

        <div className='flex w-[80vw] h-[40vh] justify-around'>
          <Card className="flex w-[30vw]" sx={{ backgroundColor: backgroundColor }}>
            <div className='text-center font-bold text-[3vh]'>
              <img src="https://onlinegiftools.com/images/examples-onlinegiftools/sub-zero-mk-without-background.gif" alt="Player" />
              You
            </div>
          </Card>
          <Card className='w-[30vw]'>
            <div>
              <img src="https://i.gifer.com/origin/99/9923cd312058c88a24aaaa9b3799469c_w200.gif" alt="Bot" />
            </div>
          </Card>
        </div>

        <div className='flex justify-around w-[80vw] h-[35vh] mt-2 mx-[auto]'>
          <Card className="flex w-[30vw] h-[30vh]">
            <div className='w-[30vw] text-center flex justify-center items-center font-bold text-[3vh]'>
              <TextField
                label="Your Answer"
                variant="outlined"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <Button onClick={handleAnswerSubmit}>Submit</Button>
            </div>
          </Card>
          <Card className='w-[30vw] h-[30vh] flex justify-center items-center'>
            <div className='text-center font-bold text-[3vh]'>
              {question}
            </div>
          </Card>
        </div>
      </Card>
    </>
  );
}