import React, { useState } from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PatientProfileDetailsContainer from "../components/PatientProfileDetailsContainer";
import PatientMenuList from "../components/PatientMenuList";
import PatientPostSesionNotesContainer from "../components/PatientPostSesionNotesContainer";
import closeBlack from "../images/close-black.svg"


const PatientPostSessionNotesView = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  const handleRemoveBlur = () => {
    setIsBlurred(false);
  };
  const [pinDigits, setPinDigits] = useState(['', '', '', '']);
  const [pinError, setPinError] = useState('');

  const handlePinChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newPinDigits = [...pinDigits];
      newPinDigits[index] = value;
      setPinDigits(newPinDigits);
    }
  };

  const validatePinCreate = (event) => {
    event.preventDefault();
    const pin = pinDigits.join('');

    if (pin.length !== 4 || !/^\d{4}$/.test(pin)) {
      setPinError('Please enter a valid 4-digit PIN.');
    } else {
      console.log('PIN created:', pin);
    }
  };


  return (
    <div className="main-content container-fluid">
      <div className="row align-items-md-stretch">
        <div className="page-frame-title col-md-6">
          <PageFrameTitle title="Patient Profile" />
        </div>
        <div className="page-guide col-md-6">
          <PageGuide guideText="Patient Profile > Digital Journal" />
        </div>
      </div>
      <PatientMenuList />
      <div className={`user-information-container ${isBlurred ? "blur" : ""}`}>
        <div className="information-header">
          <p className="title">Post Session Notes</p>
          <button className="edit-profile-btn" id="add-qualification-btn" onClick={""}>
            Add Notes
          </button>
        </div>
        <PatientPostSesionNotesContainer title="Post Session Notes" date="23 April 2023">
          <div className="description-details">
            <div className="description-header">
              <span>Post Session NotesPost Session NotesPost Session NotesPost Session NotesPost Session NotesPost Session Notes</span>
            </div>
          </div>
        </PatientPostSesionNotesContainer>
      </div>
      {isBlurred && (
        <div className="blur-overlay vault-container">
          <div className="close-button" onClick={handleRemoveBlur}>
            <img src={closeBlack} alt="Close" />
          </div>
          <div className="blur-overlay-content complete-task">
            <div className="blur-overlay-text">Validate your Access</div>
            <div className="blur-overlay-subtext">Enter your 4-digit private access pin</div>
            <form>
              <div className="form-group pin-input-container">
                {pinDigits.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    pattern="[0-9]"
                    maxLength="1"
                    placeholder="0"
                    required
                  />
                ))}
                <div className="error-message" id="pinError">
                  {pinError}
                </div>
              </div>
            </form>
            <button onClick={handleRemoveBlur}>
              Open Vault
            </button>
          </div>
        </div>
      )}

      <PatientProfileDetailsContainer className="remove-margin-top" />
    </div>
  );
};

export default PatientPostSessionNotesView;
