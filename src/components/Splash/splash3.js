import React, { useEffect } from 'react';
import './styles/splash.css';
import Lottie from 'lottie-web';
import animationData from './assets/calendar.json';
import { Link } from 'react-router-dom';

const OnboardingSplash3 = () => {

    useEffect(() => {
        const container = document.getElementById('lottie-container');
        Lottie.destroy(); // Clean up existing animations
    
        if (container) {
          Lottie.loadAnimation({
            container,
            animationData,
            loop: true,
            renderer: 'svg', 
          });
        }
      }, []);

  return (
    <div className="splash-container">
        <div className="splash-title-container">
            <div className="splash3-title">Linkup with your matches quickly...
            </div>
            <div className="anime3" id="lottie-container" style={{ width: '300px', height: '300px' }}></div>
            <div className="splash31-title">...and keep track of your plans easily.
            </div>
            <div className="icons-container">
                <div className="breadcrumb-icon">
                    <svg width="82" height="7" viewBox="0 0 82 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="30" width="52" height="7" rx="3.5" fill="white"/>
                        <rect width="8" height="7" rx="3.5" fill="white"/>
                        <rect x="15" width="8" height="7" rx="3.5" fill="white"/>
                    </svg>
                </div>
                <Link to="/shipphome" className="nextbutton-icon">
                    <svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="25" cy="23.5" rx="25" ry="23.5" fill="#323232"/>
                        <path d="M23 32.355L31 23.6775L23 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
            </div>
      </div>
    </div>
  );
};

export default OnboardingSplash3;