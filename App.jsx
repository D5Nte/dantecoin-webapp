
import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem('dantecoins');
    return saved ? parseInt(saved) : 0;
  });

  const handleMine = () => {
    const newTotal = coins + 1;
    setCoins(newTotal);
    localStorage.setItem('dantecoins', newTotal.toString());
  };

  return (
    <div className="app">
      <h1>Dantecoin 🪙</h1>
      <p>Ты намайнрил: <span>{coins}</span> DANTE</p>
      <button onClick={handleMine}>🪙 Майнить</button>
    </div>
  );
}

export default App;
