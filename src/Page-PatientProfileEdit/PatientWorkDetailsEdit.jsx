import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PatientEditMenuList from "../components/PatientEditMenuList";
import PatientWorkDetails from "../components/PatientWorkDetails";
import PatientProfileDetailsContainer from "../components/PatientProfileDetailsContainer";

const PatientWorkDetailsEdit = () => {

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Update Patient Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Patient Profile > Work Details" />
                </div>
            </div>
            <PatientEditMenuList />
            <PatientWorkDetails />
            <PatientProfileDetailsContainer />
        </div>
    );
};

export default PatientWorkDetailsEdit;
