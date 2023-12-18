import React from "react";
import './styles/blocker.css'

export const BlockPopUp = ({ onCancel, onBlock, onClose }) => {
    return (
      <div className="block-popup-container">
        <div className="block-popup">
            <div className="block-icon">
                <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 264">
                    <g id="&#240;&#159;&#166;&#134; icon &#34;heart&#34;">
                    <path id="Vector" d="M77.6048 31.8624C76.212 30.3209 74.5583 29.098 72.7383 28.2637C70.9182 27.4294 68.9674 27 66.9973 27C65.0271 27 63.0763 27.4294 61.2562 28.2637C59.4362 29.098 57.7825 30.3209 56.3898 31.8624L53.4993 35.0601L50.6088 31.8624C47.7955 28.7501 43.9799 27.0016 40.0013 27.0016C36.0227 27.0016 32.2071 28.7501 29.3938 31.8624C26.5805 34.9747 25 39.1959 25 43.5974C25 47.9988 26.5805 52.22 29.3938 55.3323L32.2843 58.5301L53.4993 82L74.7143 58.5301L77.6048 55.3323C78.9982 53.7915 80.1035 51.9621 80.8577 49.9486C81.6118 47.9351 82 45.7769 82 43.5974C82 41.4178 81.6118 39.2597 80.8577 37.2461C80.1035 35.2326 78.9982 33.4032 77.6048 31.8624Z" fill="#E87B00" stroke="#E87B00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <g id="Group 40">
                    <circle id="Ellipse 10" cx="54" cy="54" r="49" stroke="white" stroke-width="10"/>
                    <line id="Line 10" x1="82.0304" y1="16.959" x2="24.0304" y2="95.959" stroke="white" stroke-width="10"/>
                    </g>
                    </g>
                </svg>
            </div>
          <p className="popup-text">If this user is sending inappropriate messages then you can block and report them</p>
          <div className="button-container">
            <button className="secondary-button" onClick={onCancel}>
              Cancel
            </button>
            <button className="primary-button" onClick={onBlock}>
              Block
            </button>
          </div>
        </div>
        <div className="overlay" onClick={onClose}></div>
      </div>
    );
  };