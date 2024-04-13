import "./schedule.css";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from "./Nav";
import Footer from "./Footer";

const ScheduleTime: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement your booking logic here
    console.log('Booking scheduled:', selectedDate, selectedTime);
  };

  return (
    <div><div><Navbar/>
      <div className="cnttti">
        <div className="calendar-container">
          <form className="schedule-form" onSubmit={handleSubmit}>
            <h2 className="sch">Schedule</h2>
            <br />
            <label htmlFor="date" className="lab">
              Select Date:
            </label>
            <input
              className="inpp"
              type="date"
              id="date"
              name="date"
              value={selectedDate}
              onChange={handleDateChange}
              required
            />
            <br />
            <br />
            <label htmlFor="time">Select Time:</label>
            <input
              className="inpp"
              type="time"
              id="time"
              name="time"
              value={selectedTime}
              onChange={handleTimeChange}
              required
            />
            <br />
            <button type="submit" className="btn7">
              Book Schedule
            </button>
            <Link to="/" className="back-link">
              Go back to Home Page
            </Link>
          </form>
        </div>
        
      </div> </div>
      <Footer/>
    </div>
  );
};

export default ScheduleTime;
