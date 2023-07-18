import React, { useState } from "react";
import rightArrow from "../images/right-arrow.svg";
import patientIcon from "../images/patient.svg";
import AddPatientPopup from "./AddPatientPopup";
import AddTherapistPopup from "./AddTherapistPopup";
import ReactDOM from "react-dom";

const AddUserPopup = () => {
    const [showAddPatientPopup, setShowAddPatientPopup] = useState(false);
    const [showAddTherapistPopup, setShowAddTherapistPopup] = useState(false);

    const handleAddPatientClick = () => {
        setShowAddPatientPopup(true);
    };

    const handleAddTherapistClick = () => {
        setShowAddTherapistPopup(true);
    };

    const handleClosePopup = () => {
        setShowAddPatientPopup(false);
        setShowAddTherapistPopup(false);
    };

    return (
        <div className="addUserPopup " id="user-popup">
            <img src="./images/addUserPopup.svg" alt="" />
            <div className="adduserPopupContent">
                <div className="addUserItem">
                    <div className="addItem">
                        <img className="patientIcon" alt="" src={patientIcon} />
                        <button onClick={handleAddPatientClick}>Add Patient</button>
                        <div className="right-arrow">
                            <img className="right-arrow-icon" alt="" src={rightArrow} />
                        </div>
                    </div>
                </div>
                <div className="addUserItem">
                    <div className="addItem">
                        <img className="patientIcon" alt="" src={patientIcon} />
                        <button onClick={handleAddTherapistClick}>Add Therapist</button>
                        <div className="right-arrow">
                            <img className="right-arrow-icon" alt="" src={rightArrow} />
                        </div>
                    </div>
                </div>
                <div className="addUserItem">
                    <div className="addItem">
                        <img className="patientIcon" alt="" src={patientIcon} />
                        <button onClick={() => console.log("Update Patient Profile")}>Update Patient Profile</button>
                        <div className="right-arrow">
                            <img className="right-arrow-icon" alt="" src={rightArrow} />
                        </div>
                    </div>
                </div>
            </div>
            {showAddPatientPopup &&
                ReactDOM.createPortal(
                    <AddPatientPopup handleClosePopup={handleClosePopup} />,
                    document.body
                )}

            {showAddTherapistPopup &&
                ReactDOM.createPortal(
                    <AddTherapistPopup handleClosePopup={handleClosePopup} />,
                    document.body
                )}
        </div>
    );
};

export default AddUserPopup;
