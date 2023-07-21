import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PsychiatristMenuList from "../components/PsychiatristMenuList";
import SessionContainer from "../components/SessionContainer";

const PsychiatristHomework = () => {
    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Psychiatrist Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Psychiatrist Profile > Homework" />
                </div>
            </div>
            <PsychiatristMenuList />
            <SessionContainer className="above-session-container" />
        </div>
    );
};
export default PsychiatristHomework;