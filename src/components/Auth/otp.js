import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './styles/otp.css';
import logo from './assets/shipplogo2.png';

const supabaseUrl = 'https://umkjxmhkddltrcjudaem.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVta2p4bWhrZGRsdHJjanVkYWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2MjgxMTIsImV4cCI6MjAxNjIwNDExMn0.hw4MdS4POOqRKsB6GS7iK_Dt_3c70qX_iENq8XmIzVg';
const supabase = createClient(supabaseUrl, supabaseKey);

const OTPScreen = ({ userEmail }) => { // Receive userEmail as a prop
  const [otp, setOtp] = useState('');

  const handleOtpChange = (event) => {
    const newOtp = event.target.value;
    setOtp(newOtp);
  };

  const handleConfirm = async () => {
    try {
      const response = await supabase.auth.verifyOtp('email', otp);
      console.log('OTP verified:', response.data);
      // Successful verification, proceed to main app or next step
    } catch (error) {
      console.error('OTP verification error:', error);
      // Handle verification error, show error message to the user
    }
  };

  const handleResend = async () => {
    try {
      const response = await supabase.auth.api.resendVerification(userEmail, 'email'); // Use the received userEmail
      console.log('OTP resent:', response.data);
      setOtp(''); // Clear the OTP input
    } catch (error) {
      console.error('Resend error:', error);
      // Handle resend error
    }
  };

  return (
    <div className="otp-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo2" />
      </div>
      <div className="otp-box">
        <h2>One Time Password</h2>
        {<p>We have sent an OTP to {userEmail}. Enter it below to get verified</p>} 
        <div className="otp-input-container">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={otp[index - 1] || ''} // Pre-fill OTP inputs
              onChange={handleOtpChange}
            />
          ))}
        </div>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm
        </button>
        <p className="resend-text">
          Didn't receive any code? <span className="resend-link" onClick={handleResend}>Resend</span>
        </p>
      </div>
    </div>
  );
};

export default OTPScreen;
