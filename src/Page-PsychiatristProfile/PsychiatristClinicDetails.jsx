import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PsychiatristMenuList from "../components/PsychiatristMenuList";
import SessionContainer from "../components/SessionContainer";
import profileImage from "../images/rect-profile.png";
import callIcon from "../images/call-black.svg";
import emailIcon from "../images/email-black.svg";
import placeIcon from "../images/place-black.svg"; 
import placeColorIcon from "../images/place-icon.svg";


const PsychiatristClinicDetails = () => {
    const contactDetails = [
        { id: 1, icon: callIcon, text: "+91 98765 43210" },
        { id: 2, icon: callIcon, text: "+91 98765 43210" },
    ];

    const clinicTimings = [
        { id: 1, day: "Monday", time: "7am - 9pm" },
        { id: 2, day: "Tuesday", time: "7am - 9pm" },
        { id: 3, day: "Wednesday", time: "7am - 9pm" },
        { id: 4, day: "Thursday", time: "7am - 9pm" },
        { id: 5, day: "Friday", time: "7am - 9pm" },
        { id: 6, day: "Saturday", time: "7am - 9pm" },
        { id: 7, day: "Sunday", time: "Closed" },
    ];

    const sessionTypes = [
        { id: 1, type: "Routine Visit", duration: "45mins" },
        { id: 2, type: "Follow-up Visit", duration: "30mins" },
        { id: 3, type: "New Patient", duration: "30mins" },
    ];

    const statutoryHolidays = [
        { id: 1, day: "1 January 2024", name: "New Year" },
        { id: 2, day: "29 March 2024", name: "Good Friday" },
        { id: 3, day: "1 May 2024", name: "Labour Day" },
        { id: 4, day: "25 December 2024", name: "Xmas Day" },
    ];
    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Psychiatrist Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Psychiatrist Profile > Clinic Details" />
                </div>
            </div>
            <PsychiatristMenuList />
            <div className="user-information-container">
                <div className="information-header">
                    <p className="title">Clinic Details</p>
                    <button className="edit-profile-btn">Edit</button>
                </div>
                <div className="user-information">
                    <img className="user-image" alt="" src={profileImage} />
                    <div className="profile">
                        <div className="username">
                            <span>Family Medical Clinic</span>
                        </div>
                        <div className="user-number">
                            <img alt="" src={callIcon} />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="user-email">
                            <img alt="" src={emailIcon} />
                            <span>familymedicalclinic@gmail.com</span>
                        </div>
                        <div className="user-address">
                            <img alt="" src={placeIcon} />
                            <span>296, Ravi Nivas, Sec. 30-A, Vashi, Navi Mumbai, 400703</span>
                        </div>
                    </div>
                </div>
                <div className="personal-details">
                    <div className="header">
                        <span>Personal Details</span>
                    </div>
                    <div className="sub-header row">
                        <div className="contact-details col-md-6 col-sm-12">
                            <span>Contact Details</span>
                            {contactDetails.map((contact) => (
                                <div className="user-number" key={contact.id}>
                                    <img alt="" src={contact.icon} />
                                    <span>{contact.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="contact-details col-md-6 col-sm-12">
                            <span>Emergency Number</span>
                            <div className="user-number">
                                <img alt="" src={callIcon} />
                                <span>+91 98765 43210</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="personal-details">
                    <div className="header">
                        <span>Address</span>
                    </div>
                    <div className="sub-header row">
                        <div className="contact-details col-md-6">
                            <div className="user-number">
                                <span>296, Ravi Nivas, Sec. 30-A, Vashi, Navi Mumbai, 400703</span>
                            </div>
                        </div>
                        <div className="contact-details col-md-6 text-md-end">
                            <div className="user-number">
                                <img alt="" src={placeColorIcon} />
                                <a href="#" className="text-decoration-none">
                                    <span className="text-black">Locate on map</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="personal-details">
                    <div className="header">
                        <span>Clinic Timing</span>
                    </div>
                    <div className="sub-header">
                        <div className="contact-details">
                            {clinicTimings.map((timing) => (
                                <div className="user-number clinic-time-container" key={timing.id}>
                                    <span className="day">{timing.day}</span>
                                    <span className="clinic-time">{timing.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="personal-details">
                    <div className="header">
                        <span>Session Type and Duration</span>
                    </div>
                    <div className="sub-header">
                        <div className="contact-details">
                            {sessionTypes.map((type) => (
                                <div className="user-number clinic-time-container" key={type.id}>
                                    <span className="day">{type.type}</span>
                                    <span className="clinic-time">{type.duration}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="personal-details">
                    <div className="header">
                        <span>Statutory Holidays</span>
                    </div>
                    <div className="sub-header">
                        <div className="contact-details">
                            {statutoryHolidays.map((holiday) => (
                                <div className="user-number clinic-time-container" key={holiday.id}>
                                    <span className="day">{holiday.day}</span>
                                    <span className="clinic-time">{holiday.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SessionContainer className="above-session-container" />
        </div>
    );
};
export default PsychiatristClinicDetails;