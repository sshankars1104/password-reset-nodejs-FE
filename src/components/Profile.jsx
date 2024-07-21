import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
        const response = await axios.get(
          "https://password-reset-nodejs-be.onrender.com/api/protected",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.user);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user data");
        setLoading(false);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <h1>Welcome, {user.email}!</h1>
      <p>Login successful. This is your profile page.</p>
    </div>
  );
};

export default Profile;
