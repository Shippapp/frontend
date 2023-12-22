import React from "react";
import './styles/single.css'

export const MatchScreen = () => {
    return (
      <div className="match-screen">
        <div className="match-content">
          <h1 className="vibe-heading">You caught a vibe!</h1>
          <div className="matchsingle-ellipses-container">
            <div className="match-ellipse"></div>
            <div className="match-ellipse"></div>
          </div>
          <p className="message-text">Go ahead and message them</p>
          <button className="start-chat-button">Start chat</button>
          <button className="set-linkup-button">Set a linkup</button>
          <button className="back-button">Back</button>
        </div>
      </div>
    );
  }
  