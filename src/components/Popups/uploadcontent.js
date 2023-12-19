import React from "react";
import './styles/uploadcontent.css'

const UploadContentPopup = () => {
    return (
      <div className="upload-content-popup">
        <div className="popup-title">What's the funniest content you've come across?</div>
        <div className="popup-subtitle">Go ahead and show us!</div>
        <div className="button-container">
          <button className="upload-button">Upload a meme</button>
          <button className="connect-button">Connect a TikTok</button>
          <button className="connect-button">Connect a Tweet</button>
        </div>
      </div>
    );
  };
  
  export default UploadContentPopup;