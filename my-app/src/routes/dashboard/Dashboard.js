import React from 'react';
import SideBar from '../../components/navigation/SideBar';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-content">
        {/* Other dashboard content */}
      </div>
    </div>
  );
};

export default Dashboard;
