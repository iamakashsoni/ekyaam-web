import React, { useState } from "react";

const QualificationDetailsEdit = () => {
    const [qualifications, setQualifications] = useState([
        { id: 1, degree: "", specialization: "", passingYear: "", collegeName: "", university: "" },
    ]);

    const addQualification = () => {
        const newQualification = {
            id: qualifications.length + 1,
            degree: "",
            specialization: "",
            passingYear: "",
            collegeName: "",
            university: "",
        };
        setQualifications([...qualifications, newQualification]);
    };

    const deleteQualification = (e, id) => {
        e.preventDefault();
        const updatedQualifications = qualifications.filter((qualification) => qualification.id !== id);
        setQualifications(updatedQualifications);
    };


    const handleQualificationChange = (e, id) => {
        const { name, value } = e.target;
        setQualifications((prevQualifications) => {
            return prevQualifications.map((qualification) => {
                if (qualification.id === id) {
                    return { ...qualification, [name]: value };
                }
                return qualification;
            });
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(qualifications);
    };
    return (
        <div className="user-information-container">
            <div className="information-header">
                <p className="title">Qualification Details</p>
                <div className="complete-task">
                    <button className="" id="add-qualification-btn" onClick={addQualification}>
                        + Add Qualification
                    </button>
                </div>
            </div>
            {qualifications.map((qualification) => (
                <div className="qualifications-container" key={qualification.id}>
                    <button className="delete-icon" type="button" onClick={(e) => deleteQualification(e, qualification.id)}>
                        <span className="delete-icon-inner">-</span>
                    </button>
                    <form className="qualification-item" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor={`degree-dropdown-${qualification.id}`}>Degree:</label>
                                <select
                                    className="input-field"
                                    id={`degree-dropdown-${qualification.id}`}
                                    name="degree"
                                    value={qualification.degree}
                                    onChange={(e) => handleQualificationChange(e, qualification.id)}
                                >
                                    <option value="">Select Degree</option>
                                    <option value="bachelor">Bachelor</option>
                                    <option value="master">Master</option>
                                    <option value="doctorate">Doctorate</option>
                                </select>
                            </div>
                            <div className="col-md-4 p-0">
                                <label htmlFor={`specialization-dropdown-${qualification.id}`}>Specialization:</label>
                                <select
                                    className="input-field"
                                    id={`specialization-dropdown-${qualification.id}`}
                                    name="specialization"
                                    value={qualification.specialization}
                                    onChange={(e) => handleQualificationChange(e, qualification.id)}
                                >
                                    <option value="">Select Specialization</option>
                                    <option value="psychology">Psychology</option>
                                    <option value="medicine">Medicine</option>
                                    <option value="engineering">Engineering</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor={`passing-year-input-${qualification.id}`}>Passing Year:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`passing-year-input-${qualification.id}`}
                                    name="passingYear"
                                    value={qualification.passingYear}
                                    onChange={(e) => handleQualificationChange(e, qualification.id)}
                                    placeholder="Passing Year"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 p-0">
                                <div className="col-md-12">
                                    <label htmlFor={`college-name-input-${qualification.id}`}>College Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={`college-name-input-${qualification.id}`}
                                        name="collegeName"
                                        value={qualification.collegeName}
                                        onChange={(e) => handleQualificationChange(e, qualification.id)}
                                        placeholder="College Name"
                                    />
                                </div>
                                <div className="col-md-12 mt-3">
                                    <label htmlFor={`university-input-${qualification.id}`}>University:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={`university-input-${qualification.id}`}
                                        name="university"
                                        value={qualification.university}
                                        onChange={(e) => handleQualificationChange(e, qualification.id)}
                                        placeholder="University"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <label htmlFor={`certificates-input-${qualification.id}`}>Certificates</label>
                                <input
                                    type="file"
                                    id={`certificates-input-${qualification.id}`}
                                    style={{ display: "none" }}
                                    accept="image/*"
                                    onChange={(e) => console.log(e.target.files)}
                                />
                                <img
                                    className="certification-image my-1"
                                    id={`certificates-image-${qualification.id}`}
                                    alt=""
                                    src="../images/rect-profile.png"
                                />
                                <div className="task-overdue">
                                    <button className="my-2" onClick={() => console.log("Update Profile")}>
                                        Update Profile
                                    </button></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <label htmlFor={`city-input-${qualification.id}`}>City:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`city-input-${qualification.id}`}
                                    name="city"
                                    value={qualification.city}
                                    onChange={(e) => handleQualificationChange(e, qualification.id)}
                                    placeholder="City"
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label htmlFor={`state-input-${qualification.id}`}>State:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`state-input-${qualification.id}`}
                                    name="state"
                                    value={qualification.state}
                                    onChange={(e) => handleQualificationChange(e, qualification.id)}
                                    placeholder="State"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            ))}
            <div className="row mt-3">
                <div className="col-md-12 d-flex justify-content-end">
                    <div className="me-2 task-overdue">
                        <button onClick={() => console.log("Cancel")}>Cancel</button>
                    </div>
                    <div className="complete-task">
                        <button onClick={() => console.log("Update")}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualificationDetailsEdit;
