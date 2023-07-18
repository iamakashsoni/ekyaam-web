import React, { useState } from 'react';
import profileImage from "../images/rect-profile.png"
import TimingAvailability from './TimingAvailability';

function ClinicDetailsEdit() {
    const [clinicInfo, setClinicInfo] = useState({

    });

    const [sessions, setSessions] = useState([
        { sessionType: '', sessionTime: '' },
        { sessionType: '', sessionTime: '' },
        { sessionType: '', sessionTime: '' }
    ]);

    const [holidays, setHolidays] = useState([
        { holidayType: '', holidayDate: '' },
        { holidayType: '', holidayDate: '' },
        { holidayType: '', holidayDate: '' }
    ]);

    const handleClinicInfoChange = (e) => {
        const { id, value } = e.target;
        setClinicInfo((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSessionChange = (index, field, value) => {
        setSessions((prevState) => {
            const updatedSessions = [...prevState];
            updatedSessions[index][field] = value;
            return updatedSessions;
        });
    };

    const handleHolidayChange = (index, field, value) => {
        setHolidays((prevState) => {
            const updatedHolidays = [...prevState];
            updatedHolidays[index][field] = value;
            return updatedHolidays;
        });
    };

    const addSession = () => {
        setSessions((prevState) => [...prevState, { sessionType: '', sessionTime: '' }]);
    };

    const deleteSession = (index) => {
        setSessions((prevState) => {
            const updatedSessions = [...prevState];
            updatedSessions.splice(index, 1);
            return updatedSessions;
        });
    };

    const addHoliday = () => {
        setHolidays((prevState) => [...prevState, { holidayType: '', holidayDate: '' }]);
    };

    const deleteHoliday = (index) => {
        setHolidays((prevState) => {
            const updatedHolidays = [...prevState];
            updatedHolidays.splice(index, 1);
            return updatedHolidays;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', clinicInfo, sessions, holidays);
    };

    return (
        <div className="user-information-container">
            <div className="information-header">
                <p className="title">Clinic Details</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="qualification-container">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="user-image" alt="" src={profileImage} />
                            <button className="edit-profile-btn my-2">Update Profile</button>
                        </div>
                        <div className="col-md-9">
                            <div className="form-group">
                                <label htmlFor="clinic-name">Clinic Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="clinic-name"
                                    placeholder="Clinic Name"
                                    value={clinicInfo.clinicName}
                                    onChange={handleClinicInfoChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile-number">Mobile Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobile-number"
                                    placeholder="Enter your mobile number"
                                    value={clinicInfo.mobileNumber}
                                    onChange={handleClinicInfoChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="clinic-type">Clinic</label>
                                <div className="d-flex">
                                    <div className="form-check me-3 gender">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="clinic"
                                            id="walk-in"
                                            value="walk-in"
                                            // checked={clinicInfo.clinicType === 'walk-in'}
                                            onChange={handleClinicInfoChange}
                                        />
                                        <label className="form-check-label" htmlFor="walk-in">
                                            Walk-In
                                        </label>
                                    </div>
                                    <div className="form-check me-3 gender">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="clinic"
                                            id="in-person"
                                            value="in-person"
                                            // checked={clinicInfo.clinicType === 'in-person'}
                                            onChange={handleClinicInfoChange}
                                        />
                                        <label className="form-check-label" htmlFor="in-person">
                                            In-Person
                                        </label>
                                    </div>
                                    <div className="form-check gender">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="clinic"
                                            id="both"
                                            value="both"
                                            // checked={clinicInfo.clinicType === 'both'}
                                            onChange={handleClinicInfoChange}
                                        />
                                        <label className="form-check-label" htmlFor="both">
                                            Both
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="whatsapp-number">WhatsApp Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="whatsapp-number"
                                    placeholder="Enter your WhatsApp number"
                                    value={clinicInfo.whatsappNumber}
                                    onChange={handleClinicInfoChange}
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
                                    placeholder="Enter your emergency number"
                                    value={clinicInfo.emergencyNumber}
                                    onChange={handleClinicInfoChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="email-address">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email-address"
                                    placeholder="Enter your email address"
                                    value={clinicInfo.emailAddress}
                                    onChange={handleClinicInfoChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="appartment-details">Clinic Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="appartment-details"
                                    placeholder="Enter your apartment details"
                                    value={clinicInfo.apartmentDetails}
                                    onChange={handleClinicInfoChange}
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
                                    placeholder="Enter your area"
                                    value={clinicInfo.area}
                                    onChange={handleClinicInfoChange}
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
                                    placeholder="Enter your city"
                                    value={clinicInfo.city}
                                    onChange={handleClinicInfoChange}
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
                                    placeholder="Enter your state"
                                    value={clinicInfo.state}
                                    onChange={handleClinicInfoChange}
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
                                    placeholder="Enter your pincode"
                                    pattern="[0-9]+"
                                    title="Please enter only numbers"
                                    value={clinicInfo.pincode}
                                    onChange={handleClinicInfoChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="google-map-address">Google Map Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="google-map-address"
                                    placeholder="Enter Google Map Link"
                                    value={clinicInfo.googleMapAddress}
                                    onChange={handleClinicInfoChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="information-header">
                    <p className="title">Clinic Timings</p>
                </div>
                <TimingAvailability />
                <div className="session-type qualification-container">
                    <div className="information-header">
                        <p className="title">Session</p>
                        <button className="edit-profile-btn" id="add-session-btn" onClick={addSession}>
                            + Add Sessions
                        </button>
                    </div>
                    {sessions.map((session, index) => (
                        <div className="qualification-container" key={index}>
                            <button className="delete-icon delete-position" type="button" onClick={() => deleteSession(index)}>
                                <span className="delete-icon-inner">-</span>
                            </button>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <label htmlFor="session-type">Session Type</label>
                                        <select
                                            className="dropdown-select form-check-inline"
                                            value={session.sessionType}
                                            onChange={(e) => handleSessionChange(index, 'sessionType', e.target.value)}
                                        >
                                            <option value="Routine Visit">Routine Visit</option>
                                            <option value="Follow-up Visits">Follow-up Visits</option>
                                            <option value="Smoking Cessation">Smoking Cessation</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="session-time">Session Time</label>
                                        <select
                                            className="dropdown-select form-check-inline"
                                            value={session.sessionTime}
                                            onChange={(e) => handleSessionChange(index, 'sessionTime', e.target.value)}
                                        >
                                            <option value="30 mins">30 mins</option>
                                            <option value="45 mins">45 mins</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="statutory-holidays qualification-container">
                    <div className="information-header">
                        <p className="title">Statutory Holidays</p>
                        <button className="edit-profile-btn" id="add-holidays-btn" onClick={addHoliday}>
                            + Add Holidays
                        </button>
                    </div>
                    {holidays.map((holiday, index) => (
                        <div className="qualification-container" key={index}>
                            <button className="delete-icon delete-position" type="button" onClick={() => deleteHoliday(index)}>
                                <span className="delete-icon-inner">-</span>
                            </button>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <label htmlFor="holiday-type">Holiday Type</label>
                                        <select
                                            className="dropdown-select form-check-inline"
                                            value={holiday.holidayType}
                                            onChange={(e) => handleHolidayChange(index, 'holidayType', e.target.value)}
                                        >
                                            <option value="Good Friday">Good Friday</option>
                                            <option value="New Year">New Year</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="holiday-date">Holiday Date</label>
                                        <input
                                            type="date"
                                            name=""
                                            id=""
                                            value={holiday.holidayDate}
                                            onChange={(e) => handleHolidayChange(index, 'holidayDate', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 d-flex justify-content-end">
                        <div className="me-2 task-overdue">
                            <button onClick={() => console.log('Cancel')}>Cancel</button>
                        </div>
                        <div className="complete-task">
                            <button type="submit">Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ClinicDetailsEdit;
