import React from "react";
import { useHistory } from 'react-router-dom';
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PsychiatristMenuList from "../components/PsychiatristMenuList";
import SessionContainer from "../components/SessionContainer";
import callIcon from "../images/call-black.svg";
import emailIcon from "../images/email-black.svg";
import placeIcon from "../images/place-black.svg";
import certificateImage from "../images/certificate.png";
import profileImage from "../images/rect-profile.png"

const PsychiatristGeneralInformation = () => {


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

    const qualificationDetails = [
        {
            id: 1,
            qualification: "M.D (Psychology)",
            passingYear: "2005",
            university: "Deemed",
            college: "MGM College of Health & Science, Aurangabad"
        },
        {
            id: 2,
            qualification: "M.B.B.S",
            passingYear: "2001",
            university: "Deemed",
            college: "MGM College of Health & Science, Aurangabad"
        }
    ];

    const certificates = [
        {
            id: 1,
            image: certificateImage
        },
        {
            id: 2,
            image: certificateImage
        },
        {
            id: 3,
            image: certificateImage
        }
    ];

    const specializations = [
        {
            id: 1,
            specialization: "Child and adolescent psychiatry",
            yearsOfExperience: "9 Years"
        },
        {
            id: 2,
            specialization: "Child and adolescent psychiatry",
            yearsOfExperience: "9 Years"
        },
        {
            id: 3,
            specialization: "Child and adolescent psychiatry",
            yearsOfExperience: "9 Years"
        }
    ];

    const professionalExperience = [
        {
            id: 1,
            title: "Psychiatrist at Fortise Hospital",
            details: "Experience details with achievements experiences"
        }
    ];

    const history = useHistory();
    const handleEditProfile = () => {
        history.push('/psychiatrist-general-information-edit');
    };

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Psychiatrist Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Psychiatrist Profile > General Information" />
                </div>
            </div>
            <PsychiatristMenuList />
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
                                <span>Qualification Details</span>
                            </div>
                            <div className="sub-header row">
                                {qualificationDetails.map((qualification) => (
                                    <div className="contact-details col-md-6 col-sm-12" key={qualification.id}>
                                        <span>{qualification.qualification}</span>
                                        <div className="user-number">
                                            <span>Passing Year: {qualification.passingYear}</span>
                                        </div>
                                        <div className="user-number">
                                            <span>University: {qualification.university}</span>
                                        </div>
                                        <div className="user-number">
                                            <span>College: {qualification.college}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="personal-details">
                            <div className="header">
                                <span>Certificates</span>
                            </div>
                            <div className="sub-header">
                                <div className="certificates-container">
                                    {certificates.map((certificate) => (
                                        <img
                                            className="certificates-image"
                                            src={certificate.image}
                                            alt=""
                                            key={certificate.id}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="personal-details">
                            <div className="header">
                                <span>Specialisation with Years of Experience</span>
                            </div>
                            <div className="sub-header">
                                <div className="contact-details">
                                    {specializations.map((specialization) => (
                                        <div className="user-number" key={specialization.id}>
                                            <span>
                                                {specialization.specialization} - {specialization.yearsOfExperience}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="personal-details">
                            <div className="header">
                                <span>Professional Experience</span>
                            </div>
                            <div className="sub-header">
                                <div className="contact-details">
                                    {professionalExperience.map((experience) => (
                                        <div className="user-number" key={experience.id}>
                                            <span>{experience.title} <br /></span>
                                            <span>{experience.details}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SessionContainer className="above-session-container" />
        </div>
    );
};

export default PsychiatristGeneralInformation;
