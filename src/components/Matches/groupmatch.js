import React from "react";
import './styles/group.css'

export const GroupMatchScreen = () => {
    return (
      <div className="group-match-screen">
        <div className="match-content">
          <div className="tribe-heading">Looks like you found a tribe!</div>
          <div className="ellipses-container">
            <div className="ellipse-1"></div>
            <div className="ellipse-2"></div>
            <div className="ellipse-3"></div>
            <div className="ellipse-4"></div>
          </div>
          <button className="start-group-chat-button">Start group chat</button>
          <button className="set-linkup-button">Set a linkup</button>
          <button className="back-button">Back</button>
        </div>
      </div>
    );
  };
