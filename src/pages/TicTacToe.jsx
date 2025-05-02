// TicTacToe.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './tictactoe.css';

const styles = {
  classic: 'classic',
  vintage: 'vintage',
  neon: 'neon',
  future: 'future'
};

const players = {
  user: '🧑',
  bot: '🤖'
};

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [userTurn, setUserTurn] = useState(true);
  const [rounds, setRounds] = useState(3);
  const [currentRound, setCurrentRound] = useState(1);
  const [userWins, setUserWins] = useState(0);
  const [botWins, setBotWins] = useState(0);
  const [style, setStyle] = useState('classic');
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [winLine, setWinLine] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();


  const handleClick = (i) => {
    if (!userTurn || board[i] || gameOver) return;
    const newBoard = [...board];
    newBoard[i] = players.user;
    setBoard(newBoard);
    setUserTurn(false);
    setTimeout(() => botMove(newBoard), 500);
  };

  // const botMove = (currentBoard) => {
  //   const emptyIndices = currentBoard.map((val, i) => val === null ? i : null).filter(i => i !== null);
  //   const randIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  //   if (randIndex !== undefined) {
  //     currentBoard[randIndex] = players.bot;
  //     setBoard([...currentBoard]);
  //     setUserTurn(true);
  //   }
  //   checkWinner(currentBoard);
  // };

  const botMove = (currentBoard) => {
    const emptyIndices = currentBoard.map((val, i) => val === null ? i : null).filter(i => i !== null);
  
    let move;
    if (difficulty === 'easy') {
      move = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    } else if (difficulty === 'hard') {
      // Cek apakah user bisa menang, blok dulu
      move = findBestBlockingMove(currentBoard, players.user) 
           || emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    } else if (difficulty === 'expert') {
      move = getBestMove(currentBoard);
    }
  
    if (move !== undefined) {
      currentBoard[move] = players.bot;
      setBoard([...currentBoard]);
      setUserTurn(true);
    }
  
    checkWinner(currentBoard);
  };
  
  const findBestBlockingMove = (board, playerSymbol) => {
    const wins = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
    for (let [a, b, c] of wins) {
      const line = [board[a], board[b], board[c]];
      if (line.filter(cell => cell === playerSymbol).length === 2 && line.includes(null)) {
        const emptyIndex = [a, b, c][line.indexOf(null)];
        return emptyIndex;
      }
    }
    return null;
  };

  const getBestMove = (board) => {
    const minimax = (newBoard, isMaximizing) => {
      const winner = evaluateWinner(newBoard);
      if (winner !== null) return score(winner);
  
      const empty = newBoard.map((val, i) => val === null ? i : null).filter(i => i !== null);
      let best = isMaximizing ? -Infinity : Infinity;
  
      for (let i of empty) {
        newBoard[i] = isMaximizing ? players.bot : players.user;
        const val = minimax(newBoard, !isMaximizing);
        newBoard[i] = null;
        best = isMaximizing ? Math.max(val, best) : Math.min(val, best);
      }
  
      return best;
    };
  
    const empty = board.map((val, i) => val === null ? i : null).filter(i => i !== null);
    let bestScore = -Infinity;
    let bestMove = null;
  
    for (let i of empty) {
      board[i] = players.bot;
      let score = minimax(board, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  
    return bestMove;
  };
  
  const evaluateWinner = (b) => {
    const wins = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
    for (let [a, bIndex, c] of wins) {
      if (b[a] && b[a] === b[bIndex] && b[a] === b[c]) {
        return b[a] === players.user ? 'user' : 'bot';
      }
    }
    if (!b.includes(null)) return 'draw';
    return null;
  };
  
  const score = (result) => {
    if (result === 'bot') return 10;
    if (result === 'user') return -10;
    return 0;
  };
  

  const checkWinner = (b) => {
    const wins = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
    for (let [a, bIndex, c] of wins) {
      if (b[a] && b[a] === b[bIndex] && b[a] === b[c]) {
        const winner = b[a] === players.user ? 'user' : 'bot';
        setWinLine([a, bIndex, c]);
        if (winner === 'user') setUserWins(prev => prev + 1);
        else setBotWins(prev => prev + 1);

        nextRound(winner);
        return;
      }
    }
    if (!b.includes(null)) nextRound('draw');
  };

  const nextRound = (winner) => {
    setTimeout(() => {
      if (winner === 'user') setMessage('Kamu menang ronde ini!');
      else if (winner === 'bot') setMessage('Bot menang ronde ini!');
      else setMessage('Seri!');

      if (currentRound >= rounds) {
        setGameOver(true);
        setMessage(
          userWins > botWins ? '🎉 Congratulations! Kamu menang pertandingan!' :
          botWins > userWins ? '💀 Game Over. Bot lebih unggul.' : '🤝 Hasil Imbang.'
        );
      } else {
        setCurrentRound(prev => prev + 1);
        setBoard(Array(9).fill(null));
        setWinLine([]);
      }
    }, 700);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setUserTurn(true);
    setUserWins(0);
    setBotWins(0);
    setCurrentRound(1);
    setMessage('');
    setGameOver(false);
    setWinLine([]);
  };

  return (
    <div className={`tictactoe-wrapper ${styles[style]}`}>
      <h2>⭕ Tic Tac Toe ❌</h2>

      <div className="difficulty-select">
        Mode: 
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} disabled={currentRound > 1}>
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
          <option value="expert">Expert</option>
        </select>
      </div>


      <div className="style-buttons">
        {Object.keys(styles).map(s => (
          <button key={s} onClick={() => setStyle(s)}>{s}</button>
        ))}
      </div>

      <div className="round-select">
        Ronde: 
        <select value={rounds} onChange={(e) => setRounds(Number(e.target.value))} disabled={currentRound > 1}>
          {Array.from({ length: 9 }, (_, i) => i + 2).map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <p>Ronde {currentRound} dari {rounds}</p>
      <p>Skor: Kamu {userWins} - {botWins} Bot</p>
      <p className="message">{message}</p>

      <div className="board">
        {board.map((val, i) => (
          <div
            key={i}
            className={`cell ${winLine.includes(i) ? 'win' : ''}`}
            onClick={() => handleClick(i)}
          >
            {val}
          </div>
        ))}
      </div>

      {gameOver && (
        <button onClick={resetGame}>
        {userWins > botWins ? 'Ingin lanjut?' : 'Coba lagi?'}
        </button>
      )}
      <button onClick={() => navigate('/')}>← Kembali ke Menu</button>
    </div>
  );
}
