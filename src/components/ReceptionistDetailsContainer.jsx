import React from "react";

const ReceptionistDetailsContainer = () => {
    const handleCancel = () => {
        console.log("Cancel");
    };

    const handleUpdate = () => {
        console.log("Update");
    };
    return (
        <div className="user-information-container">
            <div className="information-header">
                <p className="title">Receptionist Details</p>
            </div>
            <div className="availability-container">
                {/* receptionist details content here */}
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                    <div className="me-2 task-overdue">
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                    <div className="complete-task">
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceptionistDetailsContainer;
