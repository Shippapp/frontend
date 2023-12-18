import React from "react";
import './styles/blocker.css'

export const BlockDonePopUp = ({ onDone, onClose }) => {
    return (
      <div className="blockpopup-container">
        <div className="block-popup">
            <div className="tick-icon">
                <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="&#240;&#159;&#166;&#134; icon &#34;check circle&#34;">
                    <path id="Vector" d="M86.9068 42.2091V45.9768C86.9017 54.8081 84.0421 63.4012 78.7543 70.4744C73.4665 77.5477 66.034 82.7222 57.5651 85.2261C49.0963 87.7301 40.0449 87.4294 31.7609 84.3689C23.4769 81.3084 16.4041 75.652 11.5974 68.2434C6.79075 60.8348 4.5077 52.0709 5.08877 43.2588C5.66984 34.4467 9.0839 26.0584 14.8218 19.3451C20.5596 12.6318 28.3139 7.95317 36.928 6.00692C45.5422 4.06067 54.5547 4.9511 62.6214 8.54543" stroke="#038809" stroke-width="8.19068" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_2" d="M86.9069 13.2139L45.9535 54.2082L33.6675 41.9222" stroke="#038809" stroke-width="8.19068" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                 </svg>
            </div>
          <p className="popup-text">You have successfully blocked and reported this user</p>
          <div className="button-container">
            <button className="primary-button" onClick={onDone}>
              Done
            </button>
          </div>
        </div>
        <div className="overlay" onClick={onClose}></div>
      </div>
    );
  };