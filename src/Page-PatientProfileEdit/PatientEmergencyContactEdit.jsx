import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PatientEditMenuList from "../components/PatientEditMenuList";
import PatientEmergencyContact from "../components/PatientEmergencyContact";
import PatientProfileDetailsContainer from "../components/PatientProfileDetailsContainer";



const PatientEmergencyContactEdit = () => {

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Update Patient Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Patient Profile > Emergency Contact" />
                </div>
            </div>
            <PatientEditMenuList />
            <PatientEmergencyContact />
            <PatientProfileDetailsContainer />
        </div>
    );
};

export default PatientEmergencyContactEdit;
