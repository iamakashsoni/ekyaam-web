import React, { useState } from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import profileImage from "../images/profile.png";
import messageIcon from "../images/messageIcon.svg";

const ManageTherapist = () => {
  const tabs = [
    { key: "active-tab", label: "Active", count: 5 },
    { key: "inactive-tab", label: "Inactive", count: 4 },
  ];

  const [activeTab, setActiveTab] = useState("active-tab");

  const changeTab = (tabKey) => {
    setActiveTab(tabKey);
  };

  const therapistList = [
    {
      id: 1,
      name: "Vishwanath Surve",
      specialization: "Physical Therapist",
      phoneNumber: "+91 74002 96867",
      assignedPatients: 6,
      involvedInSessions: 18,
    },
    {
      id: 2,
      name: "Mayur Tupe",
      specialization: "Occupational Therapist",
      phoneNumber: "+91 98765 43210",
      assignedPatients: 4,
      involvedInSessions: 12,
    },
    {
      id: 3,
      name: "John Smith",
      specialization: "Speech Therapist",
      phoneNumber: "+91 98765 43210",
      assignedPatients: 5,
      involvedInSessions: 15,
    },
  ];

  const scheduleSession = (therapistId) => {
    console.log("Scheduling session for therapist ID:", therapistId);
  };

  const updateUserRecord = (therapistId) => {
    console.log("Updating record for therapist ID:", therapistId);
  };

  return (
    <div className="main-content container-fluid">
      <div className="row align-items-md-stretch">
        <div className="page-frame-title col-md-6">
          <PageFrameTitle title="Manage Therapists" />
        </div>
        <div className="page-guide col-md-6">
          <PageGuide guideText="Dashboard > Therapists" />
        </div>
      </div>
      <div>
        <div className="tab-button-container">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => changeTab(tab.key)}
            >
              <span>{`${tab.count} ${tab.label} `}</span>
            </div>
          ))}
        </div>
      </div>

      {tabs.map((tab) => (
        <div key={tab.key} className={`tab ${activeTab === tab.key ? "active" : ""}`} id={tab.key}>
          {activeTab === tab.key && (
            <div className="tab-container">
              {tab.key === "active-tab" && (
                <div className="tab_header_box">
                  <div className="search-container">
                    <input type="search" placeholder="Enter name to search therapist" />
                    <span className="search-icon"></span>
                  </div>
                  <div >
                    <label>Show</label>
                    <select className="dropdown-patientCount">
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                      <option>All</option>
                    </select>
                    <label>Enrties</label>
                  </div>
                </div>
              )}
              {tab.key === "active-tab" && (
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr className="table-header-row">
                        <th className="text-center">Therapist Name</th>
                        <th className="text-center">Specialization</th>
                        <th className="text-center">Mobile Number</th>
                        <th className="text-center">Assigned Patients</th>
                        <th className="text-center">Involved In Sessions</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {therapistList.map((therapist) => (
                        <tr key={therapist.id}>
                          <td>
                            <div className="user-heading" style={{ margin: 0, padding: 0, height: "auto" }}>
                              <img className="user-image" alt="" src={profileImage} style={{ width: 50, height: 50 }} />
                              <div className="profile">
                                <div className="username">
                                  <span style={{ fontSize: 16 }}>{therapist.name}</span>
                                </div>
                              </div>
                              <img src={messageIcon} className="messageIcon" alt="" style={{ width: 35, height: 35 }} />
                            </div>
                          </td>
                          <td className="wrap-text">{therapist.specialization}</td>
                          <td className="wrap-text">{therapist.phoneNumber}</td>
                          <td className="text-center">{therapist.assignedPatients}</td>
                          <td className="text-center">{therapist.involvedInSessions}</td>
                          <td>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => scheduleSession(therapist.id)}>Schedule Session</button>
                            </div>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => updateUserRecord(therapist.id)}>Update Profile</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* "Inactive" tab */}
              {tab.key === "inactive-tab" && (
                <div className="table-container">
                  {tab.key === "inactive-tab" && (
                    <div className="tab_header_box">
                      <div className="search-container">
                        <input type="search" placeholder="Enter name to search therapist" />
                        <span className="search-icon"></span>
                      </div>
                      <div >
                        <label>Show</label>
                        <select className="dropdown-patientCount">
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={15}>15</option>
                          <option>All</option>
                        </select>
                        <label>Enrties</label>
                      </div>
                    </div>
                  )}
                  <table className="table">
                    <thead>
                      <tr className="table-header-row">
                        <th className="text-center">Therapist Name</th>
                        <th className="text-center">Specialization</th>
                        <th className="text-center">Mobile Number</th>
                        <th className="text-center">Assigned Patients</th>
                        <th className="text-center">Involved In Sessions</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {therapistList.map((therapist) => (
                        <tr key={therapist.id}>
                          <td>
                            <div className="user-heading" style={{ margin: 0, padding: 0, height: "auto" }}>
                              <img className="user-image" alt="" src={profileImage} style={{ width: 50, height: 50 }} />
                              <div className="profile">
                                <div className="username">
                                  <span style={{ fontSize: 16 }}>{therapist.name}</span>
                                </div>
                              </div>
                              <img src={messageIcon} className="messageIcon" alt="" style={{ width: 35, height: 35 }} />
                            </div>
                          </td>
                          <td className="wrap-text text-danger">Inactive</td>
                          <td className="wrap-text">{therapist.phoneNumber}</td>
                          <td className="text-center">{therapist.assignedPatients}</td>
                          <td className="text-center">{therapist.involvedInSessions}</td>
                          <td>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => scheduleSession(therapist.id)}>Schedule Session</button>
                            </div>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => updateUserRecord(therapist.id)}>Update Profile</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageTherapist;
