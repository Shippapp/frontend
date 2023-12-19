import React from "react";
import './styles/connecttweet.css'

const ConnectTweetPopup = () => {
    return (
      <div className="connect-tweet-popup">
        <div className="tweet-title-container">
            <div className="tweet-title">Connect a Tweet</div>
        </div>
        <div className="link-box-container">
            <div className="link-box">Paste Link here</div>
        </div>
        <div className="connecttweet-buttons-container">
          <button className="prim-button">Done</button>
          <button className="sec-button">Back</button>
        </div>
      </div>
    );
  };
  
  export default ConnectTweetPopup;