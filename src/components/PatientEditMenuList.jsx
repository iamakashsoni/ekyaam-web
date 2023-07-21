import React from "react";
import { Link, useLocation } from "react-router-dom";


const MenuItem = ({ title, path }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <Link to={path}>
            <div className={`menu-item edit-menu ${isActive ? "menu-item-selected" : ""}`}>
                <button>
                    <p>{title}</p>
                </button>
            </div>
        </Link>
    );
};


const PatientEditMenuList = () => {
    const menuItems = [
        {
            title: "General Information",
            path: "/patient-general-information-edit",
        },
        {
            title: "Work Details",
            path: "/patient-work-details-edit",
        },
        {
            title: "Emergency Contact",
            path: "/patient-emergency-contact-edit",
        },
    ];
    return (
        <div className="user-menu-list">
            <div className="menu-list-container">
                <div className="menu-list">
                    {menuItems.map((menuItem, index) => (
                        <MenuItem key={index} title={menuItem.title} path={menuItem.path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PatientEditMenuList;
