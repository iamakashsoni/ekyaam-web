import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import CalendarDatePicker from "../components/CalendarDatePicker"


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
      <div className="calendar-container row">
        <div className="calendar-session-container col-md-9">
          <CalendarDatePicker />
        </div>
        {/* <div className="calendar-session-container col-md-3">
        </div> */}
      </div>
    </div>
  );
};

export default Calendar;
