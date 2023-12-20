// Inside your ProfilePromptsPopup.js file
import React from "react";
import './styles/profileprompts.css';

const ProfilePromptsPopup = () => {
  const prompts = [
    "One thing about me is…",
    "The soundtrack to my life is…",
    "An ideal linkup would be…",
    "The last good book I read was…",
    "We can’t be friends if…",
    "Dinner with Jay Z or $100,000?",
    "No one can convince me that…",
    "The best true crime doc is…",
    "I can show you how to…",
    "First things first…"
  ];

  return (
    <div className="profile-prompts-popup">
      <div className="prompts-container">
        {prompts.map((prompt, index) => (
          <div key={index} className="prompt-box">
            {prompt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePromptsPopup;
