import React from "react";
import { useHistory } from 'react-router-dom';
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import callIcon from "../images/call-black.svg";
import emailIcon from "../images/email-black.svg";
import placeIcon from "../images/place-black.svg";
import profileImage from "../images/rect-profile.png"
import PatientProfileDetailsContainer from "../components/PatientProfileDetailsContainer";
import PatientMenuList from "../components/PatientMenuList";

const PatientGeneralInformationView = () => {


    const contactDetails = [
        {
            id: 1,
            icon: callIcon,
            text: "+91 98765 43210"
        },
        {
            id: 2,
            icon: callIcon,
            text: "+91 98765 43210"
        }
    ];

    const emergencyContactDetails = [
        {
            id: 1,
            name: "Chetan Rane",
            relation: "Brother",
            callIcon: callIcon,
            text: "+91 98765 43210",
            placeIcon: placeIcon,
            address: "296, Ravi Nivas, Sec. 30-A, Vashi, Navi Mumbai, 400703"
        },
        {
            id: 2,
            name: "Chetan Rane",
            relation: "Brother",
            callIcon: callIcon,
            text: "+91 98765 43210",
            placeIcon: placeIcon,
            address: "296, Ravi Nivas, Sec. 30-A, Vashi, Navi Mumbai, 400703"
        },
    ];

    const workDetails = [
        {
            id: 1,
            companyName: "MX Player",
            designation: "Manager",
        }, {
            id: 2,
            companyName: "MX Player",
            designation: "Manager",
        },
    ];

    const history = useHistory();
    const handleEditProfile = () => {
        history.push('/patient-general-information-edit');
    };

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Patient Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Patient Profile > General Information" />
                </div>
            </div>
            <PatientMenuList />
            <div className="user-information-container">
                <div className="information-header">
                    <p className="title">General Information</p>
                    <button className="edit-profile-btn" onClick={handleEditProfile}>
                        Edit
                    </button>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="user-information">
                            <img className="user-image" alt="" src={profileImage} />
                            <div className="profile">
                                <div className="username">
                                    <span>Dr. Ramesh Thakur</span>
                                </div>
                                <div className="user-number">
                                    <img alt="" src={callIcon} />
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="user-email">
                                    <img alt="" src={emailIcon} />
                                    <span>rameshthakur@gmail.com</span>
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
                    </div>
                    <div className="col-lg-12">
                        <div className="personal-details">
                            <div className="header">
                                <span>Work Details</span>
                            </div>
                            <div className="sub-header">
                                <div className="contact-details">
                                    {workDetails.map((workItem) => (
                                        <div className="user-number" key={workItem.id}>
                                            <span>
                                                {workItem.id}. Company Name - <span className="text-dark">{workItem.companyName}</span>
                                            </span><br />
                                            <span>
                                                Designation - <span className="text-dark">{workItem.designation}</span>
                                            </span><br />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="personal-details">
                            <div className="header">
                                <span>Emergency Contact</span>
                            </div>
                            <div className="sub-header">
                                <div className="contact-details">
                                    {emergencyContactDetails.map((emergencyContactItem) => (
                                        <div className="user-number" key={emergencyContactItem.id}>
                                            <span className="text-dark">{emergencyContactItem.id}. {emergencyContactItem.name} ({emergencyContactItem.relation})</span><br />
                                            <img alt="" src={emergencyContactItem.callIcon} />
                                            <span>{emergencyContactItem.text}</span><br />
                                            <img alt="" src={emergencyContactItem.placeIcon} />
                                            <span>{emergencyContactItem.address}</span><br />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PatientProfileDetailsContainer className="remove-margin-top" />
        </div >
    );
};

export default PatientGeneralInformationView;
