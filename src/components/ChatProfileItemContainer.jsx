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

const ChatProfileItemContainer = ({ className }) => {
    return (
        <div className={`session-container profile-page ${className}`}>
            <div className="profile">
                <img className="profile-image" alt="" src={profileImage} />
                <div className="profile-name">Dr. Ramesh Thakur</div>
                <div className="profile-number">+91 9876543210</div>
            </div>
            <div className="session-content">
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

                <ProfileItem title="Emergency Contact">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Emergency Contact</span>
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
                </ProfileItem>

                <ProfileItem title="Patient History">
                    <div className="description-details">
                        <div className="description-header">
                            <span>Emergency Contact</span>
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
                </ProfileItem>

                <ProfileItem title="Groups">
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

                <ProfileItem title="Chat Settings">
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
                <ProfileItem title="Service Types">
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
            </div>
        </div>
    );
};

export default ChatProfileItemContainer;
