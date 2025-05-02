import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./racing.css";

const NUM_CARS = 5;
const TRACK_LENGTH = 10000; // arbitrary units

const Racing = () => {
    const [carPositions, setCarPositions] = useState(Array(NUM_CARS).fill(0));
    const [speed, setSpeed] = useState(0);
    const [isGasPressed, setGasPressed] = useState(false);
    const [isBrakePressed, setBrakePressed] = useState(false);
    const [finishedOrder, setFinishedOrder] = useState([]);
    const navigate = useNavigate();

    const gameInterval = useRef(null);

useEffect(() => {
    gameInterval.current = setInterval(() => {
        setCarPositions((prev) => {
            return prev.map((pos, idx) => {
            if (finishedOrder.includes(idx)) return pos;

            const botSpeed = Math.random() * 3 + 1;
            const newPos = idx === 0
                ? pos + (isGasPressed ? speed : isBrakePressed ? speed * 0.5 : 0)
                : pos + botSpeed;

            if (newPos >= TRACK_LENGTH && !finishedOrder.includes(idx)) {
                setFinishedOrder((order) => [...order, idx]);
            }

            return Math.min(newPos, TRACK_LENGTH);
            });
        });
    }, 1);

    return () => clearInterval(gameInterval.current);
  }, [speed, isGasPressed, isBrakePressed, finishedOrder]);

  const handleGas = () => {
    setGasPressed(true);
    setBrakePressed(false);
    setSpeed((prev) => Math.min(prev + 2, 10));
  };

  const handleBrake = () => {
    setGasPressed(false);
    setBrakePressed(true);
    setSpeed((prev) => Math.max(prev - 1, 0));
  };

  const getSpeedColor = () => {
    if (speed < 3) return "green";
    if (speed < 7) return "orange";
    return "red";
  };

  return (
    <div className="racing-game">
        <h2>🏎️ Racing Game</h2>
      <div className="speedometer">
        <div className="gauge">
          <div className="needle" style={{ transform: `rotate(${speed * 18 - 80}deg)`, backgroundColor: getSpeedColor() }}></div>
        </div>
      </div>
      <div className="track-container">
        <div className="trees left">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="tree" />
          ))}
        </div>
        <div className="track">
          {[...Array(NUM_CARS)].map((_, i) => (
            <div key={i} className="lane">
              <div className="car" style={{ right: `${(carPositions[i] / TRACK_LENGTH) * 100}%` }}>🚗</div>
            </div>
          ))}
        </div>
        <div className="trees right">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="tree" />
          ))}
        </div>
      </div>
      <div className="controls">
        <button className="pedal brake" onClick={handleBrake}>🛑</button>
        <button className="pedal gas" onClick={handleGas}>🚀</button>
      </div>
      {finishedOrder.length === NUM_CARS && (
        <div className="results">
          <h2>🏁 Finish Order:</h2>
          <ol>
            {finishedOrder.map((idx) => (
              <li key={idx}>Car #{idx + 1}</li>
            ))}
          </ol>
        </div>
      )}
      
      <button onClick={() => navigate('/')}>← Kembali ke Menu</button>
    </div>
  );
};

export default Racing;
