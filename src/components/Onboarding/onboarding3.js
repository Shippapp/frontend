import React from "react";
import { Link } from 'react-router-dom';
import "./styles/3onboarding.css";
import backIcon from "./assets/Back.png";
import sortdownIcon from "./assets/sortdown.png";
import breadcrumbIcon3 from "./assets/3breadcrumb.png";

export const OnboardingPart3 = ({ onNext, onBack }) => {
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
        {/* Add more interest boxes as needed */}
      </div>
      <div className="dropdown-wrapper">
        <p className="dropdown-label">What's your love language?</p>
        <div className="dropdown">
          <p className="dropdown-text">Select a love language</p>
          <img
            className="sort-down-icon"
            alt="Sort down"
            src={sortdownIcon}
          />
        </div>
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

