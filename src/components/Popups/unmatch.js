import React from "react";
import './styles/unmatch.css'

export const UnmatchPopUp = ({ onCancel, onUnmatch, onClose }) => {
    return (
      <div className="unmatch-popup-container">
        <div className="unmatch-popup">
          <p className="popup-text">Are you sure you want to unmatch with this user?</p>
          <div className="button-container">
            <button className="secondary-button" onClick={onCancel}>
              Cancel
            </button>
            <button className="primary-button" onClick={onUnmatch}>
              Unmatch
            </button>
          </div>
        </div>
        <div className="overlay" onClick={onClose}></div>
      </div>
    );
  };