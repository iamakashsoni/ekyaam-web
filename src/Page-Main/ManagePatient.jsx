import React, { useState } from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import profileImage from "../images/profile.png";
import messageIcon from "../images/messageIcon.svg"

const ManagePatient = () => {
  const tabs = [
    { key: "active-tab", label: "Active", count: 531 },
    { key: "inactive-tab", label: "Inactive", count: 431 },
    { key: "incomplete-tab", label: "Incomplete Records", count: 31 },
    { key: "due-tab", label: "Prescription Due", count: 100 },
  ];

  const [activeTab, setActiveTab] = useState("active-tab");

  const changeTab = (tabKey) => {
    setActiveTab(tabKey);
  };

  const patientList = [
    {
      id: 1,
      name: "Dr. Ramesh Thakur",
      phoneNumber: "+91 74002 96867",
      prevSessionDate: "Wednesday, November 05, 2023",
      assignedTherapists: "Vishwanath Surve, Mayur Tupe",
      visitFrequency: "Bi-weekly",
      nextSessionDate: "Wednesday, November 05, 2023",
    },
    {
      id: 2,
      name: "Dr. Jane Doe",
      phoneNumber: "+91 98765 43210",
      prevSessionDate: "Wednesday, November 06, 2023",
      assignedTherapists: "John Smith, Emily Johnson",
      visitFrequency: "Weekly",
      nextSessionDate: "Wednesday, November 06, 2023",
    },
    {
      id: 3,
      name: "Dr. Jane Doe",
      phoneNumber: "+91 98765 43210",
      prevSessionDate: "Wednesday, November 06, 2023",
      assignedTherapists: "John Smith, Emily Johnson",
      visitFrequency: "Weekly",
      nextSessionDate: "Wednesday, November 06, 2023",
    },
  ];

  const scheduleSession = (patientId) => {
    console.log("Scheduling session for patient ID:", patientId);
  };

  const addPrescription = (patientId) => {
    console.log("Adding prescription for patient ID:", patientId);
  };

  const updateUserRecord = (patientId) => {
    console.log("Updating record for patient ID:", patientId);
  };

  return (
    <div className="main-content container-fluid">
      <div className="row align-items-md-stretch">
        <div className="page-frame-title col-md-6">
          <PageFrameTitle title="Manage Patients" />
        </div>
        <div className="page-guide col-md-6">
          <PageGuide guideText="Dashboard > Patients" />
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
                    <input type="search" placeholder="Enter name to search patient" />
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
                    <label>Entries</label>
                  </div>
                </div>
              )}
              {tab.key === "active-tab" && (
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr className="table-header-row">
                        <th>Patient Name</th>
                        <th>Previous Session Date</th>
                        <th>Assigned Therapist</th>
                        <th>Visit Frequency</th>
                        <th>Next Session Date</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patientList.map((patient) => (
                        <tr key={patient.id}>
                          <td>
                            <div className="user-heading" style={{ margin: 0, padding: 0, height: "auto" }}>
                              <img className="user-image" alt="" src={profileImage} style={{ width: 50, height: 50 }} />
                              <div className="profile">
                                <div className="username">
                                  <span style={{ fontSize: 14 }}>{patient.name}</span>
                                </div>
                                <div className="user-number">
                                  <span>{patient.phoneNumber}</span>
                                </div>
                              </div>
                              <img src={messageIcon} className="messageIcon" alt="" style={{ width: 35, height: 35 }} />
                            </div>
                          </td>
                          <td className="wrap-text">{patient.prevSessionDate}</td>
                          <td className="wrap-text">{patient.assignedTherapists}</td>
                          <td>{patient.visitFrequency}</td>
                          <td className="wrap-text">{patient.nextSessionDate}</td>
                          <td>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => scheduleSession(patient.id)}>Schedule Session</button>
                            </div>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => addPrescription(patient.id)}>Add Prescription</button>
                            </div>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => updateUserRecord(patient.id)}>Update Record</button>
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
                        <input type="search" placeholder="Enter name to search patient" />
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
                        <label>Entries</label>
                      </div>
                    </div>
                  )}
                  <table className="table">
                    <thead>
                      <tr className="table-header-row">
                        <th>Patient Name</th>
                        <th>Previous Session Date</th>
                        <th>Assigned Therapist</th>
                        <th>Visit Frequency</th>
                        <th>Next Session Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patientList.map((patient) => (
                        <tr key={patient.id}>
                          <td>
                            <div className="user-heading" style={{ margin: 0, padding: 0, height: "auto" }}>
                              <img className="user-image" alt="" src={profileImage} style={{ width: 50, height: 50 }} />
                              <div className="profile">
                                <div className="username">
                                  <span style={{ fontSize: 14 }}>{patient.name}</span>
                                </div>
                                <div className="user-number">
                                  <span>{patient.phoneNumber}</span>
                                </div>
                              </div>
                              <img src={messageIcon} className="messageIcon" alt="" style={{ width: 35, height: 35 }} />
                            </div>
                          </td>
                          <td className="wrap-text">{patient.prevSessionDate}</td>
                          <td className="wrap-text">{patient.assignedTherapists}</td>
                          <td>{patient.visitFrequency}</td>
                          <td className="wrap-text text-danger">Not Scheduled</td>
                          <td>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => scheduleSession(patient.id)}>Schedule Session</button>
                            </div>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => addPrescription(patient.id)}>Add Prescription</button>
                            </div>
                            <div className="task-overdue actionBtn">
                              <button onClick={() => updateUserRecord(patient.id)}>Update Record</button>
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

export default ManagePatient;
