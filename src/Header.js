// src/Header.js
import React from 'react';
import './Header.css';


function Header({ onBallSizeChange }) {
  return (
    <header className="header">
      <img src="motionarteffect-img0.png" alt="Logo" className="header-logo" />
      <button className="header-button" onClick={onBallSizeChange}>Buy now</button>
    </header>
  );
}

export default Header;

