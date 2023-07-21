import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PsychiatristEditMenuList from "../components/PsychiatristEditMenuList";
import ProfileItemContainer from "../components/ProfileItemContainer";
import AvailaibilityEdit from "../components/AvailaibilityEdit";


const PsychiatristAvailabilityEdit = () => {

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Update Psychiatrist Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Psychiatrist Profile > Availability  Edit" />
                </div>
            </div>
            <PsychiatristEditMenuList />
            <AvailaibilityEdit title="My Availability" />
            <ProfileItemContainer />
        </div>
    );
};

export default PsychiatristAvailabilityEdit;
