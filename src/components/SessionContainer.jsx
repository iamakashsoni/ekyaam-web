import React from "react";
import sessionIcon from "../images/session.svg";
import profileImage from "../images/profile.png";
import downArrowIcon from "../images/down-arrow.svg";
import calendarIcon from "../images/calendar1.svg";
import DatePicker from "./DatePicker";

const SessionContainer = ({ className }) => {
    const scheduledSessions = [
        {
            id: 1,
            startTime: "11:00 AM",
            endTime: "12:00 PM",
            patientName: "Kiran Rathi",
            previousSessionDate: "Tuesday, March 5, 2023",
        },
    ];

    const nextSessions = [
        {
            id: 1,
            startTime: "11:00 AM",
            endTime: "12:00 PM",
            patientName: "Kiran Rathi",
            previousSessionDate: "Tuesday, March 5, 2023",
        },
        {
            id: 2,
            startTime: "11:00 AM",
            endTime: "12:00 PM",
            patientName: "Kiran Rathi",
            previousSessionDate: "Tuesday, March 5, 2023",
        },
        {
            id: 3,
            startTime: "11:00 AM",
            endTime: "12:00 PM",
            patientName: "Kiran Rathi",
            previousSessionDate: "Tuesday, March 5, 2023",
        },
    ];

    const totalSessionCount = 23;
    const completedSessionCount = 23;

    return (
        <div className={`session-container ${className}`}>
            <div className="session-content">
                <div className="header">
                    <div className="pair">
                        <img className="header-icon" alt="" src={sessionIcon} />
                        <span className="header-text">Scheduled Sessions</span>
                    </div>
                    <button className="addSessionButton">+ Add Session</button>
                </div>
                <DatePicker />
                <div className="current-session">
                    <div className="header">
                        <div className="pair">
                            <span className="header-text">Current Session</span>
                        </div>
                    </div>
                    <div className="current-session-container">
                        {scheduledSessions.length > 0 ? (
                            scheduledSessions.map((session) => (
                                <div className="current-session-title-container" key={session.id}>
                                    <div className="session-time">
                                        <div className="start-time">{session.startTime}</div>
                                        <div className="end-time">{session.endTime}</div>
                                    </div>
                                    <div className="session-divider"></div>
                                    <div className="current-session-detail">
                                        <div className="current-session-patient-name">{session.patientName}
                                            <div className="previous-session-details">
                                                <p className="previous-session-details-heading">Previous session:</p>
                                                <p className="previous-session-details-date">{session.previousSessionDate}</p>
                                            </div>
                                        </div>
                                        <div className="patient-details-arrow">
                                            <img className="down-arrow-icon" alt="" src={downArrowIcon} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (<div className="no-scheduled-sessions">No scheduled sessions</div>
                        )}
                        <div className="other-participants-container">
                            <div className="other-participants-title">
                                <p className="other-participants-text">Other Participants</p>
                            </div>
                            <div className="other-participants-image">
                                <img className="other-participants-image-item1" alt="" src={profileImage} />
                                <img className="other-participants-image-item2" alt="" src={profileImage} />
                                <img className="other-participants-image-item2" alt="" src={profileImage} />
                            </div>
                        </div>
                        <button className="start-session-btn">
                            Start Session
                        </button>
                    </div>
                </div>
                <div className="next-session">
                    <div className="header">
                        <div className="pair">
                            <span className="header-text">Next Few Sessions</span>
                        </div>
                    </div>
                    {nextSessions.length > 0 ? (
                        nextSessions.map((session) => (
                            <div className="next-session-container" key={session.id}>
                                <div className="current-session-title-container">
                                    <div className="session-time">
                                        <div className="start-time">{session.startTime}</div>
                                        <div className="end-time">{session.endTime}</div>
                                    </div>
                                    <div className="session-divider"></div>
                                    <div className="current-session-detail">
                                        <div className="current-session-patient-name">{session.patientName}
                                            <div className="previous-session-details">
                                                <p className="previous-session-details-heading">Previous session:</p>
                                                <p className="previous-session-details-date">{session.previousSessionDate}</p>
                                            </div>
                                        </div>
                                        <div className="patient-details-arrow">
                                            <img className="down-arrow-icon" alt="" src={downArrowIcon} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    ) : (
                        <div className="no-next-sessions">No next sessions</div>
                    )}
                </div>
                <div className="session-details-container">
                    <div className="session-detail total-session">
                        <div className="details">
                            <img src={calendarIcon} alt="" />
                            <span className="count">{totalSessionCount}</span>
                            <span className="text">Total Session</span>
                        </div>
                    </div>
                    <div className="session-detail completed-session">
                        <div className="details">
                            <img src={calendarIcon} alt="" />
                            <span className="count">{completedSessionCount}</span>
                            <span className="text">Completed Session</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionContainer;
