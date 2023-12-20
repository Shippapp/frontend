import React from "react";
import './styles/connecttiktok.css'

const ConnectTikTokPopup = () => {
    return (
      <div className="connect-tiktok-popup">
        <div className="tiktok-title-container">
            <div className="tiktok-title">Connect a TikTok</div>
        </div>
        <div className="link-box-container">
            <div className="link-box">Paste Link here</div>
        </div>
        <div className="connecttiktok-buttons-container">
          <button className="prim-button">Done</button>
          <button className="sec-button">Back</button>
        </div>
      </div>
    );
  };
  
  export default ConnectTikTokPopup;