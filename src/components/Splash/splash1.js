import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/splash.css';
import Lottie from 'lottie-web';
import animationData from './assets/downanimation.json';

const OnboardingSplash = () => {
    
    useEffect(() => {
        const container = document.getElementById('lottie-container');
        Lottie.destroy();
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
            <div className="splash-title">Tap the down arrow to see a user's full profile
            </div>
            <div className="animation">
            <div>
                <div id="lottie-container" style={{ width: '300px', height: '300px' }}></div>
                {/* Additional content of your component */}
                </div>
            </div>
            <div className="icons-container1">
                <div className="breadcrumb-icon1">
                    <svg width="82" height="7" viewBox="0 0 82 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="52" height="7" rx="3.5" fill="white"/>
                        <rect x="59" width="8" height="7" rx="3.5" fill="white"/>
                        <rect x="74" width="8" height="7" rx="3.5" fill="white"/>
                    </svg>
                </div>
                <Link to="/splash2" className="nextbutton-icon1">
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

export default OnboardingSplash;