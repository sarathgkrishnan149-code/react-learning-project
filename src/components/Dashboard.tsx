import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome to Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card profile-card" onClick={() => navigate("/profile")}>
          <h2>Profile</h2>
          <p>View and update your profile details</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("/todolist")}>
          <h2>To-Do List</h2>
          <p>Manage your daily tasks</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("/about")}>
          <h2>About Us</h2>
          <p>Learn more about us</p>
        </div>
        <div className="dashboard-card" onClick={() => navigate("/contact")}>
          <h2>Contact</h2>
          <p>Get in touch with us</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
