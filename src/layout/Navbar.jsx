import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { useHistory } from 'react-router-dom';
import logo from "../images/logo.png";
import ekyaamLogo from "../images/ekyaam-logo.png";
import "../style.css";
import profileImage from "../images/profile.png";
import rightArrow from "../images/right-arrow.svg";
import workBlackBag from "../images/work-black.svg";
import dashboardIcon from "../images/dashboard.svg";
import addPrescriptionIcon from "../images/add-prescription.svg";
import postSessionNotesIcon from "../images/post-session-notes.svg"
import pendingTasksIcon from "../images/pending-tasks.svg"
import therapistsIcon from "../images/Therapists.svg"
import patientsIcon from "../images/Patients.svg"
import calendarIcon from "../images/Calendar.svg"
import reportsIcon from "../images/Reports.svg"
import settingsIcon from "../images/Settings.svg"
import menuImg from '../images/menu.svg';
import crossImg from '../images/cross.svg';
import purpledownArrow from "../images/purple-downArrow.svg"
import SignOutPopup from '../components/SignOutPopup';

const sidebarConfig = [
  { id: 1, iconSvg: dashboardIcon, text: "Dashboard", link: "/" },
  { id: 2, iconSvg: addPrescriptionIcon, text: "Add Prescription", link: "/add-prescription" },
  { id: 3, iconSvg: postSessionNotesIcon, text: "Post Session Notes", link: "/post-session-notes" },
  { id: 4, iconSvg: pendingTasksIcon, text: "Pending Tasks", link: "/pending-tasks" },
  { id: 5, iconSvg: therapistsIcon, text: "Therapists", link: "/therapists" },
  { id: 6, iconSvg: patientsIcon, text: "Patients", link: "/manage-patients" },
  { id: 7, iconSvg: calendarIcon, text: "Calendar", link: "/calendar" },
  { id: 8, iconSvg: reportsIcon, text: "Reports", link: "/reports" },
  { id: 9, iconSvg: settingsIcon, text: "Settings", link: "/settings" },
];

const SidebarMenuItem = ({ iconSvg, text, link }) => (
  <li className="nav-item" data-toggle="tooltip" data-placement="right" title={text}>
    <a className="nav-link link" href={link}>
      <img className="menu-icon" src={iconSvg} alt="" />
      <span className="nav-link-text">{text}</span>
    </a>
  </li>
);

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', closeSearchResults);

    return () => {
      document.removeEventListener('mousedown', closeSearchResults);
    };
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredResults = getFilteredResults(searchTerm);
    setSearchTerm(searchTerm);
    setSearchResults(filteredResults);
  };

  const getFilteredResults = (searchTerm) => {
    const names = [
      { name: 'John Doe', photo: profileImage, number: '1234567890' },
      { name: 'Jane Smith', photo: profileImage, number: '9876543210' },
      { name: 'Michael Johnson', photo: profileImage, number: '5555555555' }
    ];

    return names.filter((item) => item.name.toLowerCase().includes(searchTerm));
  };

  const closeSearchResults = (event) => {
    if (!searchInputRef.current.contains(event.target)) {
      setSearchResults([]);
    }
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const [messageData, setMessageData] = useState([
    {
      name: 'Vishwanath Sawant',
      who: 'Patient',
      time: 'Just now',
      photo: profileImage,
    },
    {
      name: 'Jane Smith',
      who: 'Patient',
      time: '1 hour ago',
      photo: profileImage,
    },
    {
      name: 'John Doe',
      who: 'Therapist',
      time: '2 hours ago',
      photo: profileImage,
    },
  ]);

  const [notificationData, setNotificationData] = useState([
    {
      details: 'lorem but still need the element to resemble a link.',
      time: 'Just now',
      photo: profileImage,
    },
    {
      details: 'lorem but still need the element to resemble a link.',
      time: '1 hour ago',
      photo: profileImage,
    },
    {
      details: 'lorem but still need the element to resemble a link.',
      time: '2 hours ago',
      photo: profileImage,
    },
  ]);

  const history = useHistory();
  const handleEditProfile = () => {
    history.push('/psychiatrist-general-information');
  };

  const [showSignOutPopup, setShowSignOutPopup] = useState(false);

  const handleSignOutClick = () => {
    setShowSignOutPopup(true);
  };
  const handleSignOutClickClosePopup = () => {
    setShowSignOutPopup(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-default fixed-top top-bar" id="mainNav">
      <a className="navbar-brand" href="/" style={{ marginLeft: "10px", marginRight: "10px" }}>
        <img src={logo} alt="" width="auto" height="49" />
      </a>
      <button
        className={`navbar-toggler ${isNavbarOpen ? 'collapsed' : ''}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded={isNavbarOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
        id="sidenavToggler"
        style={{ marginLeft: '10px', marginRight: '10px' }}
        onClick={toggleNavbar}
      >
        {!isNavbarOpen ? (
          <img src={menuImg} alt="Menu" />
        ) : (
          <img src={crossImg} alt="Cross" />
        )}
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav navbar-sidenav sidebar">
          {sidebarConfig.map(({ id, iconSvg, text, link }) => (
            <SidebarMenuItem key={id} iconSvg={iconSvg} text={text} link={link} />
          ))}
          <img src={ekyaamLogo} alt="" className="sidebar-footer-image" />
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0 mr-lg-2">
              <div className="search-container">
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search therapist or patient"
                  onChange={handleSearch}
                  onClick={handleSearch}
                />
                <span className="search-icon"></span>
              </div>
              {searchResults.length > 0 && (
                <div className="SearchResultsPopup">
                  <div className="search-results">
                    {searchResults.map((result) => (
                      <div className="search-result-item" key={result.name}>
                        <img src={result.photo} alt={result.name} className="searchprofile-image" />
                        <span className="name">{result.name}</span>
                        <span className="number">{result.number}</span>
                        <div className="right-arrow">
                          <img className="right-arrow-icon search-rightArrow" alt="" src={rightArrow} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mr-lg-1"
              id="messagesDropdown"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="message-icon"></span>
              <span className="d-lg-none">Messages</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right mr-lg-3" aria-labelledby="messagesDropdown">
              <div className="message-container-list">
                {messageData.map((message, index) => (
                  <div
                    className={`message-container-list-item ${index % 2 === 0 ? 'even' : 'odd'}`}
                    key={index}
                  >
                    <img className="message-container-list-item-profile" alt="" src={message.photo} />
                    <span className="message-container-list-item-title">
                      <span className="name">{message.name}</span>
                      <span className="who">{message.who}</span>
                    </span>
                    <div className="message-right-arrow">
                      <div className="message-right-text">
                        <span>{message.time}</span>
                      </div>
                      <img className="message-right-arrow-icon" alt="" src={rightArrow} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mr-lg-1"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="notification-icon"></span>
              <span className="d-lg-none">Notification</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right mr-lg-3"
              aria-labelledby="notificationDropdown"
            >
              <div className="message-container-list">
                {notificationData.map((notification, index) => (
                  <div
                    className={`message-container-list-item ${index % 2 === 0 ? 'even' : 'odd'}`}
                    key={index}
                  >
                    <img
                      className="message-container-list-item-profile"
                      alt=""
                      src={notification.photo}
                    />
                    <span className="notification-container-list-item-title">
                      <span className="name">
                        {notification.details}
                      </span>
                      <span className="who">{notification.time}</span>
                    </span>
                    <div className="message-right-arrow">
                      <img
                        className="message-right-arrow-icon"
                        alt=""
                        src={rightArrow}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mr-lg-1"
              id="profileDropdown"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="profile-icon"></span>
              <span className="d-lg-none">Profile</span>
              <img src={purpledownArrow} alt="" className='profile-navbar-dropdown-icon' />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right mr-lg-3"
              aria-labelledby="profileDropdown"
            >
              <div className="profile-container-list">
                <div className="profile-frame-parent-container">
                  <div className="profile-frame-container">
                    <img className="profile-image" alt="" src={profileImage} />
                    <div className="profile-details">
                      <div className="profile-name">Dr. Ramesh Thakur</div>
                      <div className="profile-designation-container">
                        <img
                          className="work-black-icon"
                          alt=""
                          src={workBlackBag}
                        />
                        <div className="profile-designation">Neuropsychiatry</div>
                      </div>
                      <button
                        className="rectangle-edit-btn" onClick={handleEditProfile}>
                        Edit Profile
                      </button>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="clinic-frame-container">
                    <span className="profile-clinic-header">Select Clinic</span>
                    <div className="clinic-container">
                      <div className="clinic-item">
                        <img className="clinic-image" alt="" src={profileImage} />
                        <div className="clinic-details">
                          <div className="clinic-name">Family Medical Clinic</div>
                          <div className="owned">Self Clinic</div>
                        </div>
                      </div>
                    </div>
                    <div className="clinic-container">
                      <div className="clinic-item">
                        <img className="clinic-image" alt="" src={profileImage} />
                        <div className="clinic-details">
                          <div className="clinic-name">Family Medical Clinic</div>
                          <div className="owned">Self Clinic</div>
                        </div>
                      </div>
                    </div>
                    <div className="clinic-container">
                      <div className="clinic-item">
                        <img className="clinic-image" alt="" src={profileImage} />
                        <div className="clinic-details">
                          <div className="clinic-name">Family Medical Clinic</div>
                          <div className="owned">Self Clinic</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-frame-container buttons">
                    <button className="profile-menu-header" onClick={() => console.log("")}>
                      <span>Settings</span>
                    </button>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-frame-container buttons">
                    <button className="profile-menu-header" onClick={handleSignOutClick}>
                      <span>Sign Out</span>
                    </button>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-frame-container">
                    <a href="#">
                      <img
                        src={ekyaamLogo}
                        alt=""
                        className="profile-footer-logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {showSignOutPopup &&
        ReactDOM.createPortal(<SignOutPopup handleClosePopup={handleSignOutClickClosePopup} />, document.body)}
    </nav>

  );
};

export default Navbar;
