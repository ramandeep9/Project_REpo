import "./schedule.css";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from "./Nav";
import axios from "axios";
import Footer from "./Footer";
import toast from "react-hot-toast";

const ScheduleTime: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [userId, setUserId] = useState<string>(''); // State to hold the user id
  const [error, setError] = useState<string>(''); // State to hold error message
  const [scheduleSuccess, setScheduleSuccess] = useState<boolean>(false);
  useEffect(() => {
    // Retrieve the user id from local storage
    const userId = localStorage.getItem('id');
    if (userId) {
      setUserId(userId);
    }
  }, []); // Empty dependency array to run this effect only once on component mount

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!userId) {
    
      toast.error('Login first to book your schedule and make every moment count!');
    return;
    }
    setError('');

    const scheduleData = {
      id: userId,
      date: selectedDate,
      time: selectedTime
    };

    try {
      const requestData = JSON.stringify(scheduleData);

      // Set headers for the request
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post('https://tredul-backend.vercel.app/book/schedule', requestData, config);

      if (response.status === 201) {
        console.log('Schedule created successfully');
        toast.success("Booked Schedule Sucessfully");
        setSelectedDate('');
        setSelectedTime('');
        setScheduleSuccess(true);
      }
    } catch (error) {
      // Handle errors
      console.error('Error scheduling:', error);
      toast.error('Error scheduling appointment. Please try again.');
    }
  };
  if (scheduleSuccess) {
    navigate("/Dashboardtour")
  }

  return (
    <div>
      <Navbar/>
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
            <input type="hidden" name="id" value={userId} required/> 
            {error && <p className="error">{error}</p>} {/* Display error message if present */}
            <br />
            <button type="submit" className="btn7">
              Book Schedule
            </button>
            <Link to="/" className="back-link">
              Go back to Home Page
            </Link>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ScheduleTime;