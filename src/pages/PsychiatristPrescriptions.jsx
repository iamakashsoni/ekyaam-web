import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PsychiatristMenuList from "../components/PsychiatristMenuList";
import SessionContainer from "../components/SessionContainer";
import rightArrow from "../images/right-arrow.svg"

const PsychiatristPrescriptions = () => {
    const prescriptionItems = [
        {
            id: 1,
            title: "Prescriptions",
            date: "23 April 2022",
        },
    ];

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Psychiatrist Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Psychiatrist Profile > Prescriptions" />
                </div>
            </div>
            <PsychiatristMenuList />
            <div className="user-information-container">
                <div className="information-header">
                    <p className="title">Prescriptions</p>
                </div>
                <div className="task-container">
                    {prescriptionItems.map((prescription) => (
                        <div className="task-item" key={prescription.id}>
                            <div className="task-item-header">
                                <span className="task-item-title">{prescription.title}</span>
                                <span className="task-item-date">{prescription.date}</span>
                            </div>
                            <div className="task-overdue-container">
                                <div className="task-overdue-btn">
                                    <button className="task-right-arrow">
                                        <img
                                            className="task-right-arrow-icon"
                                            alt=""
                                            src={rightArrow}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <SessionContainer className="above-session-container" />
        </div>
    );
};
export default PsychiatristPrescriptions;