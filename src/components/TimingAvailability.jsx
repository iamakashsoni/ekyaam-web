import React, { useState } from 'react';

const TimingAvailability = () => {
    const [availability, setAvailability] = useState({
        allDay: false,
        morning: false,
        afternoon: false,
        evening: false,
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
        Sunday: "",
    });


    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;

        if (id === "allDay") {
            const timeValue = checked ? "allDay" : "";
            setAvailability((prevAvailability) => ({
                ...prevAvailability,
                allDay: checked,
                morning: checked,
                afternoon: checked,
                evening: checked,
                Monday: timeValue,
                Tuesday: timeValue,
                Wednesday: timeValue,
                Thursday: timeValue,
                Friday: timeValue,
                Saturday: timeValue,
                Sunday: timeValue,
            }));
        } else {
            setAvailability((prevAvailability) => ({
                ...prevAvailability,
                [id]: checked,
                morning: id === "morning" ? checked : prevAvailability.morning,
                afternoon: id === "afternoon" ? checked : prevAvailability.afternoon,
                evening: id === "evening" ? checked : prevAvailability.evening,
            }));
        }
    };

    const handleSelectChange = (e) => {
        const { id, value } = e.target;
        setAvailability((prevAvailability) => ({
            ...prevAvailability,
            [id]: value,
            morning:
                value === "7:00 AM - 9:00 AM"
                    ? true
                    : prevAvailability.morning,
            afternoon:
                value === "12:00 PM - 3:00 PM"
                    ? true
                    : prevAvailability.afternoon,
            evening:
                value === "7:00 PM - 9:00 PM"
                    ? true
                    : prevAvailability.evening,
        }));
    };
    return (
        <div className="qualifications-container">
            <div className="row timing-section justify-content-start">
                <div className="col-md-3">
                    <label className="form-check-inline">
                        <input
                            type="checkbox"
                            id="allDay"
                            className="form-check-input"
                            checked={availability.allDay}
                            onChange={handleCheckboxChange}
                        />
                        All day
                    </label>
                </div>
                <div className="col-md-3 pl-5">
                    <label className="form-check-inline">
                        <input
                            type="checkbox"
                            id="morning"
                            className="form-check-input"
                            checked={availability.morning}
                            onChange={handleCheckboxChange}
                            disabled={availability.allDay}
                        />
                        Morning
                    </label>
                </div>
                <div className="col-md-3 pl-5">
                    <label className="form-check-inline">
                        <input
                            type="checkbox"
                            id="afternoon"
                            className="form-check-input"
                            checked={availability.afternoon}
                            onChange={handleCheckboxChange}
                            disabled={availability.allDay}
                        />
                        Afternoon
                    </label>
                </div>
                <div className="col-md-3 pl-5">
                    <label className="form-check-inline">
                        <input
                            type="checkbox"
                            id="evening"
                            className="form-check-input"
                            checked={availability.evening}
                            onChange={handleCheckboxChange}
                            disabled={availability.allDay}
                        />
                        Evening
                    </label>
                </div>
            </div>
            <DayAvailability
                day="Monday"
                availability={availability}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectChange={handleSelectChange}
            />
            <DayAvailability
                day="Tuesday"
                availability={availability}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectChange={handleSelectChange}
            />
            <DayAvailability
                day="Wednesday"
                availability={availability}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectChange={handleSelectChange}
            />
            <DayAvailability
                day="Thursday"
                availability={availability}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectChange={handleSelectChange}
            />
            <DayAvailability
                day="Friday"
                availability={availability}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectChange={handleSelectChange}
            />
            <DayAvailability
                day="Saturday"
                availability={availability}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectChange={handleSelectChange}
            />
            <DayAvailability
                day="Sunday"
                availability={availability}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectChange={handleSelectChange}
            />
        </div>
    );
};


const DayAvailability = ({
    day,
    availability,
    handleCheckboxChange,
    handleSelectChange,
}) => {
    const getDropdownValue = () => {
        if (availability.allDay) return "allDay";
        if (availability[day]) return availability[day];
        return "";
    };

    return (
        <div className="row day-section justify-content-start">
            <div className="col-md-3">
                <div className="form-check form-check-inline">
                    <input
                        type="checkbox"
                        id={`${day}-checkbox`}
                        className="form-check-input"
                        checked={availability[day]}
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor={`${day}-checkbox`}>
                        {day}
                    </label>
                </div>
            </div>
            <div className="col-md-3 p-0">
                <select
                    className="dropdown-select form-check-inline"
                    id={day}
                    value={getDropdownValue()}
                    onChange={handleSelectChange}
                    disabled={availability.allDay}
                >
                    <option value="">Unavailable</option>
                    <option value="7:00 AM - 9:00 AM">7:00 AM - 9:00 AM</option>
                    {availability.allDay && <option value="allDay">7:00 AM - 9:00 AM</option>}
                </select>
            </div>
            <div className="col-md-3 p-0">
                <select
                    className="dropdown-select form-check-inline"
                    id={day}
                    value={getDropdownValue()}
                    onChange={handleSelectChange}
                    disabled={availability.allDay}
                >
                    <option value="">Unavailable</option>
                    <option value="12:00 PM - 3:00 PM">12:00 PM - 3:00 PM</option>
                    {availability.allDay && <option value="allDay">12:00 PM - 3:00 PM</option>}
                </select>
            </div>
            <div className="col-md-3 p-0">
                <select
                    className="dropdown-select form-check-inline"
                    id={day}
                    value={getDropdownValue()}
                    onChange={handleSelectChange}
                    disabled={availability.allDay}
                >
                    <option value="">Unavailable</option>
                    <option value="7:00 PM - 9:00 PM">7:00 PM - 9:00 PM</option>
                    {availability.allDay && <option value="allDay">7:00 PM - 9:00 PM</option>}
                </select>
            </div>
        </div>
    );
};

export default TimingAvailability;
