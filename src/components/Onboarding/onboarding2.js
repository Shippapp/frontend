import React from "react";
import "./styles/2onboarding.css";
import breadcrumbIcon2 from "./assets/2breadcrumb.png";
import plusIcon from "./assets/plusicon.png";
import backIcon from "./assets/Back.png";
import instagramIcon from "./assets/Instagram.png";
import { Link } from 'react-router-dom';

export const OnboardingPart2 = ({ onNext, onBack }) => {
  return (
    <div className="part2-onboarding">
      <div className="onboarding">
        <Link to="/onboarding1">
          <img className="back" alt="Back" src={backIcon} onClick={onBack} />
        </Link>
        <img className="group" alt="Group" src={breadcrumbIcon2} />
        <p className="text-wrapper">
          Build your profile with your favorite memes, tweets, and TikToks
        </p>
        <p className="div">(You must upload at least one meme)</p>
        <div className="frame">
          <div className="rectangle" />
          <img className="img" alt="Group" src={plusIcon} />
        </div>
        <div className="frame-2">
          <div className="rectangle" />
          <img className="img" alt="Group" src={plusIcon} />
        </div>
        <div className="frame-3">
          <div className="rectangle" />
          <img className="img" alt="Group" src={plusIcon} />
        </div>
        <div className="frame-4">
          <div className="rectangle" />
          <img className="img" alt="Group" src={plusIcon} />
        </div>
        <div className="frame-5">
          <div className="frame-6">
            <p className="p">Answer at least one prompt</p>
            <div className="frame-7">
              <div className="div-wrapper">
                <div className="text-wrapper-2">1.</div>
              </div>
              <div className="frame-8">
                <div className="text-wrapper-2">2.</div>
              </div>
              <div className="frame-8">
                <div className="text-wrapper-2">3.</div>
              </div>
            </div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-3">Connect Instagram (optional)</div>
            <div className="frame-10">
              <div className="ellipse" />
              <img
                className="instagram"
                alt="Instagram"
                src={instagramIcon}
              />
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <Link to="/onboarding3">
            <div className="overlap-group" onClick={onNext}>
              <div className="text-wrapper-4">Next</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
