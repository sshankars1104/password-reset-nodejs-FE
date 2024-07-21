import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://password-reset-nodejs-be.onrender.com/api/authenticate",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-4 border border-bg-primary-subtle border-2 m-2 p-3 rounded">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Login
              </button>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </form>

            <div className="forgot-password d-flex justify-content-center">
              <Link to="/forgot-password">Forget Password?</Link>
            </div>

            <div className="not-a-member d-flex justify-content-center mt-3">
              <p>
                Not a member? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
