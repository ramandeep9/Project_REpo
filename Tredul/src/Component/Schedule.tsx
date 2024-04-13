import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Nav';
import Search from './Search'; // Import the Search component
import './schedule.css';
import PageComponent from './PageComponent';
import SearchResults from './SearchResults';

const SchedulePage: React.FC = () => {
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

  const handleSearch = (location: string) => {
    const [city, state] = location.split(',').map((str) => str.trim());
    // Implement your search logic here
    console.log('Searching for schools or institutes in', city, state);
  };

  return (
    <div>
      <Navbar />
      
  
      <PageComponent/>
    </div>
  );
};

export default SchedulePage;

