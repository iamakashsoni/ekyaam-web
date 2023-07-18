import React from "react";

const FrameContainer = ({ headerIconSrc, headerCount, headerText, children }) => {
    // Render different headers based on the headerText prop
    const renderHeader = () => {
        if (headerText === "Available Therapists") {
            return (
                <div className="header">
                    <div className="pair">
                        <img className="header-icon" alt="" src={headerIconSrc} />
                        {/* <div className="header-icon-count">
                            <span className="count">{headerCount}</span>
                        </div> */}
                        <span className="header-text">{headerText}</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="header">
                    <div className="pair">
                        <img className="header-icon" alt="" src={headerIconSrc} />
                        <div className="header-icon-count">
                            <span className="count">{headerCount}</span>
                        </div>
                        <span className="header-text">Unread Chats</span>
                    </div>
                    <div className="pair ml-3">
                        <img className="header-icon" alt="" src={headerIconSrc} />
                        <div className="header-icon-count">
                            <span className="count">2</span>
                        </div>
                        <span className="header-text">Critical Chats</span>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="frame-parent">
            <div className="frame-container">
                {renderHeader()}
                <div className="view-all">View All</div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default FrameContainer;
