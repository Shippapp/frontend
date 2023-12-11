import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/onboarding.css";
import calendarIcon from "./assets/calendaricon.png";
import sortdownIcon from "./assets/sortdown.png";
import infoIcon from "./assets/info.png";
import breadcrumbIcon from "./assets/breadcrumb.png";
import dpUpload from "./assets/dpupload.png";

export const OnboardingPart1 = () => {
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [selectedEthnicity, setSelectedEthnicity] = useState("Not selected");
  const [selectedGender, setSelectedGender] = useState("Not selected");
  const [selectedSexuality, setSelectedSexuality] = useState("Not selected");

  const [ethnicityDropdownVisible, setEthnicityDropdownVisible] = useState(false);
  const [genderDropdownVisible, setGenderDropdownVisible] = useState(false);
  const [sexualityDropdownVisible, setSexualityDropdownVisible] = useState(false);

  const ethnicityOptions = [
    "Not selected",
    "Black, Black British, African, Caribbean",
    "Asian, Asian British",
    "White, White British, Irish, Gypsy",
    "Mixed, Mixed British, mixed ethnicities",
    "Other",
  ];

  const genderOptions = [
    "Not selected",
    "Female",
    "Male",
    "Non-binary",
    "Genderfluid",
    "Genderqueer",
    "Other",
  ];

  const sexualityOptions = [
    "Not selected",
    "Heterosexual",
    "Bisexual",
    "Gay",
    "Lesbian",
    "Pansexual",
    "Other",
  ];

  const handleEthnicitySelect = (option) => {
    setSelectedEthnicity(option);
    setEthnicityDropdownVisible(false);
  };

  const handleGenderSelect = (option) => {
    setSelectedGender(option);
    setGenderDropdownVisible(false);
  };

  const handleSexualitySelect = (option) => {
    setSelectedSexuality(option);
    setSexualityDropdownVisible(false);
  };

  return (
    <div className="onboarding">
      <div className="group"></div>
      <div className="frame">
        <div className="div">
          <div className="frame-2">
            <div className="group-2">
              <img
                className="breadcrumb"
                alt="breadcrumb"
                src={breadcrumbIcon}
              />
            </div>
            <div className="text-wrapper">Let's get you started!</div>
          </div>
          <div className="group-wrapper">
            <div className="overlap-group-2">
              <img
                className="dp-upload"
                alt="profile"
                src={dpUpload}
              />
            </div>
          </div>
        </div>
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-2">First name</div>
                  <div className="div-wrapper">
                    <div className="overlap-group-3">
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="E.g John"
                        style={{ borderRadius: "20px", padding: "10px", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-2">Last name</div>
                  <div className="div-wrapper">
                    <div className="overlap-group-3">
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="E.g Appleseed"
                        style={{ borderRadius: "20px", padding: "10px", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-6">
                <div className="frame-8">
                  <div className="text-wrapper-2">Date of Birth</div>
                  <div className="div-wrapper">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-4">Birthday</div>
                      <img
                        className="icon-calendar"
                        alt="Icon calendar"
                        src={calendarIcon}
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-2">Ethnicity</div>
                  <div className="div-wrapper">
                    <div
                      className="dropdown"
                      onClick={() => setEthnicityDropdownVisible(!ethnicityDropdownVisible)}
                    >
                      <p className="dropdown-text">{selectedEthnicity}</p>
                      <img
                        className="sort-down-icon"
                        alt="Sort down"
                        src={sortdownIcon}
                      />
                    </div>
                    {ethnicityDropdownVisible && (
                      <div className="dropdown-options">
                        {ethnicityOptions.map((option) => (
                          <div
                            key={option}
                            className={`dropdown-option ${
                              selectedEthnicity === option ? "selected" : ""
                            }`}
                            onClick={() => handleEthnicitySelect(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-2">Gender</div>
                  <div className="div-wrapper">
                    <div
                      className="dropdown"
                      onClick={() => setGenderDropdownVisible(!genderDropdownVisible)}
                    >
                      <p className="dropdown-text">{selectedGender}</p>
                      <img
                        className="sort-down-icon"
                        alt="Sort down"
                        src={sortdownIcon}
                      />
                    </div>
                    {genderDropdownVisible && (
                      <div className="dropdown-options">
                        {genderOptions.map((option) => (
                          <div
                            key={option}
                            className={`dropdown-option ${
                              selectedGender === option ? "selected" : ""
                            }`}
                            onClick={() => handleGenderSelect(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-2">Sexuality</div>
                  <div className="div-wrapper">
                    <div
                      className="dropdown"
                      onClick={() => setSexualityDropdownVisible(!sexualityDropdownVisible)}
                    >
                      <p className="dropdown-text">{selectedSexuality}</p>
                      <img
                        className="sort-down-icon"
                        alt="Sort down"
                        src={sortdownIcon}
                      />
                    </div>
                    {sexualityDropdownVisible && (
                      <div className="dropdown-options">
                        {sexualityOptions.map((option) => (
                          <div
                            key={option}
                            className={`dropdown-option ${
                              selectedSexuality === option ? "selected" : ""
                            }`}
                            onClick={() => handleSexualitySelect(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-9">
              <img className="info" alt="Info" src={infoIcon} />
              <p className="p">
                Your last name, ethnicity, gender, and sexuality will not be made public
              </p>
            </div>
          </div>
          <div className="overlap-wrapper">
            <Link to="/onboarding2">
              <div className="overlap">
                <div className="text-wrapper-7">Next</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
