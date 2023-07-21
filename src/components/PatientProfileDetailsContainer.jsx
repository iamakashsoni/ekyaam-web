import React, { useState } from "react";
import profileImage from "../images/profile.png"
import rightArrow from "../images/right-arrow.svg"
import callBack from "../images/call-black.svg"
import placeBlackIcon from "../images/place-black.svg"


const ProfileItem = ({ title, children }) => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };

    return (
        <div className="profile-container">
            <div className="profile-item">
                <div className="profile-item-header" onClick={toggleDescription}>
                    <span className="profile-item-title">{title}</span>
                </div>
                <div className="arrow-container" onClick={toggleDescription}>
                    <div className="arrow-btn">
                        <button className="arrow-right-arrow">
                            <img
                                className="arrow-right-arrow-icon"
                                alt=""
                                src={rightArrow}
                            />
                        </button>
                    </div>
                </div>
                {isDescriptionOpen && <div className="description">{children}</div>}
            </div>
        </div>
    );
};

const PatientProfileDetailsContainer = ({ className }) => {
    return (
        <div className={`session-container profile-page ${className}`}>
            <div className="session-content">
                <ProfileItem title="Session">
                    <div className="current-session-container">
                        <div className="current-session-title-container">
                            <div className="session-time">
                                <div className="start-time">11:00 AM</div>
                                <div className="end-time">12:00 PM</div>
                            </div>
                            <div className="session-divider"></div>
                            <div className="current-session-detail">
                                <div className="current-session-patient-name">Kiran Rathi
                                    <div className="previous-session-details">
                                        <p className="previous-session-details-heading">Previous session:</p>
                                        <p className="previous-session-details-date">Tuesday, March 5, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    </div>
                    <button className="start-session-btn1">Start Session</button>
                </ProfileItem>
                <ProfileItem title="General Details">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Personal Details</span>
                        </div>
                        <div className="description-item">
                            <img alt="" src={callBack} />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="description-item">
                            <img alt="" src={callBack} />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="description-item">
                            <img alt="" src={placeBlackIcon} />
                            <span>296, Ravi Nivas, Sec. 30-A, Vashi, Navi Mumbai, 400703</span>
                        </div>
                    </div>
                    <div className="description-details">
                        <div className="description-header">
                            <span>Qualification Details</span>
                        </div>
                        <div className="description-item">
                            <span>M.D. (Psychology)</span>
                        </div>
                        <div className="description-item">
                            <span>M.M.B.S</span>
                        </div>
                    </div>
                </ProfileItem>
                <ProfileItem title="Past Session">
                    <div className="current-session-container">
                        <div className="current-session-title-container">
                            <div className="session-time">
                                <div className="start-time">11:00 AM</div>
                                <div className="end-time">12:00 PM</div>
                            </div>
                            <div className="session-divider"></div>
                            <div className="current-session-detail">
                                <div className="current-session-patient-name">Kiran Rathi
                                    <div className="previous-session-details">
                                        <p className="previous-session-details-heading">Previous session:</p>
                                        <p className="previous-session-details-date">Tuesday, March 5, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    </div>
                    <button className="start-session-btn1">Start Session</button>
                </ProfileItem>
                <ProfileItem title="Invite Expert / Confidante">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Emergency Contact</span>
                        </div>
                        <div className="description-item">
                            <img alt="" src={callBack} />
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </ProfileItem>
                <ProfileItem title="Patient Status">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Emergency Contact</span>
                        </div>
                        <div className="description-item">
                            <img alt="" src={callBack} />
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </ProfileItem>
                <ProfileItem title="Care Team">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Emergency Contact</span>
                        </div>
                        <div className="description-item">
                            <img alt="" src={callBack} />
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </ProfileItem>
                <ProfileItem title="Emergency Contact">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Emergency Contact</span>
                        </div>
                        <div className="description-item">
                            <img alt="" src={callBack} />
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </ProfileItem>
                <ProfileItem title="Work Contact">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Emergency Contact</span>
                        </div>
                        <div className="description-item">
                            <img alt="" src={callBack} />
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </ProfileItem>
                <ProfileItem title="Chat Groups">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Emergency Contact</span>
                        </div>
                        <div className="description-item">
                            <img alt="" src={callBack} />
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </ProfileItem>
            </div>
        </div>
    );
};

export default PatientProfileDetailsContainer;
