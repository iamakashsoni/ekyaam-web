import React from "react";
import profileImage from "../images/rect-profile.png"
import closeBlack from "../images/close-black.svg"

const AddPatientPopup = ({ handleClosePopup }) => {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    return (
        <div className="popup-background add-patient" id="addPatient" onClick={handleClosePopup}>
            <div className="popup-content" id="add-patient-popup" onClick={stopPropagation}>
                <div className="close-button" onClick={handleClosePopup}>
                  <img src={closeBlack} alt="" />  
                </div>
                <div className="information-header">
                    <p className="title">Add Patient</p>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <div className="d-flex">
                                    <div className="form-check me-3 gender">
                                        <input className="form-check-input" type="radio" name="Walk-in" id="Walk-in" value="Walk-in Patient" />
                                        <label className="form-check-label" htmlFor="Walk-in">
                                            Walk-in Patient
                                        </label>
                                    </div>
                                    <div className="form-check me-3 gender">
                                        <input className="form-check-input" type="radio" name="Existing" id="Existing" value="Existing Patient" />
                                        <label className="form-check-label" htmlFor="Existing">
                                            Existing Patient
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="Patient-name">Patient Name</label>
                                <input type="text" className="form-control" id="Patient-name" placeholder="Patient Name" />
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
                                <input type="text" className="form-control" id="contact-number" placeholder="Enter your contact number" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="whatsapp-number">WhatsApp Number</label>
                                <input type="text" className="form-control" id="whatsapp-number" placeholder="Enter your WhatsApp number" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="email-address">Email Address</label>
                                <input type="email" className="form-control" id="email-address" placeholder="Enter your email address" />
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="information-header">
                        <p className="title">Schedule Session</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="Participants-dropdown">Add participants</label>
                            <select className="input-field" id="Participants-dropdown">
                                <option value="">Select patient</option>
                                <option value="option1">option1</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="Session Type">Session Type</label>
                                <div className="d-flex">
                                    <div className="form-check me-3 gender">
                                        <input className="form-check-input" type="radio" name="In-person" id="In-person" value="In-person" />
                                        <label className="form-check-label" htmlFor="In-person">
                                            In-person
                                        </label>
                                    </div>
                                    <div className="form-check me-3 gender">
                                        <input className="form-check-input" type="radio" name="Online" id="Online" value="Online" />
                                        <label className="form-check-label" htmlFor="Online">
                                            Online
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="date-dropdown">Session date</label>
                            <select className="input-field" id="date-dropdown">
                                <option value="">Select patient</option>
                                <option value="option1">option1</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="time-dropdown">Session time slot</label>
                            <select className="input-field" id="time-dropdown">
                                <option value="">Select patient</option>
                                <option value="option1">option1</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="Session details">Session details</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
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

export default AddPatientPopup;
