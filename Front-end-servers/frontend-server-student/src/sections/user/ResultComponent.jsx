import React from 'react';

const ResultComponent = ({ results }) => {
  return (
    <div>
      <h2>Quiz Results</h2>
      {results.map((result, index) => (
        <div key={index}>
          <p>Question: {result.question}</p>
          <p>Your Answer: {result.yourAnswer}</p>
          <p>Correct Answer: {result.correctAnswer}</p>
          <p>{result.isCorrect ? 'Correct!' : 'Wrong'}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultComponent;
