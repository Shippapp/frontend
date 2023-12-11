// OnboardingPart4.js
import React from "react";
import { Link } from 'react-router-dom';
import "./styles/4onboarding.css";
import backIcon from "./assets/Back.png";
import sortdownIcon from "./assets/sortdown.png";
import breadcrumbIcon4 from "./assets/4breadcrumb.png";
import infoIcon from "./assets/info.png";

export const OnboardingPart4 = ({ onNext, onBack }) => {
  return (
    <div className="part4-onboarding">
      <Link to="/onboarding3">
        <img className="back" alt="Back" src={backIcon} onClick={onBack} />
      </Link>
      <img className="group" alt="Group" src={breadcrumbIcon4} />
      <p className="title">Personality Type (optional)</p>
      <p className="subtitle">If you know your MBTI personality type, select below</p>
      <div className="dropdown-wrapper">
        <div className="dropdown">
          <p className="dropdown-text">Select your MBTI personality type</p>
          <img
            className="sort-down-icon"
            alt="Sort down"
            src={sortdownIcon}
          />
        </div>
      </div>
      <p className="or-text">Or</p>
      <button className="quiz-button">Take the quiz</button>
      <div className="info-wrapper">
        <img className="info-icon" alt="Info" src={infoIcon} />
        <p className="info-text">This step enables the group match feature. But you can always take the quiz later.</p>
      </div>
      <div className="next-button">
        <Link to="/signup">
          <div className="next" onClick={onNext}>
            <div className="next-text">Finish</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
