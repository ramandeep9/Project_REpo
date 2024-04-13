// src/Activities.tsx
import React, { useState, useEffect } from 'react';
import Navbar from "./Nav";
import Footer from "./Footer";
import './Activities.css'; // Import the ActivityPage.css file

const ActivityPage: React.FC = () => {
  const [activityData, setActivityData] = useState<{ location: string; visitors: number }[]>([]);

  useEffect(() => {
    // Simulated activity data
    const mockActivityData = [
      { location: 'SVM', visitors: 150 },
      { location: 'KCPS', visitors: 200 },
      { location: 'DAV', visitors: 300 },
      { location: 'GNDU', visitors: 250 },
    ];

    setActivityData(mockActivityData);
  }, []);

  return (
    <div><Navbar/>
    <div className="activity-container">
      <h2>Tourist Activity</h2>
      <ul className="activity-list">
        {activityData.map((activity, index) => (
          <li key={index}>
            <span className="activity-location">{activity.location}</span>
            <span className="activity-visitors">{activity.visitors} visitors</span>
          </li>
        ))}
      </ul>
    </div><div className="mc"><Footer/></div>
    </div>
  );
};

export default ActivityPage;
