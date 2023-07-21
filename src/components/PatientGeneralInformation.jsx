import React, { useState } from "react";
import rectProfileImage from "../images/rect-profile.png";

const PatientGeneralInformation = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        mobileNumber: "",
        isSameWhatsAppNumber: false,
        whatsappNumber: "",
        emailAddress: "",
        emergencyNumber: "",
        dateOfBirth: "",
        anniversary: "",
        apartmentDetails: "",
        area: "",
        city: "",
        state: "",
        pincode: "",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleUpdateProfile = () => {
        // Handle update profile logic
        console.log(formData);
    };

    const handleRedirectToPage = (page) => {
        // Handle redirect to page logic
    };

    return (
        <div className="user-information-container">
            <div className="information-header">
                <p className="title">General Information</p>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-3">
                        <img className="user-image" alt="" src={rectProfileImage} />
                        <button className="edit-profile-btn my-2" onClick={handleUpdateProfile}>
                            Update Profile
                        </button>
                    </div>
                    <div className="col-md-9">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="first-name"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="last-name"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <div className="d-flex">
                                <div className="form-check me-3 gender">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        checked={formData.gender === "male"}
                                        onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check me-3 gender">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        checked={formData.gender === "female"}
                                        onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                                <div className="form-check gender">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="other"
                                        value="other"
                                        checked={formData.gender === "other"}
                                        onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="other">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group inputField-margin">
                            <label htmlFor="mobile-number">Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mobile-number"
                                name="mobileNumber"
                                placeholder="Enter your mobile number"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="same-whatsapp-number"
                                    name="isSameWhatsAppNumber"
                                    checked={formData.isSameWhatsAppNumber}
                                    onChange={handleInputChange}
                                />
                                <label className="form-check-label" htmlFor="same-whatsapp-number">
                                    Same as WhatsApp Number
                                </label>
                            </div>
                            <label htmlFor="whatsapp-number">WhatsApp Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="whatsapp-number"
                                name="whatsappNumber"
                                placeholder="Enter your WhatsApp number"
                                value={formData.whatsappNumber}
                                onChange={handleInputChange}
                                disabled={formData.isSameWhatsAppNumber}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="email-address">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email-address"
                                name="emailAddress"
                                placeholder="Enter your email address"
                                value={formData.emailAddress}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="emergency-number">Emergency Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="emergency-number"
                                name="emergencyNumber"
                                placeholder="Enter your emergency number"
                                value={formData.emergencyNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                id="date-of-birth"
                                name="dateOfBirth"
                                placeholder="Select your date of birth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="anniversary">Anniversary</label>
                            <input
                                type="date"
                                className="form-control"
                                id="anniversary"
                                name="anniversary"
                                placeholder="Select your anniversary"
                                value={formData.anniversary}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="appartment-details">Apartment Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="appartment-details"
                                name="apartmentDetails"
                                placeholder="Enter your apartment details"
                                value={formData.apartmentDetails}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="area">Area</label>
                            <input
                                type="text"
                                className="form-control"
                                id="area"
                                name="area"
                                placeholder="Enter your area"
                                value={formData.area}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                placeholder="Enter your city"
                                value={formData.city}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="state"
                                placeholder="Enter your state"
                                value={formData.state}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="pincode">Pincode</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pincode"
                                name="pincode"
                                placeholder="Enter your pincode"
                                pattern="[0-9]+"
                                title="Please enter only numbers"
                                value={formData.pincode}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="emegency-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="emergency-number">Emergency Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="emergency-number"
                                    name="emergencyNumber"
                                    placeholder="Enter your emergency number"
                                    value={formData.emergencyNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="relation">Relation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="relation"
                                    name="relation"
                                    placeholder="Enter your relation"
                                    value={formData.relation}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="mobile-number">Mobile Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="mobile-number"
                                    name="mobileNumber"
                                    placeholder="Enter mobile number"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    placeholder="Enter address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="emegency-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="emergency-number">Emergency Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="emergency-number"
                                    name="emergencyNumber"
                                    placeholder="Enter your emergency number"
                                    value={formData.emergencyNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="relation">Relation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="relation"
                                    name="relation"
                                    placeholder="Enter your relation"
                                    value={formData.relation}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="mobile-number">Mobile Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="mobile-number"
                                    name="mobileNumber"
                                    placeholder="Enter mobile number"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    placeholder="Enter address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row mt-3">
                <div className="col-md-12 d-flex justify-content-end">
                    <div className="me-2 task-overdue">
                        <button onClick={() => handleRedirectToPage("cancel")}>Cancel</button>
                    </div>
                    <div className="complete-task">
                        <button onClick={() => handleRedirectToPage("update")}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientGeneralInformation;
