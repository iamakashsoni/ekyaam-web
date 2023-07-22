import React, { useState } from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import profileImage from "../images/profile.png";
import ChatProfileItemContainer from "../components/ChatProfileItemContainer";
import communicationIcon from "../images/communication.svg";
import attachmentIcon from "../images/attachment.svg"

const TabButton = ({ tab, activeTab, onClick }) => (
  <div
    key={tab.key}
    className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
    onClick={() => onClick(tab.key)}
  >
    <span>{`${tab.label} `}</span>
  </div>
);

const Chats = () => {
  const tabs = [
    { key: "patient-tab", label: "Patients" },
    { key: "clinic-tab", label: "Clinic Users" },
  ];

  const [activeTab, setActiveTab] = useState("patient-tab");

  const changeTab = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="main-content container-fluid">
      <div className="row align-items-md-stretch">
        <div className="page-frame-title col-md-6">
          <PageFrameTitle title="Chats" />
        </div>
        <div className="page-guide col-md-6">
          <PageGuide guideText="Dashboard > Chats" />
        </div>
      </div>
      <div className="tab-button-container chat-button">
        {tabs.map((tab) => (
          <TabButton key={tab.key} tab={tab} activeTab={activeTab} onClick={changeTab} />
        ))}
      </div>
      <div className="tab-container chats">

        {tabs.map((tab) => (
          <div key={tab.key} className={`tab ${activeTab === tab.key ? "active" : ""}`} id={tab.key}>
            {activeTab === tab.key && (
              <div className="tab_header_box">
                {tab.key === "patient-tab" && (
                  <div className="search-container chat-search">
                    <input type="search" placeholder="Enter name to search patient" />
                    <span className="search-icon"></span>
                  </div>
                )}
                {tab.key === "clinic-tab" && (
                  <div className="search-container chat-search">
                    <input type="search" placeholder="Enter name to search patient" />
                    <span className="search-icon"></span>
                  </div>
                )}
              </div>
            )}
            {tab.key === "patient-tab" && (
              <div className="chat-messages-container">
                <div className="chat-message-item">
                  <img className="chat-image" alt="" src={profileImage} />
                  <div className="chat-details">
                    <div className="chat-name">Akash Soni</div>
                    <div className="chat-time">10 mins ago</div>
                    <div className="chat-message-details">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </div>
                    <span className="chat-count">10</span>
                  </div>
                </div>
                <div className="chat-message-item">
                  <img className="chat-image" alt="" src={profileImage} />
                  <div className="chat-details">
                    <div className="chat-name">Akash Soni</div>
                    <div className="chat-time">10 mins ago</div>
                    <div className="chat-message-details">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </div>
                    <span className="chat-count">10</span>
                  </div>
                </div>
              </div>
            )}
            {tab.key === "clinic-tab" && (
              <div className="chat-messages-container">
                <div className="chat-message-item">
                  <img className="chat-image" alt="" src={profileImage} />
                  <div className="chat-details">
                    <div className="chat-name">Akash Soni</div>
                    <div className="chat-time">10 mins ago</div>
                    <div className="chat-message-details">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </div>
                    <span className="chat-count">10</span>
                  </div>
                </div>
                <div className="chat-message-item">
                  <img className="chat-image" alt="" src={profileImage} />
                  <div className="chat-details">
                    <div className="chat-name">Akash Soni</div>
                    <div className="chat-time">10 mins ago</div>
                    <div className="chat-message-details">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </div>
                    <span className="chat-count">10</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Chat */}
      <div className="chat-screen">
        <div className="chat-header">
          <img className="chat-profile-icon" alt="" src={profileImage} />
          <div className="chat-profile-name">Akash Soni</div>
          <div className="chat-search-icon" />
        </div>
        <div className="chat-message-container">
          
        </div>
        <div className="chat-input-container">
          <div className="chat-message-input">
            <input type="text" placeholder="Type your message here..." />
            <div className="chat-send-btn-container">
              <span className="chat-send-btn"></span>
            </div>
          </div>
          <div className="white-container margin-left">
            <img className="chat-input-icon" alt="Mic" src={communicationIcon} />
          </div>
          <div className="white-container">
            <img className="chat-input-icon" alt="Attachment" src={attachmentIcon} />
          </div>
        </div>
      </div>
      <ChatProfileItemContainer className="add-margin" />
    </div>
  );
};

export default Chats;
