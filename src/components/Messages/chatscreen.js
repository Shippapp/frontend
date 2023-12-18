import React from 'react';
import './styles/chatscreen.css';

export const Chatscreen = () => {
  return (
    <div>
      {/* Top white container */}
      <div className="chat-screen">
        <div className="top-container">
          <div className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
            </svg>
          </div>
          <div className="matchname">matchname</div>
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

        {/* Circle container */}
        <div className="circle-container">
          {/* Circle container content */}
          <div className="circle" />
          <div className="textwrapper">Say hi and get the conversation started!</div>
          <input type="text" placeholder="Type a message..." />
          <p className="help-text">Need help sliding in the DM? Here are some opening lines for you</p>
          <button className="see-prompts-button">See prompts</button>
        </div>
      </div>

      {/* Bottom white container with rounded corners */}
      <div className="bottom-container">
        <div className="bottom-icons">
          {/* Bottom icons content */}
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
                <g id="COCO/Line/Copy">
                <path id="Vector" d="M11.4489 19.4247C10.891 16.9819 10.891 14.4396 11.4489 11.9968C12.2214 8.61427 14.793 5.97318 18.0865 5.17975C20.465 4.60675 22.9404 4.60675 25.3189 5.17975C28.6124 5.97318 31.184 8.61427 31.9566 11.9968C32.5145 14.4396 32.5145 16.9818 31.9566 19.4247C31.184 22.8072 28.6124 25.4483 25.3189 26.2417C22.9404 26.8147 20.465 26.8147 18.0865 26.2417M11.4489 19.4247C12.2214 22.8072 14.793 25.4483 18.0865 26.2417M11.4489 19.4247C11.0976 17.8866 10.9675 16.309 11.0586 14.7417C10.9298 14.7687 10.8013 14.7977 10.6731 14.8286C7.85007 15.5086 5.64585 17.7724 4.98367 20.6717C4.50544 22.7656 4.50544 24.9446 4.98367 27.0385C5.64585 29.9378 7.85007 32.2016 10.6731 32.8816C12.7118 33.3728 14.8335 33.3728 16.8723 32.8816C19.6953 32.2016 21.8995 29.9378 22.5617 27.0385C22.5917 26.9068 22.6199 26.7748 22.6462 26.6425C21.1201 26.7361 19.5841 26.6025 18.0865 26.2417" stroke="#666666" stroke-width="1.5"/>
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
                <g id="COCO/Bold/Message-5">
                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M12.8475 4.57916C15.9121 3.97361 19.0881 3.97361 22.1527 4.57916L22.7937 4.70584C25.4384 5.22841 27.7372 6.54833 29.3571 8.37597C29.6216 8.67429 29.5327 9.10444 29.1834 9.32252L19.5042 15.3658C18.3009 16.1171 16.6993 16.1171 15.4959 15.3658L5.81677 9.32253C5.46748 9.10445 5.37859 8.67431 5.64301 8.37598C7.26293 6.54834 9.56176 5.22841 12.2064 4.70584L12.8475 4.57916ZM4.84884 11.2548C4.44353 11.0018 3.87853 11.1469 3.72509 11.5664C3.63939 11.8007 3.56272 12.0388 3.49545 12.2804C2.72385 15.0514 2.72385 17.9486 3.49545 20.7196C4.55213 24.5144 7.92639 27.4484 12.2064 28.2942L12.8475 28.4208C15.9121 29.0264 19.0881 29.0264 22.1527 28.4208L22.7937 28.2942C27.0738 27.4485 30.448 24.5144 31.5047 20.7196C32.2763 17.9486 32.2763 15.0514 31.5047 12.2804C31.4374 12.0388 31.3608 11.8007 31.2751 11.5664C31.1216 11.1468 30.5566 11.0018 30.1513 11.2548L20.8403 17.0682C18.8347 18.3204 16.1654 18.3204 14.1598 17.0682L4.84884 11.2548Z" fill="#E87B00"/>
                </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatscreen;