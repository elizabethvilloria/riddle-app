import React, { useState } from 'react';

const Answer = ({ onSubmitAnswer }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitAnswer(answer);
    setAnswer(''); // Clear the input after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter your answer"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Answer;
