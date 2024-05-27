// src/Footer.js
import React from 'react';
import './Footer.css';


function Footer({ onBallSizeChange }) {
  return (
    <footer className="footer">
      <div className="footer-p-all">
      <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      </div>
      <div className="footer-button-all">
      <button className="footer-button" onClick={onBallSizeChange}>Documentation</button>
      <button className="footer-button" onClick={onBallSizeChange}>Support</button>
      </div>
    </footer>
  );
}

export default Footer;
