// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Our Application!</h1>
        <p className="lead">
          This is a simple application to demonstrate Password Reset Flow...
        </p>
        <hr className="my-4" />
        <p>Click below to login or sign up and start using the app.</p>
        <Link className="btn btn-primary btn-lg " to="/login" role="button">
          Login
        </Link>
        <Link
          className="btn btn-secondary btn-lg ml-2"
          to="/signup"
          role="button"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
