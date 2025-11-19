import React from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  image: string;
  name: string;
  jobTitle: string;
  description: string;
  contact: string;
}

const ProfileCard = ({ image, name, jobTitle, description, contact }: ProfileCardProps) => {
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
