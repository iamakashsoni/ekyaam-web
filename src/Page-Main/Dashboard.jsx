import React, { useState, useEffect, useRef } from "react";
import StatsCardContainer from "../components/StatsCardContainer";
import FrameContainer from "../components/FrameContainer";
import ProfileCard from "../components/ProfileCard";
import PatientMessage from "../components/PatientMessage";
import profileImage from "../images/profile.png";
import healthIcon from "../images/health.svg";
import messageIcon from "../images/messageIcon.svg";
import SessionContainer from "../components/SessionContainer";
import AddUserPopup from "../components/AddUserPopup";

const Dashboard = () => {
  const [isAddUserPopupVisible, setAddUserPopupVisible] = useState(false);

  const handleShowAddUserPopup = () => {
    setAddUserPopupVisible(true);
  };

  const handleCloseAddUserPopup = () => {
    setAddUserPopupVisible(false);
  };

  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isAddUserPopupVisible && popupRef.current && !popupRef.current.contains(event.target)) {
        handleCloseAddUserPopup();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isAddUserPopupVisible]);


  return (
    <>
      <div className="main-content container-fluid">
        <div className="row">
          <div className="goodmorning-frame col-md-6">
            <h3>Good Morning</h3>
            <p>Dr. Ramesh Thakur</p>
          </div>
          <div className="prescription-button col-md-6">
            <button className="rectangle-border-btn">Add Prescription</button>
            <button className="rectangle-user-btn" onClick={handleShowAddUserPopup}>
              Add User
            </button>
          </div>
        </div>
        <StatsCardContainer />
        <div className="frame-parent">
          <FrameContainer headerIconSrc={healthIcon} headerText="Available Therapists">
            <div className="row">
              <div className="col-3 col-md-3">
                <ProfileCard iconSrc={profileImage} firstName="Madhu" lastName="Pandey" />
              </div>
              <div className="col-3 col-md-3">
                <ProfileCard iconSrc={profileImage} firstName="John" lastName="Doe" />
              </div>
              <div className="col-3 col-md-3">
                <ProfileCard iconSrc={profileImage} firstName="Emma" lastName="Smith" />
              </div>
              <div className="col-3 col-md-3">
                <ProfileCard iconSrc={profileImage} firstName="Emma" lastName="Smith" />
              </div>
              <div className="col-6 col-md-3 d-none d-md-block">
                <ProfileCard iconSrc={profileImage} firstName="Sarah" lastName="Johnson" />
              </div>
              <div className="col-6 col-md-3 d-none d-md-block">
                <ProfileCard iconSrc={profileImage} firstName="Michael" lastName="Brown" />
              </div>
              <div className="col-6 col-md-3 d-none d-md-block">
                <ProfileCard iconSrc={profileImage} firstName="Olivia" lastName="Davis" />
              </div>
              <div className="col-6 col-md-3 d-none d-md-block">
                <ProfileCard iconSrc={profileImage} firstName="Daniel" lastName="Wilson" />
              </div>
            </div>
          </FrameContainer>
          <FrameContainer headerIconSrc={messageIcon} headerCount="3" headerText="Unread Chats">
            <div className="row">
              <div className="col-12">
                <PatientMessage iconSrc={profileImage} name="Vishwanath Sawant" who="Patient" />
              </div>
              <div className="col-12">
                <PatientMessage iconSrc={profileImage} name="Vishwanath Sawant" who="Patient" />
              </div>
              <div className="col-12 d-none d-md-block">
                <PatientMessage iconSrc={profileImage} name="Vishwanath Sawant" who="Patient" />
              </div>
              <div className="col-12 d-none d-md-block">
                <PatientMessage iconSrc={profileImage} name="Vishwanath Sawant" who="Patient" />
              </div>
            </div>
          </FrameContainer>
        </div>
        <SessionContainer className="below-session-container" />
      </div>

      {isAddUserPopupVisible && (
        <div ref={popupRef}>
          <AddUserPopup handleClosePopup={handleCloseAddUserPopup} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
