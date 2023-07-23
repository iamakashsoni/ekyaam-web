import React, { useState } from 'react';
import rightArrow from "../images/dateRightArrow.svg";
import leftArrow from "../images/dateLeftArrow.svg";
import calendarIcon from "../images/calendar1.svg";
import downArrowIcon from "../images/down-arrow.svg"

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const full_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CalendarDatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date) => {
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatDay = (date) => {
    const dayIndex = date.getDay();
    return full_days[dayIndex];
  };

  const handlePrevDate = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const renderDateBoxes = () => {
    const dateBoxes = [];
    for (let i = -5; i <= 4; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);

      const isCurrentDate = i === 0;
      const classNames = `calendar-date-box ${isCurrentDate ? 'calendar-current-date-box' : ''}`;
      const formattedDate = `${days[date.getDay()]}\n${date.getDate()}`;

      dateBoxes.push(
        <div key={i} className={classNames}>
          {formattedDate}
        </div>
      );
    }
    return dateBoxes;
  };

  const totalSessionCount = 23;
  const completedSessionCount = 23;

  const nextSessions = [
    {
      id: 1,
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      patientName: "Kiran Rathi",
      previousSessionDate: "Tuesday, March 5, 2023",
    },
    {
      id: 2,
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      patientName: "Kiran Rathi",
      previousSessionDate: "Tuesday, March 5, 2023",
    },
    {
      id: 3,
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      patientName: "Kiran Rathi",
      previousSessionDate: "Tuesday, March 5, 2023",
    },
    {
      id: 4,
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      patientName: "Kiran Rathi",
      previousSessionDate: "Tuesday, March 5, 2023",
    },
    {
      id: 5,
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      patientName: "Kiran Rathi",
      previousSessionDate: "Tuesday, March 5, 2023",
    },
  ];
  return (
    <div className="calendar-date-picker-container">
      <div className="row">
        <div className="col-md-4 col-sm-12 calendar-current-date-container">
          <div className="row align-items-center mx-0">
            <div className="col-md-7 col-sm-12 p-0">
              <div className="calendar-current-date">
                <span className="calendar-day">{formatDay(currentDate)}</span><br />
                {formatDate(currentDate)}
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <span className="calendar-today-option">Today</span>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 calendar-current-date-container d-flex justify-content-end">
          <div className="calendar-session-details-container">
            <div className="calendar-session-detail calendar-total-session">
              <div className="calendar-details">
                <img src={calendarIcon} alt="" />
                <span className="calendar-count">{totalSessionCount}</span>
                <span className="calendar-text">Total Session</span>
              </div>
            </div>
            <div className="calendar-session-detail calendar-completed-session">
              <div className="calendar-details">
                <img src={calendarIcon} alt="" />
                <span className="calendar-count">{completedSessionCount}</span>
                <span className="calendar-text">Completed Session</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="calendar-date-picker-wrapper">
        <div className="calendar-date-arrow-container">
          <div className="calendar-arrow" onClick={handlePrevDate}>
            <img className="calendar-arrow-icon" alt="Previous" src={leftArrow} />
          </div>
          <div className="calendar-date-box-container">{renderDateBoxes()}</div>
          <div className="calendar-arrow" onClick={handleNextDate}>
            <img className="calendar-arrow-icon" alt="Next" src={rightArrow} />
          </div>
        </div>
      </div>
      <div className="calendar-session-start-container">
        <div className="next-session">
          {nextSessions.length > 0 ? (
            nextSessions.map((session) => (
              <div className="calendar-sessions-container" key={session.id}>
                <div className="current-session-title-container">
                  <div className="session-time">
                    <div className="start-time">{session.startTime}</div>
                    <div className="end-time">{session.endTime}</div>
                  </div>
                  <div className="session-divider"></div>
                  <div className="current-session-detail">
                    <div className="current-session-patient-name">{session.patientName}
                      <div className="previous-session-details">
                        <p className="previous-session-details-heading">Previous session:</p>
                        <p className="previous-session-details-date">{session.previousSessionDate}</p>
                      </div>
                    </div>
                    <div className="patient-details-arrow">
                      <img className="down-arrow-icon" alt="" src={downArrowIcon} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-next-sessions">No next sessions</div>
          )}
        </div>
      </div>

    </div>
  );
};

export default CalendarDatePicker;
