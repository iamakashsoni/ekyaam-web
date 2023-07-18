import React, { useState } from "react";
import profileImage from "../images/rect-profile.png"
import closeBlack from "../images/close-black.svg"


const AddTherapistPopup = ({ handleClosePopup }) => {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    const [sessions, setSessions] = useState([]);

    const handleAddSession = () => {
        setSessions([...sessions, { type: "", time: "" }]);
    };

    const handleDeleteSession = (index) => {
        setSessions(sessions.filter((_, i) => i !== index));
    };

    const handleSessionChange = (index, key, value) => {
        const updatedSessions = [...sessions];
        updatedSessions[index][key] = value;
        setSessions(updatedSessions);
    };
    return (
        <div className="popup-background add-therapist" id="addTherapist" onClick={handleClosePopup}>
            <div className="popup-content" id="add-therapist-popup" onClick={stopPropagation}>
                <div className="close-button" onClick={handleClosePopup}>
                    <img src={closeBlack} alt="" />
                </div>
                <div className="information-header">
                    <p className="title">Add Therapist</p>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <div className="d-flex">
                                    <div className="form-check me-3 gender">
                                        <input className="form-check-input" type="radio" name="New-Therapist" id="New-Therapist" value="New-Therapist" />
                                        <label className="form-check-label " htmlFor="New-Therapist">New Therapist</label>
                                    </div>
                                    <div className="form-check me-3 gender">
                                        <input className="form-check-input" type="radio" name="Existing-Therapist" id="Existing-Therapist" value="Existing-Therapist" />
                                        <label className="form-check-label " htmlFor="Existing-Therapist">Existing Therapist</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="Select-patient-dropdown">Select patient</label>
                                <select className="input-field" id="Select-patient-dropdown">
                                    <option value="">Select patient</option>
                                    <option value="option1">option1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img className="patient-image" alt="" src={profileImage} />
                            {/* <button className="edit-profile-btn my-2">
                                Update Profile
                            </button> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="contact-number">Contact Number</label>
                                <input type="text" className="form-control" id="contact-number" placeholder="Enter contact number" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="whatsapp-number">WhatsApp Number</label>
                                <input type="text" className="form-control" id="whatsapp-number" placeholder="Enter WhatsApp number" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="email-address">Email Address</label>
                                <input type="email" className="form-control" id="email-address" placeholder="Enter email address" />
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="session-type">
                        <div className="information-header">
                            <p className="title">Session</p>
                            <button className="edit-profile-btn" id="add-session-btn" type="button" onClick={handleAddSession}>
                                + Add
                            </button>
                        </div>
                        {sessions.map((session, index) => (
                            <div className="qualification-container" key={index}>
                                <button className="delete-icon" type="button" onClick={() => handleDeleteSession(index)}>
                                    <span className="delete-icon-inner">-</span>
                                </button>
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <label htmlFor={`session-type-${index}`}>Session Type</label>
                                            <select
                                                className="dropdown-select form-check-inline"
                                                id={`session-type-${index}`}
                                                value={session.type}
                                                onChange={(e) => handleSessionChange(index, "type", e.target.value)}
                                            >
                                                <option value="">Select session type</option>
                                                <option value="Routine Visit">Routine Visit</option>
                                                <option value="Follow-up Visits">Follow-up Visits</option>
                                                <option value="Smoking Cessation">Smoking Cessation</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor={`session-time-${index}`}>Session Time</label>
                                            <select
                                                className="dropdown-select form-check-inline"
                                                id={`session-time-${index}`}
                                                value={session.time}
                                                onChange={(e) => handleSessionChange(index, "time", e.target.value)}
                                            >
                                                <option value="">Select session time</option>
                                                <option value="30 mins">30 mins</option>
                                                <option value="45 mins">45 mins</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 d-flex justify-content-end">
                            <div className="me-2 task-overdue">
                                <button onClick={handleClosePopup}>Cancel</button>
                            </div>
                            <div className="complete-task">
                                <button onClick={() => console.log("Send Invite")}>Send Invite</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTherapistPopup;
