import React from "react";
import './styles/deleteacc.css'

export const DeletePopUp = ({ onClose }) => {
    return (
      <div className="delete-popup-container">
        <div className="delete-popup">
          <p className="popup-text">Are you sure you want to delete your account?</p>
          <p className="popup-subtext">All your data and information will be permanently removed from our records.</p>
          <div className="button-container">
            <button className="red-secondary-button">
              Delete
            </button>
            <button className="primary-button" >
              Cancel
            </button>
          </div>
        </div>
        <div className="overlay" onClick={onClose}></div>
      </div>
    );
  };