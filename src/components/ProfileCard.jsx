import React from "react";


const ProfileCard = ({ iconSrc, firstName, lastName }) => {
  return (
    <div className="profile-card">
      <img className="profile-card-icon" alt="" src={iconSrc} />
      <span className="profile-card-title">
        <span className="first-name">{firstName}</span>
        <span className="last-name">{lastName}</span>
      </span>
    </div>
  );
};

export default ProfileCard;
