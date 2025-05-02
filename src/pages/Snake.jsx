import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './snake.css'; // buat styling terpisah

const gridSize = 10; // 10x10 board

export default function Snake() {
  const navigate = useNavigate();
  const [snake, setSnake] = useState([[0, 0]]);
  const [direction, setDirection] = useState([0, 1]); // kanan
  const [food, setFood] = useState([3, 3]);

  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case 'ArrowUp': setDirection([-1, 0]); break;
        case 'ArrowDown': setDirection([1, 0]); break;
        case 'ArrowLeft': setDirection([0, -1]); break;
        case 'ArrowRight': setDirection([0, 1]); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const move = setInterval(() => {
      setSnake(prev => {
        const head = prev[prev.length - 1];
        const newHead = [
          (head[0] + direction[0] + gridSize) % gridSize,
          (head[1] + direction[1] + gridSize) % gridSize,
        ];

        const newSnake = [...prev, newHead];
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          // makan
          setFood([
            Math.floor(Math.random() * gridSize),
            Math.floor(Math.random() * gridSize),
          ]);
        } else {
          newSnake.shift(); // gerak biasa
        }
        return newSnake;
      });
    }, 500);

    return () => clearInterval(move);
  }, [direction, food]);

  return (
    <div className="snake-wrapper">
      <h2>🐍 Snake Game</h2>
      <div className="grid">
        {Array.from({ length: gridSize * gridSize }).map((_, i) => {
          const x = Math.floor(i / gridSize);
          const y = i % gridSize;
          const isSnake = snake.some(([sx, sy]) => sx === x && sy === y);
          const isFood = food[0] === x && food[1] === y;
          return (
            <div
              key={i}
              className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
            />
          );
        })}
      </div>
      <button onClick={() => navigate('/')}>← Kembali ke Menu</button>
    </div>
  );
}
