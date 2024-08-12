import React, { useState } from 'react';
import Riddle from './components/Riddle';
import Answer from './components/Answer';
import Result from './components/Result';
import Score from './components/Score';

const App = () => {
  // Example data, you can replace this with dynamic data later
  const [riddle, setRiddle] = useState("What has keys but can't open locks?");
  const [score, setScore] = useState(0);
  const [result, setResult] = useState('');

  const handleAnswerSubmit = (answer) => {
    if (answer.toLowerCase() === "piano") {
      setResult("Correct!");
      setScore(score + 1);
    } else {
      setResult("Wrong answer. Try again!");
    }
  };

  return (
    <div>
      <h1>Riddle App</h1>
      <Score score={score} />
      <Riddle riddle={riddle} />
      <Answer onSubmitAnswer={handleAnswerSubmit} />
      <Result result={result} />
    </div>
  );
};

export default App;
