import React from "react";
import './styles/answerprompt.css'

const AnswerPromptPopup = () => {
    return (
      <div className="answer-prompt-popup">
        <div className="prompt-title-container">
            <div className="prompt-title">Selected Prompt</div>
        </div>
        <div className="answer-prompt-container">
            <div className="link-box">Type something here</div>
        </div>
        <div className="answerprompt-buttons-container">
          <button className="prim-button">Done</button>
          <button className="sec-button">Back</button>
        </div>
      </div>
    );
  };
  
  export default AnswerPromptPopup;