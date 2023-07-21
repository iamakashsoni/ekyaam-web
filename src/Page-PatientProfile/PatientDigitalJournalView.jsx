import React, { useState } from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PatientProfileDetailsContainer from "../components/PatientProfileDetailsContainer";
import PatientMenuList from "../components/PatientMenuList";
import PrescriptionContainer from "../components/PrescriptionContainer";

const PatientDigitalJournalView = () => {
    const [isBlurred, setIsBlurred] = useState(true);

    const handleRemoveBlur = () => {
        setIsBlurred(false);
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
                    <p className="title">Digital Journal</p>
                </div>
                <PrescriptionContainer title="Journal 1" date="23 April 2023">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription </span>
                        </div>
                    </div>
                </PrescriptionContainer>
                <PrescriptionContainer title="Journal 2" date="23 April 2023">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription </span>
                        </div>
                    </div>
                </PrescriptionContainer>
            </div>
            {isBlurred && (
                <div className="blur-overlay">
                    <div className="blur-overlay-content complete-task">
                        <div className="blur-overlay-text">Request Kiran Rathi to Access Digital Journal</div>
                        <button className="mt-3" onClick={handleRemoveBlur}>
                            Send Request
                        </button>
                    </div>
                </div>
            )}

            <PatientProfileDetailsContainer className="remove-margin-top" />
        </div>
    );
};

export default PatientDigitalJournalView;
