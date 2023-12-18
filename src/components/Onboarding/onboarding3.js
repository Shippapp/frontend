import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./styles/3onboarding.css";
import backIcon from "./assets/Back.png";
import sortdownIcon from "./assets/sortdown.png";
import breadcrumbIcon3 from "./assets/3breadcrumb.png";

export const OnboardingPart3 = ({ onNext, onBack }) => {
  const [selectedLovelanguage, setSelectedLovelanguage] = useState("Not selected");
  const [lovelanguageDropdownVisible, setLovelanguageDropdownVisible] = useState(false);

  const lovelanguageOptions = [
    "Not selected",
    "Quality time",
    "Physical touch",
    "Acts of service",
    "Gifts",
    "Words of affirmation",
  ];

  const handleLovelanguageSelect = (option) => {
    setSelectedLovelanguage(option);
    setLovelanguageDropdownVisible(false);
  };

  return (
    <div className="part3-onboarding">
      <Link to="/onboarding2">
        <img className="back" alt="Back" src={backIcon} onClick={onBack} />
      </Link>
      <img className="group" alt="Group" src={breadcrumbIcon3} />
      <p className="text-wrapper">Choose at least 3 interests</p>
      <div className="interests-container">
        <div className="interest-box">Interest 1</div>
        <div className="interest-box">Interest 2</div>
        <div className="interest-box">Interest 3</div>
        <div className="interest-box">Interest 4</div>
        <div className="interest-box">Interest 5</div>
        <div className="interest-box">Interest 6</div>
        {/* Add more interest boxes as needed */}
      </div>
      <div className="dropdown-wrapper">
        <p className="dropdown-label">What's your love language?</p>
        <div
          className="dropdown"
          onClick={() => setLovelanguageDropdownVisible(!lovelanguageDropdownVisible)}
        >
          <p className="dropdown-text">{selectedLovelanguage}</p>
          <img
            className="sort-down-icon"
            alt="Sort down"
            src={sortdownIcon}
          />
        </div>
        {lovelanguageDropdownVisible && (
          <div className="dropdown-options">
            {lovelanguageOptions.map((option) => (
              <div
                key={option}
                className={`dropdown-option ${
                  selectedLovelanguage === option ? "selected" : ""
                }`}
                onClick={() => handleLovelanguageSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="next-button">
        <Link to="/onboarding4">
          <div className="next" onClick={onNext}>
            <div className="next-text">Next</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
