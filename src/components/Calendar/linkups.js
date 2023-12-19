import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/linkups.css'
import { Switch } from 'antd';

export const MyLinkups = () => {
   
    const [linkUpToggleValue, setLinkUpToggleValue] = useState(false);
    const handleLinkUpToggleChange = (checked) => {
        setLinkUpToggleValue(checked);
        // Add any other logic you need for the random linkup generator toggle
      };
   
    return (
      <div className="my-linkups">
        {/* Top white container */}
      <div className="chat-screen">
        <div className="top-container">
          <div className="return-button">
            
          </div>
          <div className="myLinkups">Parleys</div>
          <div className="horizontalmenu-button">
            <svg width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="&#240;&#159;&#166;&#134; icon &#34;more horizontal&#34;">
                <path id="Vector" d="M12.5862 5C13.3171 5 13.9095 4.32843 13.9095 3.5C13.9095 2.67157 13.3171 2 12.5862 2C11.8554 2 11.2629 2.67157 11.2629 3.5C11.2629 4.32843 11.8554 5 12.5862 5Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M21.8494 5C22.5802 5 23.1727 4.32843 23.1727 3.5C23.1727 2.67157 22.5802 2 21.8494 2C21.1186 2 20.5261 2.67157 20.5261 3.5C20.5261 4.32843 21.1186 5 21.8494 5Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_3" d="M3.32329 5C4.05412 5 4.64657 4.32843 4.64657 3.5C4.64657 2.67157 4.05412 2 3.32329 2C2.59246 2 2 2.67157 2 3.5C2 4.32843 2.59246 5 3.32329 5Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
          </div>
        </div>

        {/*random date generator*/}
        <div className="toggle-item">
        <div className="random-linkup">Random Linkup Generator</div>
        <div className="toggle">
          <Switch
            checked={linkUpToggleValue}
            onChange={handleLinkUpToggleChange}
            style={{
              width: '65px',
              height: '33px',
              backgroundColor: linkUpToggleValue ? '#E87B00' : '#A9A9A9',
            }}
          />
        </div>
        </div>

          <div className="group-wrapper">
            <div className="group-3">
              <div className="text-wrapper-2">Fri</div>
              <div className="text-wrapper-3">17</div>
            </div>
          </div>
          <div className="overlap-2">
            <div className="arrow-right">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="COCO/Line/Arrow - Right">
                    <path id="Vector" d="M9.5 7L14.5 12L9.5 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </div>
            <div className="arrow-right"> 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="COCO/Line/Arrow - Right">
                    <path id="Vector" d="M9.5 7L14.5 12L9.5 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </div>
            <div className="text-wrapper-4">Upcoming</div>
            <div className="plus-math-wrapper">
              <div className="plus-math">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                <path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              </div>
            </div>
            <div className="group-4">
              <img className="ellipse" alt="User" src="ellipse-16.png" />
              <div className="text-wrapper-5">Ashley K</div>
              <div className="text-wrapper-6">pm</div>
              <div className="text-wrapper-7">3</div>
              <div className="text-wrapper-8">Picnic</div>
            </div>
            <div className="group-5">
              <img className="ellipse" alt="User" src="ellipse-17.png" />
              <div className="text-wrapper-9">Ryan G</div>
              <div className="text-wrapper-10">pm</div>
              <div className="text-wrapper-11">8</div>
              <div className="text-wrapper-12">Cocktails</div>
            </div>
            <div className="rectangle-2" />
          </div>
          <div className="text-wrapper-13">February</div>
         
          <div className="group-6">
            <div className="text-wrapper-15">Mon</div>
            <div className="text-wrapper-16">13</div>
          </div>
          <div className="group-7">
            <div className="text-wrapper-15">Tue</div>
            <div className="text-wrapper-17">14</div>
          </div>
          <div className="group-8">
            <div className="text-wrapper-15">Wed</div>
            <div className="text-wrapper-16">15</div>
          </div>
          <div className="group-9">
            <div className="text-wrapper-15">Thur</div>
            <div className="text-wrapper-18">16</div>
          </div>
          <div className="group-10">
            <div className="text-wrapper-15">Sat</div>
            <div className="text-wrapper-19">18</div>
          </div>
          <div className="group-11">
            <div className="text-wrapper-15">Sun</div>
            <div className="text-wrapper-20">19</div>
          </div>
          <div className="line">
            <svg width="364" height="3" viewBox="0 0 364 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-0.5" x2="364.001" y2="-0.5" transform="matrix(0.999996 -0.00289016 0.00342152 0.999994 0 2.05225)" stroke="#9D9D9D" stroke-opacity="0.27"/>
            </svg>
          </div>
        </div>
      
      {/* Bottom white container with rounded corners */}
      <div className="bottom-container">
        <div className="bottom-icons">
        <Link to="/myprofile" className="profile-icon">
                <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="COCO/Line/User">
                    <g id="Vector">
                    <path d="M1 30.0623C1 26.3086 3.9097 23.1113 7.86407 22.5197L8.22026 22.4664C11.3867 21.9927 14.6133 21.9927 17.7797 22.4664L18.1359 22.5197C22.0903 23.1113 25 26.3086 25 30.0623C25 31.6847 23.5969 33 21.8661 33H4.13393C2.40311 33 1 31.6847 1 30.0623Z" stroke="#666666" stroke-width="1.5"/>
                    <path d="M20 11.125C20 14.5077 16.866 17.25 13 17.25C9.13404 17.25 6.00003 14.5077 6.00003 11.125C6.00003 7.74226 9.13404 5 13 5C16.866 5 20 7.74226 20 11.125Z" stroke="#666666" stroke-width="1.5"/>
                    </g>
                    </g>
                </svg>
          </Link>
          <Link to="/shipphome" className="home-icon">
            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="COCO/Line/Copy">
                <path id="Vector" d="M11.4489 19.4247C10.891 16.9819 10.891 14.4396 11.4489 11.9968C12.2214 8.61427 14.793 5.97318 18.0865 5.17975C20.465 4.60675 22.9404 4.60675 25.3189 5.17975C28.6124 5.97318 31.184 8.61427 31.9566 11.9968C32.5145 14.4396 32.5145 16.9818 31.9566 19.4247C31.184 22.8072 28.6124 25.4483 25.3189 26.2417C22.9404 26.8147 20.465 26.8147 18.0865 26.2417M11.4489 19.4247C12.2214 22.8072 14.793 25.4483 18.0865 26.2417M11.4489 19.4247C11.0976 17.8866 10.9675 16.309 11.0586 14.7417C10.9298 14.7687 10.8013 14.7977 10.6731 14.8286C7.85007 15.5086 5.64585 17.7724 4.98367 20.6717C4.50544 22.7656 4.50544 24.9446 4.98367 27.0385C5.64585 29.9378 7.85007 32.2016 10.6731 32.8816C12.7118 33.3728 14.8335 33.3728 16.8723 32.8816C19.6953 32.2016 21.8995 29.9378 22.5617 27.0385C22.5917 26.9068 22.6199 26.7748 22.6462 26.6425C21.1201 26.7361 19.5841 26.6025 18.0865 26.2417" stroke="#666666" stroke-width="1.5"/>
                </g>
              </svg>
          </Link>
          <Link to="/mylinkups" className="calendar-icon">
            <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6713 4.75C15.3266 4.75 15.8579 5.24325 15.8579 5.85171V6.20935C15.9353 6.19106 16.0129 6.17343 16.0908 6.15646C19.3198 5.45325 22.6802 5.45325 25.9092 6.15646C25.9871 6.17343 26.0647 6.19106 26.1421 6.20935V5.85171C26.1421 5.24325 26.6734 4.75 27.3287 4.75C27.9841 4.75 28.5154 5.24325 28.5154 5.85171V7.01259C31.3188 8.26996 33.5354 10.4554 34.7134 13.1493C34.9571 13.7064 35.1562 14.2852 35.3069 14.8817C36.0644 17.8796 36.0644 20.9995 35.3069 23.9974C34.2131 28.3267 30.5722 31.7071 25.9092 32.7226C22.6802 33.4258 19.3198 33.4258 16.0908 32.7226C11.4278 31.7071 7.78686 28.3267 6.69306 23.9974C5.93565 20.9995 5.93565 17.8796 6.69306 14.8817C6.84377 14.2852 7.04293 13.7064 7.28657 13.1493C8.46464 10.4554 10.6812 8.26997 13.4846 7.01259V5.85171C13.4846 5.24325 14.0159 4.75 14.6713 4.75ZM13.4847 9.53017C12.2131 10.2796 11.134 11.2815 10.3268 12.462H31.6732C30.866 11.2815 29.7868 10.2796 28.5153 9.53016C28.5118 10.1358 27.9819 10.6258 27.3287 10.6258C26.6734 10.6258 26.1421 10.1326 26.1421 9.5241V8.50041C25.888 8.42519 25.6296 8.35881 25.3672 8.30166C22.4947 7.67609 19.5053 7.67609 16.6328 8.30166C16.3704 8.35881 16.112 8.42519 15.8579 8.50042V9.5241C15.8579 10.1326 15.3266 10.6258 14.6713 10.6258C14.0181 10.6258 13.4882 10.1358 13.4847 9.53017ZM24.321 20.3488C24.321 21.2081 23.9222 21.8427 23.2815 22.2658C24.1643 22.7549 24.6627 23.5614 24.6627 24.5C24.6627 26.2055 23.2957 27.2631 21.0886 27.2631C18.8672 27.2631 17.5144 26.2055 17.5144 24.5C17.5144 23.5614 18.0128 22.7549 18.8814 22.2658C18.2549 21.8427 17.8419 21.2081 17.8419 20.3488C17.8419 18.564 19.3371 17.6386 21.0886 17.6386C22.84 17.6386 24.321 18.564 24.321 20.3488ZM22.3701 20.4413C22.3701 19.7539 21.829 19.3572 21.0886 19.3572C20.3481 19.3572 19.807 19.7539 19.807 20.4413C19.807 21.1156 20.3481 21.5386 21.0886 21.5386C21.829 21.5386 22.3701 21.1156 22.3701 20.4413ZM19.4652 24.2621C19.4652 25.095 20.1487 25.5445 21.0886 25.5445C22.0284 25.5445 22.7119 25.095 22.7119 24.2621C22.7119 23.4424 22.0284 22.9929 21.0886 22.9929C20.1487 22.9929 19.4652 23.4424 19.4652 24.2621Z" fill="#E87B00"/>
            </svg>
          </Link>
          <Link to="/messages" className="messages-icon">
          <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="COCO/Line/Message-5">
                <path id="Vector" d="M6.27379 8.93805L14.7033 14.6163C16.3761 15.7431 18.6233 15.7431 20.2961 14.6163L28.7256 8.93805M4.20754 20.833C3.45816 17.9876 3.45816 15.0125 4.20754 12.167C5.1885 8.44227 8.32095 5.56234 12.2942 4.73223L12.9561 4.59394C15.9489 3.96869 19.0505 3.96869 22.0432 4.59394L22.7051 4.73222C26.6784 5.56234 29.8109 8.44228 30.7918 12.167C31.5412 15.0125 31.5412 17.9875 30.7918 20.833C29.8109 24.5577 26.6784 27.4377 22.7051 28.2678L22.0432 28.4061C19.0505 29.0313 15.9489 29.0313 12.9561 28.4061L12.2942 28.2678C8.32094 27.4377 5.1885 24.5577 4.20754 20.833Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
                </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
    );
  };
  