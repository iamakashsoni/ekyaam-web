import React, { useState } from "react";
import TimingAvailability from "./TimingAvailability";

const AvailabilityEdit = ({ title }) => {


    const handleSubmit = () => {
        console.log("success");
    };

    return (
        <div className="user-information-container">
            <div className="information-header">
                <p className="title">{title}</p>
            </div>
            <TimingAvailability />
            <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                    <div className="me-2 task-overdue">
                        <button onClick={() => console.log("Cancel")}>Cancel</button>
                    </div>
                    <div className="complete-task">
                        <button onClick={handleSubmit}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailabilityEdit;
