import React from "react";
import './styles/specialacc.css'

export const SpecialAccessPopUp = ({ onClose }) => {
    return (
      <div className="access-popup-container">
        <div className="access-popup">
          <p className="access-popup-text">Oops! looks like you need special access for this feature.</p>
          <div className="access-button-container">
            <button className="access-primary-button">
            Watch an ad
            </button>
            <button className="access-primary-button" >
              Get a subscription
            </button>
          </div>
        </div>
        <div className="overlay" onClick={onClose}></div>
      </div>
    );
  };