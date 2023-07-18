import React, { useState } from 'react';
import rightArrow from "../images/dateRightArrow.svg";
import leftArrow from "../images/dateLeftArrow.svg";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date) => {
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
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
    for (let i = -3; i <= 3; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);

      const isCurrentDate = i === 0;
      const classNames = `date-box ${isCurrentDate ? 'current-date-box' : ''}`;
      const formattedDate = `${days[date.getDay()]}\n${date.getDate()}`;

      dateBoxes.push(
        <div key={i} className={classNames}>
          {formattedDate}
        </div>
      );
    }
    return dateBoxes;
  };

  return (
    <div className="date-picker-container">
      <div className="row">
        <div className="col-md-4 col-sm-12 current-date-container">
          <div className="current-date">{formatDate(currentDate)}</div>
        </div>
        <div className="col-md-8 col-sm-12 current-date-container">
          <div className="date-options-container">
            <span className="date-options">
              <span className="today-option">Today</span>
              <span className="separator"> | </span>
              <span>Weekly</span>
              <span className="separator"> | </span>
              <span>Monthly</span>
            </span>
          </div>
        </div>
      </div>
      <div className="date-picker-wrapper">
        <div className="date-arrow-container">
          <div className="arrow" onClick={handlePrevDate}>
            <img className="arrow-icon" alt="Previous" src={leftArrow} />
          </div>
          <div className="date-box-container">{renderDateBoxes()}</div>
          <div className="arrow" onClick={handleNextDate}>
            <img className="arrow-icon" alt="Next" src={rightArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
