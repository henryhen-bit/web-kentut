import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import WhackAMole from './pages/WhackAMole';
import TicTacToe from './pages/TicTacToe';
import Racing from './pages/Racing';
import Quiz from './pages/Quiz';
// import NameMatch from './NameMatch';
import TebakGambar from './pages/TebakGambar';
import LevelPlay from './pages/LevelPlay';
import Admin from './pages/Admin';
// ... import game lainnya

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mole" element={<WhackAMole />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/racing-game" element={<Racing />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/tebak-gambar" element={<TebakGambar />} />
        <Route path="/tebak-gambar/level/:levelId" element={<LevelPlay />} />
        <Route path="/admin" element={<Admin />} />
        {/* Tambah route game lain */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
