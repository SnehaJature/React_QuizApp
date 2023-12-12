import React from 'react';

const Result = ({ score, onRestart }) => {
    return (
        <div className="result">
            <h2>Your Score: {score}</h2>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
};

export default Result;
