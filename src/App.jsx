import React, { useState } from 'react';
import Question from './component/Question';
import Result from './component/Result';
import questionsData from './ questionsData';
import './App.css'
const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      {showResult ? (
        <Result score={score} onRestart={handleRestart} />
      ) : (
        <Question
          question={questionsData[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;
