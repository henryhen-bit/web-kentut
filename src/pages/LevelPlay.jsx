import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import levels from "../assets/data/levels";

const LevelPlay = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const levelIndex = parseInt(levelId) - 1;
  const level = levels[levelIndex];

  const [input, setInput] = useState("");
  const [lives, setLives] = useState(5);
  const [message, setMessage] = useState("");
  const [showHintPopup, setShowHintPopup] = useState(false);

  // 🚨 Redirect jika level tidak ditemukan
  useEffect(() => {
    if (!level) {
      navigate("/tebak-gambar");
    }
  }, [level, navigate]);

  // 💔 Redirect jika nyawa habis
  useEffect(() => {
    if (lives < 1) {
      setTimeout(() => {
        navigate("/tebak-gambar");
      }, 1500);
    }
  }, [lives, navigate]);

  const handleSubmit = () => {
    const userAnswer = input.toLowerCase().trim();
    const correct = level.answer.toLowerCase();

    if (userAnswer === correct) {
      setMessage("✅ Benar!");
      updateProgress(level.id);
      setTimeout(() => {
        navigate(`/tebak-gambar/level/${level.id + 1}`);
      }, 800);
    } else if (level.hintWords.some((hint) => userAnswer.includes(hint))) {
      setShowHintPopup(true);
      setTimeout(() => setShowHintPopup(false), 1500);
    } else {
      setMessage("❌ Salah!");
      setLives((prev) => Math.max(prev - 1, 0));
    }
  };

  const updateProgress = (id) => {
    const saved = JSON.parse(localStorage.getItem("completedLevels") || "[]");
    if (!saved.includes(id)) {
      localStorage.setItem("completedLevels", JSON.stringify([...saved, id]));
    }
  };

  if (!level) return null; // Prevent render sebelum redirect

  return (
    <div className="level-play">
      <h3>Level {level.id}</h3>
      <img src={level.image} alt={`Level ${level.id}`} className="level-image" />
      <div className="input-group">
        <input
          type="text"
          placeholder="Jawabanmu..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={lives <= 0}>Cek Jawaban</button>
      </div>
      <p className="message">{message}</p>
      <p className="lives">❤️ {lives}</p>

      {showHintPopup && (
        <div className="popup">😬 Dikit lagi!</div>
      )}
    </div>
  );
};

export default LevelPlay;
