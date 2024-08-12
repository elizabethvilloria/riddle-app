import React, { useState } from 'react';
import Riddle from './components/Riddle';
import Answer from './components/Answer';
import Result from './components/Result';
import Score from './components/Score';

const riddles = [
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo"
  },
  {
    question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    answer: "A candle"
  },
  {
    question: "The more of this there is, the less you see. What is it?",
    answer: "Darkness"
  },
  {
    question: "I’m light as a feather, yet the strongest man can’t hold me for more than 5 minutes. What am I?",
    answer: "Breath"
  },
  {
    question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    answer: "A map"
  },
  {
    question: "What has keys but can’t open locks?",
    answer: "A piano"
  },
  {
    question: "What can travel around the world while staying in a corner?",
    answer: "A stamp"
  },
  {
    question: "What has hands, but can’t clap?",
    answer: "A clock"
  },
  {
    question: "What has a head, a tail, but no body?",
    answer: "A coin"
  },
  {
    question: "What is full of holes but still holds water?",
    answer: "A sponge"
  }
];

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
