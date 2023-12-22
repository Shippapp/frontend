// src/components/SignUp.js
import React from 'react';
import './styles/signUp.css'; 
import logo from './assets/shipplogo2.png';

const SignUp = () => {
  return (
    <div className="signup-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="signup-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input className="box-input" type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input className="box-input" type="password" id="password" name="password" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Re-enter Password</label>
          <input className="box-input" type="password" id="password" name="password" />
        </div>
        <button className="signup-button">Sign Up</button>
        <div className="or-signup-with">Or</div>
        <div className="social-buttons">
          <button className="twitter-button">Continue with Twitter
            <div className="twitter-icon">
                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 17C0 7.61116 7.83502 0 17.5 0C27.165 0 35 7.61116 35 17C35 26.3888 27.165 34 17.5 34C7.83502 34 0 26.3888 0 17Z" fill="#55ACEE"/>
                    <path d="M16.9759 13.818L17.0126 14.4062L16.4006 14.3342C14.1727 14.0581 12.2264 13.1217 10.5739 11.5491L9.76599 10.7688L9.5579 11.345C9.11723 12.6295 9.39877 13.9861 10.3168 14.8984C10.8065 15.4027 10.6963 15.4747 9.85168 15.1746C9.5579 15.0785 9.30084 15.0065 9.27636 15.0425C9.19067 15.1265 9.48445 16.219 9.71703 16.6512C10.0353 17.2514 10.6841 17.8396 11.394 18.1878L11.9938 18.4639L11.2839 18.4759C10.5984 18.4759 10.5739 18.4879 10.6473 18.74C10.8922 19.5203 11.8592 20.3487 12.9364 20.7088L13.6953 20.9609L13.0343 21.3451C12.055 21.8973 10.9044 22.2094 9.75375 22.2334C9.20291 22.2454 8.75 22.2934 8.75 22.3295C8.75 22.4495 10.2434 23.1218 11.1125 23.3859C13.7198 24.1662 16.8167 23.8301 19.1425 22.4975C20.795 21.5491 22.4476 19.6644 23.2187 17.8396C23.6349 16.8672 24.0511 15.0905 24.0511 14.2382C24.0511 13.686 24.0878 13.6139 24.7733 12.9537C25.1773 12.5695 25.5567 12.1493 25.6302 12.0293C25.7526 11.8012 25.7404 11.8012 25.1161 12.0053C24.0756 12.3654 23.9287 12.3174 24.4428 11.7772C24.8223 11.393 25.2752 10.6967 25.2752 10.4927C25.2752 10.4566 25.0916 10.5167 24.8835 10.6247C24.6632 10.7448 24.1735 10.9248 23.8063 11.0329L23.1453 11.237L22.5455 10.8408C22.215 10.6247 21.7498 10.3846 21.505 10.3126C20.8807 10.1445 19.9259 10.1685 19.3628 10.3606C17.8327 10.9008 16.8657 12.2934 16.9759 13.818Z" fill="white"/>
                </svg>
            </div>
          </button>
          <button className="facebook-button">Continue with Facebook
            <div className="twitter-icon">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5Z" fill="#3B5998"/>
                    <path d="M19.324 27.7896V18.2687H21.9522L22.3005 14.9877H19.324L19.3285 13.3456C19.3285 12.4899 19.4098 12.0313 20.6388 12.0313H22.2819V8.75H19.6533C16.496 8.75 15.3847 10.3416 15.3847 13.0182V14.9881H13.4166V18.2691H15.3847V27.7896H19.324Z" fill="white"/>
                </svg>

            </div>
          </button>
        </div>
        <div className="terms-checkbox">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">By checking this box you agree to the terms of use and conditions</label>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
