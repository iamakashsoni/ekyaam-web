import React from 'react';
import pendingTasksIcon from "../images/purplependingTasksIcon.svg"
import addPrescriptionIcon from "../images/purplePrescriptionsDue.svg";
import patientsIcon from "../images/purplePatient.svg"



const StatsCard = ({ iconSrc, title, count }) => {
    const cardClassName = title === "Pending Tasks" ? "stats-card pending-tasks" : "stats-card";

    return (
        <div className={cardClassName}>
            <img src={iconSrc} className="stats-card-icon" alt="" />
            <div className="stats-card-content">
                <span className="stats-card-title">{title}</span>
                <span className="stats-card-title-count">{count}</span>
            </div>
        </div>
    );
};

const StatsCardContainer = () => {
    return (
        <div className="stats-card-container">
            <StatsCard
                iconSrc={pendingTasksIcon}
                title="Pending Tasks"
                count="15"
            />
            <StatsCard
                iconSrc={addPrescriptionIcon}
                title="Prescriptions Due"
                count="16"
            />
            <StatsCard
                iconSrc={patientsIcon}
                title="Inactive Patients"
                count="80"
            />
            <StatsCard
                iconSrc={patientsIcon}
                title="Update Records"
                count="190"
            />
        </div>
    );
};

export default StatsCardContainer;
