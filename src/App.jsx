import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import Profile from "./components/Profile";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
