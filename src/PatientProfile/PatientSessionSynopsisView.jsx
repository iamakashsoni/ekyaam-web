import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PatientProfileDetailsContainer from "../components/PatientProfileDetailsContainer";
import PatientMenuList from "../components/PatientMenuList";
import PrescriptionContainer from "../components/PrescriptionContainer";


const PatientSessionSynopsisView = () => {

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
            <div className="user-information-container">
                <div className="information-header">
                    <p className="title">Session Synopsis</p>
                </div>
                <PrescriptionContainer title="Session Synopsis 1" date="23 April 2023">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription </span>
                        </div>
                    </div>
                </PrescriptionContainer>
                <PrescriptionContainer title="Session Synopsis 2" date="23 April 2023">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription Prescription </span>
                        </div>
                    </div>
                </PrescriptionContainer>
            </div>
            <PatientProfileDetailsContainer className="remove-margin-top" />
        </div>
    );
};

export default PatientSessionSynopsisView;