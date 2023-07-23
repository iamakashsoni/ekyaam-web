import React from "react";
import { Link, useLocation } from "react-router-dom";


const MenuItem = ({ title, path }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <Link to={path}>
            <div className={`menu-item without-gradient edit-menu ${isActive ? "menu-item-selected" : ""}`}>
                <button>
                    <p>{title}</p>
                </button>
            </div>
        </Link>
    );
};


const PsychiatristEditMenuList = () => {
    const menuItems = [
        {
            title: "General Information",
            path: "/psychiatrist-general-information-edit",
        },
        {
            title: "Qualification Details",
            path: "/psychiatrist-qualification-details-edit",
        },
        {
            title: "Availability",
            path: "/psychiatrist-availability-edit",
        },
        {
            title: "Clinic Details",
            path: "/psychiatrist-clinic-details-edit",
        },
        {
            title: "Receptionist Details",
            path: "/psychiatrist-receptionist-details-edit",
        },
    ];
    return (
        <div className="user-menu-lists">
            <div className="menu-list-container">
                <div className="menu-list">
                    {menuItems.map((menuItem) => (
                        <MenuItem key={menuItem.title} title={menuItem.title} path={menuItem.path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PsychiatristEditMenuList;