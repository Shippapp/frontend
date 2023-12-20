import React from "react";
import './styles/spotifyprompt.css'

const SpotifyPromptPopup = () => {
    return (
      <div className="spotify-prompt-popup">
        <div className="spotify-title-container">
            <div className="spotify-logo">
                
            </div>
            <div className="prompt-title">The soundtrack to my life is</div>
        </div>
        <div className="spotify-prompt-container">
            <div className="link-box">Type something here</div>
        </div>
        <div className="spotifyprompt-buttons-container">
          <button className="prim-button">Done</button>
          <button className="sec-button">Back</button>
        </div>
      </div>
    );
  };

  export default SpotifyPromptPopup
  