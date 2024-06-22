import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login data to the backend
      await axios.post('/api/login', { email, password });
      setIsOtpSent(true);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    try {
      // Verify OTP with the backend
      await axios.post('/api/verify-otp', { email, otp });
      navigate('/home');
    } catch (error) {
      console.error('OTP verification error:', error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {!isOtpSent ? (
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      ) : (
        <form onSubmit={handleOtpVerify}>
          <div className="form-group">
            <label>OTP</label>
            <input
              type="text"
              className="form-control"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
