import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "Berlin", isCorrect: false },
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Rome", isCorrect: false },
    ],
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    answerOptions: [
      { answerText: "Earth", isCorrect: false },
      { answerText: "Mars", isCorrect: true },
      { answerText: "Jupiter", isCorrect: false },
      { answerText: "Saturn", isCorrect: false },
    ],
  },
  {
    questionText: "What is 2 + 2?",
    answerOptions: [
      { answerText: "3", isCorrect: false },
      { answerText: "4", isCorrect: true },
      { answerText: "5", isCorrect: false },
      { answerText: "6", isCorrect: false },
    ],
  },
  {
    questionText: "Who wrote 'To Kill a Mockingbird'?",
    answerOptions: [
      { answerText: "Harper Lee", isCorrect: true },
      { answerText: "Jane Austen", isCorrect: false },
      { answerText: "Mark Twain", isCorrect: false },
      { answerText: "J.K. Rowling", isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setQuizEnd(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizEnd(false);
  };

  return (
    <div className="app">
      {quizEnd ? (
        <div className="result">
          <h2>Your score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-container">
          <div className="question-section">
            <h2>{questions[currentQuestionIndex].questionText}</h2>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
