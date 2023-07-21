import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PsychiatristEditMenuList from "../components/PsychiatristEditMenuList";
import ProfileItemContainer from "../components/ProfileItemContainer";
import ReceptionistDetailsContainer from "../components/ReceptionistDetailsContainer";


const PsychiatristReceptionistDetailsEdit = () => {

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Update Psychiatrist Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Psychiatrist Profile > Reception Details Edit" />
                </div>
            </div>
            <PsychiatristEditMenuList />

            <ReceptionistDetailsContainer />

            <ProfileItemContainer />
        </div>
    );
};

export default PsychiatristReceptionistDetailsEdit;
