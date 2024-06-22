import React from 'react';
import { useNavigate } from 'react-router-dom';
const PasswordResetForm = () => {
    const navigate = useNavigate();
  // Example function using history.push
  const handleLoginRedirect = () => {
    history.push('/login');
  };

  return (
    <div>
      <h2>Password Reset Form</h2>
      {/* Example button to trigger the redirection */}
      <button onClick={handleLoginRedirect}>Go to Login</button>
      {/* Your password reset form UI and logic here */}
    </div>
  );
};

export default PasswordResetForm;
