// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route from react-router-dom
import HomePage from './Component/HomePage';
import Login from './auth/Login';
import Register from './auth/Register';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Schedule from './Component/Schedule';
import Activities from './Component/Activities';
import Rating from './Component/Rating';
import SchdeuleTime from './Component/ScheduleTime';
import DashboardTourist from './Component/Dashboard/DashboardTourist';
import DashboardHost from './Component/Dashboard/DashboardHost';
import ShareExperience from './Component/ShareExperience';


function App() {  
  return (
    <Router>
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Rating" element={<Rating />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/schedule" element={<Schedule />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/Activities" element={<Activities />} />
          <Route path="/SchdeuleTime" element={<SchdeuleTime />} /> 
          <Route path="/DashboardHost" element={<DashboardHost />} />
          <Route path="/Dashboardtour" element={<DashboardTourist />} />
          <Route path="/ShareExperience" element={<ShareExperience />} />
          
        </Routes>
        
    </Router>
  );
}

export default App;



