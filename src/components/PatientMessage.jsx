import React from "react";
import rightArrow from "../images/right-arrow.svg";


const PatientMessage = ({ iconSrc, name, who }) => {
  return (
    <div className="patient-message">
      <div className="patient-message-card">
        <img className="patient-message-card-icon" alt="" src= {iconSrc} />
        <span className="patient-message-card-title">
          <span className="name">{name}</span>
          <span className="who">{who}</span>
        </span>
      </div>
      <div className="right-arrow">
        <img className="right-arrow-icon" alt="" src={rightArrow} />
      </div>
    </div>
  );
};

export default PatientMessage;
