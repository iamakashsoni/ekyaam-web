import React, { useState } from 'react';

const DayCell = ({ day, isSelected, isToday, handleDayClick }) => {
    const handleClick = () => {
        handleDayClick(day);
    };

    return (
        <div
            className={`day-cell ${isSelected ? 'selected-day' : ''} ${isToday ? 'today' : ''}`}
            onClick={handleClick}
        >
            {day}
        </div>
    );
};

const CalendarBox = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const getFirstDayOfMonth = (date) => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        return firstDay.getDay();
    };

    const getLastDayOfMonth = (date) => {
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return lastDay.getDate();
    };

    const handlePrevMonth = () => {
        const prevDate = new Date(currentDate);
        prevDate.setMonth(prevDate.getMonth() - 1);
        setCurrentDate(prevDate);
        setSelectedDate(null); // Reset selected date when changing month
    };

    const handleNextMonth = () => {
        const nextDate = new Date(currentDate);
        nextDate.setMonth(nextDate.getMonth() + 1);
        setCurrentDate(nextDate);
        setSelectedDate(null); // Reset selected date when changing month
    };

    const handleDayClick = (day) => {
        const selectedDay = new Date(currentDate);
        selectedDay.setDate(day);
        setSelectedDate(selectedDay);
    };

    const renderDays = () => {
        const today = new Date();
        const firstDay = getFirstDayOfMonth(currentDate);
        const lastDay = getLastDayOfMonth(currentDate);

        const days = [];
        for (let i = 1; i <= lastDay; i++) {
            const isCurrentMonth = i >= firstDay + 1 && i <= lastDay + firstDay;
            const isSelected = selectedDate && selectedDate.getDate() === i && isCurrentMonth;
            const isToday =
                today.toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString();

            days.push(
                <DayCell key={i} day={i} isSelected={isSelected} isToday={isToday} handleDayClick={handleDayClick} />
            );
        }

        for (let i = 0; i < firstDay; i++) {
            days.unshift(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        return days;
    };

    const formatDate = (date) => {
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>&#8249;</button>
                <span className="datepicker-month">{formatDate(currentDate)}</span>
                <button onClick={handleNextMonth}>&#8250;</button>
            </div>
            <div className="calendar-grid">
                <div className="day-cell">Sun</div>
                <div className="day-cell">Mon</div>
                <div className="day-cell">Tue</div>
                <div className="day-cell">Wed</div>
                <div className="day-cell">Thu</div>
                <div className="day-cell">Fri</div>
                <div className="day-cell">Sat</div>
                {renderDays()}
            </div>
        </div>
    );
};

export default CalendarBox;
