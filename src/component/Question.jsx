import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAnswer(selectedOption === question.correctOption);
    };

    return (
        <div className="question">
            <h2 >React Quiz App</h2>
            <h2>{question.questionText}</h2>
            <form onSubmit={handleSubmit}>
                {question.options.map((option, index) => (
                    <div key={index}>
                        <label>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                            />
                            {option}
                        </label>
                    </div>
                ))}
                <button type="submit">Next</button>
            </form>
        </div>
    );
};

export default Question;
