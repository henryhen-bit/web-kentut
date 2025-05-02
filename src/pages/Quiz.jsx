import React, { useState, useEffect } from "react";
import questions from "../assets/data/questions";
import "./quiz.css";

const Quiz = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (gameStarted && questionNumber < 10) {
      getRandomQuestion();
    }
    if (questionNumber === 10) {
      setShowResult(true);
    }
  }, [gameStarted, questionNumber]);

  const getRandomQuestion = () => {
    const unused = questions.filter((_, index) => !usedQuestions.includes(index));
    if (unused.length === 0) return;

    const index = Math.floor(Math.random() * unused.length);
    const questionIndex = questions.indexOf(unused[index]);
    setCurrentQuestion(questions[questionIndex]);
    setUsedQuestions((prev) => [...prev, questionIndex]);
    setSelectedAnswer(null);
  };

  const handleAnswer = (key) => {
    if (selectedAnswer) return;

    setSelectedAnswer(key);

    if (key === currentQuestion.answer) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }

    setTimeout(() => {
      setQuestionNumber((prev) => prev + 1);
    }, 1000);
  };

  const handleRestart = () => {
    setGameStarted(false);
    setUsedQuestions([]);
    setSelectedAnswer(null);
    setScore({ correct: 0, wrong: 0 });
    setQuestionNumber(0);
    setShowResult(false);
  };

  if (!gameStarted) {
    return (
      <div className="quiz-container" style={{ textAlign: "center" }}>
        <h2>Udah siap lu buat ikutan?</h2>
        <button className="option-btn" onClick={() => setGameStarted(true)}>
          Gass!
        </button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="quiz-container" style={{ textAlign: "center" }}>
        <h2>Hasil Quiz</h2>
        <p>✅ Benar: {score.correct}</p>
        <p>❌ Salah: {score.wrong}</p>
        <div style={{ marginTop: "1.5rem" }}>
          <button className="option-btn" onClick={handleRestart}>
            Coba Lagi
          </button>
          <button className="option-btn" onClick={() => window.location.href = "/"}>
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="score-box">
        Soal ke {questionNumber + 1}/10 — ✅ {score.correct} | ❌ {score.wrong}
      </div>
      <div className="question">{currentQuestion.question}</div>
      <div className="options">
        {Object.entries(currentQuestion.options || {}).map(([key, value]) => (
          <button
            key={key}
            className={`option-btn ${
              selectedAnswer
                ? key === currentQuestion.answer
                  ? "correct"
                  : key === selectedAnswer
                  ? "wrong"
                  : "disabled"
                : ""
            }`}
            onClick={() => handleAnswer(key)}
            disabled={!!selectedAnswer}
          >
            <strong>{key.toUpperCase()}.</strong> {value}
            {selectedAnswer &&
              key !== currentQuestion.answer &&
              key !== selectedAnswer && <span className="cross">❌</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
