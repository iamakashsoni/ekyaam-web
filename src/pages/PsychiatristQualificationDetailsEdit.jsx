import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PsychiatristEditMenuList from "../components/PsychiatristEditMenuList";
import ProfileItemContainer from "../components/ProfileItemContainer";
import QualificationDetailsEdit from "../components/QualificationDetailsEdit";


const PsychiatristQualificationDetailsEdit = () => {

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Update Psychiatrist Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Psychiatrist Profile > Qualification Details Edit" />
                </div>
            </div>
            <PsychiatristEditMenuList />
            <QualificationDetailsEdit />
            <ProfileItemContainer />
        </div>
    );
};

export default PsychiatristQualificationDetailsEdit;
