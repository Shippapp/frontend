// src/components/SignUp.js
import React from 'react';
import './styles/signUp.css'; 
import logo from './assets/shipplogo2.png';

const SignUp = () => {
  return (
    <div className="signup-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="signup-form">
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="signup-button">Sign Up</button>
        <div className="or-signup-with">Or sign up with</div>
        <div className="social-buttons">
          <button className="twitter-button">Twitter</button>
          <button className="facebook-button">Facebook</button>
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
