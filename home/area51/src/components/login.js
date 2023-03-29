import React, { useState } from 'react';
import lottie from 'lottie-web';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRememberMeChange = (event) => setRememberMe(event.target.checked);

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle authentication logic
    if (email === '') {
      setErrorMessage('Please enter your email address.');
    } else if (password === '') {
      setErrorMessage('Please enter your password.');
    } else {
      setErrorMessage('');
      console.log(`Email: ${email}, Password: ${password}, Remember me: ${rememberMe}`);
    }
  };

  return (
    
    <div className="login-container">
      <h1>Login</h1>
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
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Login</button>
      </form>
      <a href="#">Forgot password?</a>
      
    </div>
    
  );
};

export default Login;
