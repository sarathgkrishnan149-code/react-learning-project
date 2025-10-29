import React from "react";
import "./ProfileCard.css";
const ProfileCard = ({ image, name, jobTitle, description, contact }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <h4>{jobTitle}</h4>
      <p>{description}</p>
      <p><strong>Contact:</strong> {contact}</p>
    </div>
  );
};

export default ProfileCard;
