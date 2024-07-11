import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage'; 
import Favorites from './Favorites'; 
import WatchLater from './WatchLater';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        <SideBar />
        <div className="dashboard-content">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;

