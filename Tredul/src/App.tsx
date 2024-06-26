// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route from react-router-dom
import HomePage from './Component/HomePage';
import toast, { Toaster } from 'react-hot-toast';
import TouristAvailabilityPage from './Component/TouristAvailabilityPage'
import Login from './Component/Login';
import Register from './Component/Register';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Schedule from './Component/Schedule';
import Activities from './Component/Activities';
import Rating from './Component/Rating';
import SchdeuleTime from './Component/ScheduleTime';
import DashboardTourist from './Component/Dashboard/DashboardTourist';
import DashboardHost from './Component/Dashboard/DashboardHost';
import ShareExperience from './Component/ShareExperience';
import Header from './Component/Dashboard/Header';
import Sidebar from './Component/Dashboard/Sidebar';  
import Iconprofile from './Component/Dashboard/IconProfile';
import Dashboard from "./Component/Dashboard/Pages/Dashboard";
import News from "./Component/Dashboard/Pages/News";
import Performance from "./Component/Dashboard/Pages/Performance";
import Transactions from "./Component/Dashboard/Pages/Transactions";
import Settings from "./Component/Dashboard/Settings";
import Support from "./Component/Dashboard/Pages/Support";
import SidebarHost from "./Component/Dashboard/SidebarHost";
import ProfileHost from './Component/Dashboard/ProfileHost';
import ProfileCompletion from './Component/Dashboard/ProfileCompletion'
import ChangePassword from './Component/ChangePassword'
import StarReview from './Component/StarReview'
import ForgotPassword from './Component/ForgotPassword';
import CreateTicketPage from "./Component/Dashboard/CreateTicketPage";
import VisitHistoryPage from "./Component/Dashboard/VisitHistoryPage";
import OpenChat from "./Component/Dashboard/OpenChat";
import ImageUpload from "./Component/Dashboard/ImageUpload";
function App() {

  return (
   
   
    <Router>
      <div className="App">
      <Toaster />
       
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
          <Route path="/DashboardHost" element={<DashboardHost openSidebarhostToggle={true} OpenSidebarhost={() => {}} />}/>
          <Route path="/ProfileCompletion" element={<ProfileCompletion />} />
          <Route path="/ProfileHost" element={<ProfileHost/>}/>
          <Route path="/Dashboardtour" element={<DashboardTourist openSidebarToggle={true} OpenSidebar={() => {}} />}/>
          <Route path="/ShareExperience" element={<ShareExperience />} />
          <Route path="/DASHBOARD" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/Iconprofile" element={<Iconprofile/>}/>
          <Route path="/StarReview" element={<StarReview/>}/>
          
          <Route path="/ChangePassword" element={<ChangePassword/>}/>
          <Route path="/TouristAvailabilityPage" element={<TouristAvailabilityPage/>}/>
          <Route path ="/ForgotPassword" element = {<ForgotPassword/>}/>
          <Route path="/CreateTicketPage" element = {<CreateTicketPage/>}/>
          <Route path="/VisitHistoryPage" element = {<VisitHistoryPage/>}/>
          <Route path="/OpenChat" element = {<OpenChat/>}/>
          <Route path="/ImageUpload" element = {<ImageUpload/>}/>

        </Routes>
        
        
      </div>
    </Router>
    
  );
}

export default App;



