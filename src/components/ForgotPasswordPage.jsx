import React, { useState } from "react";
import axios from "../api/axiosConfig";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://password-reset-nodejs-be.onrender.com/api/reset-password",
        { email }
      );
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Error requesting password reset"
      );
      setMessage("");
    }
  };

  return (
    <div className="container text-white">
      <div className="row  d-flex justify-content-center align-items-center vh-100 ">
        <div className="col-md-6 col-lg-4 bg-danger m-2 p-3 rounded ">
          <div className="forgot-password-form">
            <h2>Forgot Password</h2>
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
              <button type="submit" className="btn btn-primary mt-2 mb-2">
                Reset Password
              </button>
              {message && (
                <div className="alert alert-info" role="alert">
                  {message}
                </div>
              )}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
