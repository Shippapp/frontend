// Splash.js
import React from 'react';
import './styles/splash.css';

const Splash = () => {
  return (
    <div className="splash-container">
      <img src="/shipplogo.png" alt="Logo" className="logo" />
      <div className="slogan">
        <p>Find your vibe. Find your tribe.</p>
      </div>
    </div>
  );
};

export default Splash;
