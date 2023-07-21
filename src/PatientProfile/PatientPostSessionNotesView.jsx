import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PatientProfileDetailsContainer from "../components/PatientProfileDetailsContainer";
import PatientMenuList from "../components/PatientMenuList";

const PatientPostSessionNotesView = () => {

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
                    <p className="title">Post Session Notes</p>
                </div>
            </div>
            <PatientProfileDetailsContainer className="remove-margin-top" />
        </div>
    );
};

export default PatientPostSessionNotesView;
