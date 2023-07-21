import React from "react";
import closeBlack from "../images/close-black.svg"


const SignOutPopup = ({ handleClosePopup }) => {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    return (
        <div className="popup-background" onClick={handleClosePopup}>
            <div className="popup-content signout-popup"onClick={stopPropagation}>
                <div className="close-button" onClick={handleClosePopup}>
                    <img src={closeBlack} alt="" />
                </div>
                <p>Are you sure, you want to sign out?</p>
                <div className="actions">
                    <button className="rectangle-border-btn" onClick={handleClosePopup}>Cancel</button>
                    <button className="rectangle-user-btn" onClick={() => console.log("Sign out logic here")}>Sign Out</button>
                </div>
            </div>
        </div>
    );
};

export default SignOutPopup;
