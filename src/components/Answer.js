import React from 'react';

function Answer({ answer, setAnswer, onSubmitAnswer }) {
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitAnswer();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={answer} 
        onChange={handleChange} 
        placeholder="Type your answer here"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Answer;
