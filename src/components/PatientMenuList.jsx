import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import profileImage from "../images/profile.png";
import postSessionNotesIcon from "../images/post-session-notes.svg";
import prescriptionIcon from "../images/add-prescription.svg";

const PatientMenuList = () => {
  
  const menuItems = [
    {
      id: 1,
      icon: postSessionNotesIcon,
      title: "General Information",
      path: "/patient-general-information",
    },
    {
      id: 2,
      icon: postSessionNotesIcon,
      title: "Digital Journal",
      path: "/patient-digital-journal",
    },
    {
      id: 3,
      icon: postSessionNotesIcon,
      title: "Post Session Notes",
      path: "/patient-post-session-notes",
    },
    {
      id: 4,
      icon: prescriptionIcon,
      title: "Prescriptions",
      path: "/patient-prescription",
    },
    {
      id: 5,
      icon: postSessionNotesIcon,
      title: "Session Synopsis",
      path: "/patient-session-synopsis",
    },
    {
      id: 6,
      icon: postSessionNotesIcon,
      title: "Homework",
      path: "/patient-homework",
    },
  ];

  return (
    <div className="user-menu-list">
      <div className="user-heading">
        <img className="user-image" alt="" src={profileImage} />
        <div className="profile">
          <div className="username">
            <span>Dr. Ramesh Thakur</span>
          </div>
          <div className="user-number">
            <span>+91 74002 96867</span>
          </div>
        </div>
      </div>
      <div className="menu-list-container">
        <div className="menu-list">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.id}>
              <MenuItem icon={item.icon} title={item.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientMenuList;
