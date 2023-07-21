import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PsychiatristEditMenuList from "../components/PsychiatristEditMenuList";
import ProfileItemContainer from "../components/ProfileItemContainer";
import GeneralInformationEdit from "../components/GeneralInformationEdit";


const PsychiatristGeneralInformationEdit = () => {

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Update Psychiatrist Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Psychiatrist Profile > General Information Edit" />
                </div>
            </div>
            <PsychiatristEditMenuList />
            <GeneralInformationEdit />
            <ProfileItemContainer />
        </div>
    );
};

export default PsychiatristGeneralInformationEdit;
