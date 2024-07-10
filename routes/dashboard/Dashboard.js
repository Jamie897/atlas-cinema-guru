

import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header.js';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div className="dashboard-container">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            <div className="dashboard-content">
                    <h1>Welcome to the Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
