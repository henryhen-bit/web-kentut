// import React from "react";
// import levels from "../assets/data/levels";
// import { useNavigate } from "react-router-dom";
// import "./tebakgambar.css";

// const TebakGambar = () => {
// const navigate = useNavigate();

// const handleClick = (levelId) => {
//     // logic untuk mengecek apakah level tersebut sudah bisa diakses
//     navigate(`/tebak-gambar/level/${levelId}`);
// };

// return (
//         <div className="grid-container">
//         <h2 className="title">Tebak Gambar</h2>
//         <div className="level-grid">
//             {levels.map((level, index) => {
//             const unlocked = index === 0 || true; // logic sesungguhnya tergantung progress user
//             return (
//                 <button
//                 key={level.id}
//                 className={`level-button ${unlocked ? "unlocked" : "locked"}`}
//                 onClick={() => unlocked && handleClick(level.id)}
//                 disabled={!unlocked}
//                 >
//                 {level.id}
//                 </button>
//             );
//             })}
//         </div>
//         </div>
//     );
// };

// export default TebakGambar;
import React, { useEffect, useState } from "react";
import levels from "../assets/data/levels";
import { useNavigate } from "react-router-dom";
import "./tebakgambar.css";

const TebakGambar = () => {
  const navigate = useNavigate();
  const [completedLevels, setCompletedLevels] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("completedLevels") || "[]");
    setCompletedLevels(saved);
  }, []);

  const handleClick = (levelId) => {
    navigate(`/tebak-gambar/level/${levelId}`);
  };

  return (
    <div className="grid-container">
      <h2 className="title">Tebak Gambar</h2>
      <div className="level-grid">
        {levels.map((level, index) => {
          const unlocked = index === 0 || completedLevels.includes(level.id - 1);
          const isCompleted = completedLevels.includes(level.id);
          return (
            <button
              key={level.id}
              className={`level-button ${unlocked ? "unlocked" : "locked"} ${isCompleted ? "completed" : ""}`}
              onClick={() => unlocked && handleClick(level.id)}
              disabled={!unlocked}
            >
              {level.id}
            </button>
          );
        })}
      </div>
      
      <button onClick={() => navigate('/')}>← Kembali ke Menu</button>
    </div>
  );
};

export default TebakGambar;
