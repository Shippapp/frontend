// Settings.js
import React, { useState } from "react";
import './styles/settings.css'

const Settings = () => {
    
    
    const [selectedEthnicity, setSelectedEthnicity] = useState("Not selected");
    const [ethnicityDropdownVisible, setEthnicityDropdownVisible] = useState(false);
    const ethnicityOptions = [
        "Not selected",
        "Black, Black British, African, Caribbean",
        "Asian, Asian British",
        "White, White British, Irish, Gypsy",
        "Mixed, Mixed British, mixed ethnicities",
        "Other",
      ];

      const handleEthnicitySelect = (option) => {
        setSelectedEthnicity(option);
        setEthnicityDropdownVisible(false);
      };

  return (
    <div className="settings-container">
      <div className="top-container">
        {/* Top white container content */}
        <div className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
            </svg>
          </div>
          <div className="settings">Settings</div>
          <div className="done">Done
          </div>
      </div>
      <div className="filters-container">
        <label htmlFor="ageRange">Age Range</label>
        <input type="range" id="ageRange" min="18" max="65" />
        <label htmlFor="distanceRange">Distance (miles)</label>
        <input type="range" id="distanceRange" min="0" max="200" />
        <div className="frame-8">
                  <div className="text-wrapper-2">Ethnicity</div>
                  <div className="div-wrapper">
                    <div
                      className="dropdown"
                      onClick={() => setEthnicityDropdownVisible(!ethnicityDropdownVisible)}
                    >
                      <p className="dropdown-text">{selectedEthnicity}</p>
                      <div className="sort-down-icon">
                      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="20.000000pt" height="22.000000pt" viewBox="0 0 20.000000 22.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,22.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M73 103 l27 -28 27 28 28 27 -55 0 -55 0 28 -27z"/>
                            </g>
                            </svg>
                      </div>
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
      <div className="additional-settings">
        <div className="setting-item">
          <p>LGBTQIA+ focus</p>
          <div className="toggle"></div>
        </div>
        <div className="setting-item">
          <p>Push notifications</p>
          <div className="toggle"></div>
        </div>
        <div className="setting-item">
          <p>Privacy policy</p>
        </div>
        <div className="setting-item">
          <p>Help</p>
        </div>
      </div>
      <div className="bottom-container">
        {/* Bottom white container content with icons */}
        <div className="bottom-container">
        <div className="bottom-icons">
            <div className="profile-icon">
                <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="COCO/Line/User">
                    <g id="Vector">
                    <path d="M1 30.0623C1 26.3086 3.9097 23.1113 7.86407 22.5197L8.22026 22.4664C11.3867 21.9927 14.6133 21.9927 17.7797 22.4664L18.1359 22.5197C22.0903 23.1113 25 26.3086 25 30.0623C25 31.6847 23.5969 33 21.8661 33H4.13393C2.40311 33 1 31.6847 1 30.0623Z" stroke="#666666" stroke-width="1.5"/>
                    <path d="M20 11.125C20 14.5077 16.866 17.25 13 17.25C9.13404 17.25 6.00003 14.5077 6.00003 11.125C6.00003 7.74226 9.13404 5 13 5C16.866 5 20 7.74226 20 11.125Z" stroke="#666666" stroke-width="1.5"/>
                    </g>
                    </g>
                </svg>
          </div>
          <div className="home-icon">
            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="COCO/Bold/Copy">
                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M25.0307 26.7653C24.4249 26.9113 23.8128 27.0197 23.1976 27.0905C22.381 29.9695 20.1152 32.191 17.251 32.881C15.2087 33.373 13.0832 33.373 11.0409 32.881C8.0357 32.157 5.68922 29.7471 4.9843 26.6607C4.50523 24.5632 4.50523 22.3803 4.9843 20.2828C5.65615 17.3411 7.81914 15.0141 10.6224 14.1754C10.6914 13.5436 10.7969 12.9149 10.939 12.2928C11.7456 8.76132 14.4304 6.00392 17.869 5.17555C20.2242 4.60815 22.6754 4.60815 25.0307 5.17555C28.4692 6.00392 31.1541 8.76133 31.9606 12.2928C32.5131 14.7117 32.5131 17.2292 31.9606 19.6481C31.1541 23.1796 28.4692 25.937 25.0307 26.7653ZM17.869 26.7653C18.848 27.0012 19.8435 27.139 20.8419 27.1788C20.1039 28.9283 18.5976 30.2451 16.7506 30.6901C15.0374 31.1028 13.2545 31.1028 11.5413 30.6901C9.3463 30.1613 7.63244 28.4011 7.11756 26.1468C6.7157 24.3873 6.7157 22.5562 7.11756 20.7967C7.55081 18.8998 8.83301 17.3527 10.5365 16.5948C10.5694 17.466 10.6712 18.3351 10.8419 19.1934C10.8721 19.3453 10.9045 19.4969 10.939 19.6481C11.7456 23.1796 14.4304 25.937 17.869 26.7653Z" fill="#E87B00"/>
                </g>
            </svg>
          </div>
          <div className="calendar-icon">
            <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="COCO/Line/Calendar ">
                <path id="Vector" d="M6.70823 24.1434L7.43526 23.9593L6.70823 24.1434ZM6.70823 14.8093L7.43526 14.9935L6.70823 14.8093ZM35.2918 14.8093L34.5647 14.9935L35.2918 14.8093ZM35.2918 24.1434L34.5647 23.9593L35.2918 24.1434ZM26.0403 32.71L26.1994 33.4429L26.0403 32.71ZM15.9597 32.71L16.1189 31.977L15.9597 32.71ZM15.9597 6.24276L16.1189 6.97567L15.9597 6.24276ZM26.0403 6.24276L26.1994 5.50984L26.0403 6.24276ZM14.8726 4.75C14.8726 4.33579 14.5369 4 14.1226 4C13.7084 4 13.3726 4.33579 13.3726 4.75H14.8726ZM13.3726 8.7301C13.3726 9.14431 13.7084 9.4801 14.1226 9.4801C14.5369 9.4801 14.8726 9.14431 14.8726 8.7301H13.3726ZM28.6274 4.75C28.6274 4.33579 28.2916 4 27.8774 4C27.4631 4 27.1274 4.33579 27.1274 4.75H28.6274ZM27.1274 8.7301C27.1274 9.14431 27.4631 9.4801 27.8774 9.4801C28.2916 9.4801 28.6274 9.14431 28.6274 8.7301H27.1274ZM7.43526 23.9593C6.68825 21.0104 6.68825 17.9423 7.43526 14.9935L5.98119 14.6251C5.17294 17.8157 5.17294 21.137 5.98119 24.3276L7.43526 23.9593ZM34.5647 14.9935C35.3118 17.9423 35.3118 21.0104 34.5647 23.9593L36.0188 24.3276C36.8271 21.137 36.8271 17.8157 36.0188 14.6251L34.5647 14.9935ZM25.8811 31.977C22.6708 32.6743 19.3292 32.6743 16.1189 31.977L15.8006 33.4429C19.2206 34.1857 22.7794 34.1857 26.1994 33.4429L25.8811 31.977ZM16.1189 6.97567C19.3292 6.27839 22.6708 6.27839 25.8811 6.97567L26.1994 5.50984C22.7794 4.767 19.2206 4.767 15.8006 5.50985L16.1189 6.97567ZM16.1189 31.977C11.7816 31.035 8.43612 27.9102 7.43526 23.9593L5.98119 24.3276C7.13389 28.8779 10.957 32.3908 15.8006 33.4429L16.1189 31.977ZM26.1994 33.4429C31.043 32.3908 34.8661 28.8779 36.0188 24.3276L34.5647 23.9593C33.5639 27.9101 30.2184 31.035 25.8811 31.977L26.1994 33.4429ZM25.8811 6.97567C30.2184 7.91774 33.5639 11.0426 34.5647 14.9935L36.0188 14.6251C34.8661 10.0748 31.043 6.56188 26.1994 5.50984L25.8811 6.97567ZM15.8006 5.50985C10.957 6.56188 7.13389 10.0748 5.98119 14.6251L7.43526 14.9935C8.43612 11.0426 11.7816 7.91774 16.1189 6.97567L15.8006 5.50985ZM7.24528 13.8582H34.7547V12.3582H7.24528V13.8582ZM13.3726 4.75V8.7301H14.8726V4.75H13.3726ZM27.1274 4.75V8.7301H28.6274V4.75H27.1274Z" fill="#666666"/>
                <path id="Vector_2" d="M23.5233 22.0461C24.232 21.5901 24.673 20.9061 24.673 19.9798C24.673 18.0561 23.035 17.0586 21.0978 17.0586C19.1605 17.0586 17.5068 18.0561 17.5068 19.9798C17.5068 20.9061 17.9635 21.5901 18.6565 22.0461C17.6958 22.5733 17.1445 23.4426 17.1445 24.4543C17.1445 26.2926 18.6408 27.4326 21.0978 27.4326C23.539 27.4326 25.051 26.2926 25.051 24.4543C25.051 23.4426 24.4998 22.5733 23.5233 22.0461ZM21.0978 18.9111C21.9168 18.9111 22.5153 19.3386 22.5153 20.0796C22.5153 20.8063 21.9168 21.2623 21.0978 21.2623C20.2788 21.2623 19.6803 20.8063 19.6803 20.0796C19.6803 19.3386 20.2788 18.9111 21.0978 18.9111ZM21.0978 25.5801C20.0583 25.5801 19.3023 25.0956 19.3023 24.1978C19.3023 23.3143 20.0583 22.8298 21.0978 22.8298C22.1373 22.8298 22.8933 23.3143 22.8933 24.1978C22.8933 25.0956 22.1373 25.5801 21.0978 25.5801Z" fill="#666666"/>
                </g>
            </svg>
          </div>
          <div className="messages-icon">
            <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="COCO/Line/Message-5">
                <path id="Vector" d="M6.27379 8.93805L14.7033 14.6163C16.3761 15.7431 18.6233 15.7431 20.2961 14.6163L28.7256 8.93805M4.20754 20.833C3.45816 17.9876 3.45816 15.0125 4.20754 12.167C5.1885 8.44227 8.32095 5.56234 12.2942 4.73223L12.9561 4.59394C15.9489 3.96869 19.0505 3.96869 22.0432 4.59394L22.7051 4.73222C26.6784 5.56234 29.8109 8.44228 30.7918 12.167C31.5412 15.0125 31.5412 17.9875 30.7918 20.833C29.8109 24.5577 26.6784 27.4377 22.7051 28.2678L22.0432 28.4061C19.0505 29.0313 15.9489 29.0313 12.9561 28.4061L12.2942 28.2678C8.32094 27.4377 5.1885 24.5577 4.20754 20.833Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
                </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
  );
};

export default Settings
