import React, { useState } from 'react';
import './login.css';
import  './ForgotPassword.js';
import ForgotPassword from './ForgotPassword.js';
import { Link } from 'react-router-dom';

 



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRememberMeChange = (event) => setRememberMe(event.target.checked);

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Replace this with your actual authentication logic
    if (email === 'user@example.com' && password === 'password') {
      console.log(`Email: ${email}, Password: ${password}, Remember me: ${rememberMe}`);
      // TODO: Handle successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    
    <div className="login-container">
      <h1>Login</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleLoginFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div className="remember-me">
          <input
            type="checkbox"
            id="remember-me"
            name="remember-me"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="forgot-password">
        <a href="./ForgotPassword.js" target="_blank" rel="noopener noreferrer">Forgot Password ?</a>
      </div>
      <div className="create-account">
        <span>Don't have an account?</span>
        <a href="AccountForm.js"><br></br>Create one</a>
      </div>
    </div>
  );
};

export default Login;

