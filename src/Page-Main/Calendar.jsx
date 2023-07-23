import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import CalendarDatePicker from "../components/CalendarDatePicker"
import CalendarBox from "../components/CalendarBox";
import addIcon from "../images/addIcon.svg"


const Calendar = () => {

  return (
    <div className="main-content container-fluid">
      <div className="row align-items-md-stretch">
        <div className="page-frame-title col-md-6">
          <PageFrameTitle title="Appointments Calendar" />
          <div className="row">
            <form className="col-md-4">
              <select
                className="input-field"
                id=""
                name="Therapist"
                value=""
              >
                <option value="">Select Therapist</option>
                <option value="Dr. Ramesh Thakur">Dr. Ramesh Thakur</option>
                <option value="Dr. Ramesh Thakur">Dr. Ramesh Thakur</option>
                <option value="Dr. Ramesh Thakur">Dr. Ramesh Thakur</option>
              </select>
            </form>
          </div>
        </div>
        <div className="page-guide col-md-6">
          <PageGuide guideText="Dashboard > Calendar" />
        </div>
      </div>
      <div className="container-fluid m-0">
        <div className="calendar-container row">
          <div className="calendar-session-container col-md-9 m-0">
            <CalendarDatePicker />
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="month-calendar-session-container col-12 mx-2">
                <CalendarBox />
              </div>
              <div className="month-calendar-session-container col-12 mx-2 mt-2">
                <div className="calendar-menu-buttons buttons">
                  <button className="calendar-menu-item" onClick={() => console.log("")}>
                    <img src={addIcon} alt="" />
                    <span>Schedule Session</span>
                  </button>
                </div>
                <div className="calender-menu-divider"></div>
                <div className="calendar-menu-buttons buttons">
                  <button className="calendar-menu-item" onClick={() => console.log("")}>
                    <img src={addIcon} alt="" />
                    <span>Add User</span>
                  </button>
                </div>
                <div className="calender-menu-divider"></div>

                <div className="calendar-menu-buttons buttons">
                  <button className="calendar-menu-item" onClick={() => console.log("")}>
                    <img src={addIcon} alt="" />
                    <span>Create Prescription</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
