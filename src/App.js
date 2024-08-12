import React, { useState } from 'react';
import Riddle from './components/Riddle';
import Answer from './components/Answer';
import Result from './components/Result';
import Score from './components/Score';

const riddles = [
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "echo"
  },
  {
    question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    answer: "candle"
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
    answer: "map"
  },
  {
    question: "What has keys but can’t open locks?",
    answer: "piano"
  },
  {
    question: "What can travel around the world while staying in a corner?",
    answer: "stamp"
  },
  {
    question: "What has hands, but can’t clap?",
    answer: "clock"
  },
  {
    question: "What has a head, a tail, but no body?",
    answer: "coin"
  },
  {
    question: "What is full of holes but still holds water?",
    answer: "sponge"
  }
];

function App() {
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubmitAnswer = () => {
    if (userAnswer.toLowerCase() === riddles[currentRiddleIndex].answer.toLowerCase()) {
      setScore(score + 1);
      console.log('Correct answer. Score:', score + 1);
    } else {
      console.log('Wrong answer.');
    }
    
    if (currentRiddleIndex < riddles.length - 1) {
      setCurrentRiddleIndex(currentRiddleIndex + 1);
      setUserAnswer('');
    } else {
      setShowResult(true);
      console.log('All riddles answered, showing result.');
    }
  };
  
  const handleRestart = () => {
    console.log('Restarting the quiz.');
    setCurrentRiddleIndex(0);
    setScore(0);
    setUserAnswer('');
    setShowResult(false);
  };
  

  return (
    <div className="App">
      <h1>Riddle App</h1>
      {!showResult ? (
        <>
          <Riddle riddle={riddles[currentRiddleIndex].question} />
          <Answer 
            answer={userAnswer} 
            setAnswer={setUserAnswer} 
            onSubmitAnswer={handleSubmitAnswer} 
          />
          <Score score={score} />
        </>
      ) : (
        <Result score={score} total={riddles.length} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;