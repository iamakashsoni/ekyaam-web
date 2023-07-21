import React, { useState } from "react";
import rightArrow from "../images/right-arrow.svg";

const PatientPostSesionNotesContainer = ({ title, date, children }) => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };

    return (
        <div className="profile-container">
            <div className="profile-item">
                <div className="task-item-header" onClick={toggleDescription}>
                    <span className="task-item-title">{title}</span>
                    <span className="task-item-date">{date}</span>
                </div>
                <div className="arrow-container" onClick={toggleDescription}>
                    <div className="arrow-btn">
                        <button className="arrow-right-arrow">
                            <img className="arrow-right-arrow-icon" alt="" src={rightArrow} />
                        </button>
                    </div>
                </div>
                {isDescriptionOpen && <div className="description">{children}</div>}
            </div>
        </div>
    );
};

export default PatientPostSesionNotesContainer;
