import React, { useState } from "react";
import { loginUser } from "../services/authServices"; // Import your login function
import { useNavigate } from "react-router-dom"; // Updated import for navigation
import "../styles/Login.css"; // Import the external CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate(); // Updated hook for redirecting after login

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 
    setSuccessMessage(null); 

    try {
      const credentials = { username, password };
      const response = await loginUser(credentials);

      setSuccessMessage("Login successful!");
      console.log("Logged in successfully:", response);
      
      navigate("/dashboard"); // Redirect to a page, like dashboard
    } catch (err: any) {
      setError(err.message || "Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="loginUsername">Username:</label>
          <input
            id="loginUsername"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            title="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password:</label>
          <input
            id="loginPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            title="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn-submit">Login</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <div className="no-account">
        <p>Don't have an account? <span className="register-link" onClick={() => navigate("/register")}>Register here</span></p>
      </div>
    </div>
  );
};

export default Login;
