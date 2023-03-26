import React, { useState } from "react";
import "./index.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h1 className="login-header">Alien Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="login-label">Username:</label>
          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="login-label">Password:</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
