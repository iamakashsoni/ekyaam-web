import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PatientEditMenuList from "../components/PatientEditMenuList";
import PatientGeneralInformation from "../components/PatientGeneralInformation";
import PatientProfileDetailsContainer from "../components/PatientProfileDetailsContainer";

const PatientGeneralInformationEdit = () => {

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Update Patient Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Patient Profile > General Information Edit" />
                </div>
            </div>
            <PatientEditMenuList />
            <PatientGeneralInformation />
            <PatientProfileDetailsContainer className="patient-session"  />
        </div>
    );
};

export default PatientGeneralInformationEdit;
