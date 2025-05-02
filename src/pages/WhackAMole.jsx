import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './whackamole.css'; // buat gaya terpisah

const WhackAMole = () => {
  const [score, setScore] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameRunning, setGameRunning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (gameRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setGameRunning(false);
      setActiveIndex(null);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameRunning]);

  useEffect(() => {
    let moleTimer;
    if (gameRunning) {
      moleTimer = setInterval(() => {
        setActiveIndex(Math.floor(Math.random() * 9));
      }, 700);
    }
    return () => clearInterval(moleTimer);
  }, [gameRunning]);

  const hitMole = (index) => {
    if (index === activeIndex) {
      setScore(score + 1);
      setActiveIndex(null);
    }
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameRunning(true);
  };

  return (
    <div className="mole-container">
      <div className="info">
        <h2>🐹 Whack A Mole</h2>
        <p>Skor: {score}</p>
        <p>Waktu: {timeLeft}s</p>
        {!gameRunning && (
          <button className="start-btn" onClick={startGame}>
            Mulai Game
          </button>
        )}
      </div>
      <div className="grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`hole ${i === activeIndex ? 'active' : ''}`}
            onClick={() => hitMole(i)}
          >
            {i === activeIndex && <div className="mole" />}
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/')}>← Kembali ke Menu</button>
    </div>
  );
};

export default WhackAMole;
