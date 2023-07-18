import React from "react";
import rightArrowIcon from "../images/right-arrow.svg";

const MenuItem = ({ icon, title, onClick }) => {
    return (
        <div className="menu-item" onClick={onClick}>
            <img src={icon} alt="" />
            <span>{title}</span>
            <img className="right-arrow-icon" alt="" src={rightArrowIcon} />
        </div>
    );
};

export default MenuItem;
