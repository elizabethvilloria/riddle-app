import React from 'react';

const Result = ({ score, total, onRestart }) => {
  return (
    <div>
      <h2>Your Score: {score} / {total}</h2>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;