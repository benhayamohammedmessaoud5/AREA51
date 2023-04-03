import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleForgotPasswordFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Replace this with your actual password reset logic
    console.log(`Email: ${email}`);
    setSuccess(true);
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      {success ? (
        <p>Please check your email for password reset instructions.</p>
      ) : (
        <form onSubmit={handleForgotPasswordFormSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
