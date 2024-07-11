import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Dashboard'; 
import Authentication from './Authentication';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const checkAuthentication = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        try {
          const response = await axios.post('http://localhost:8000/api/auth/', null, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });

          if (response.status === 200) {
            setUserUsername(response.data.username); 
            setIsLoggedIn(true);
          } else {
            handleAuthenticationFailure();
          }
        } catch (error) {
          console.error('Error checking authentication:', error);
          handleAuthenticationFailure();
        }
      }
    };

    checkAuthentication();
  }, []);

  const handleAuthenticationFailure = () => {
    setIsLoggedIn(false);
    setUserUsername('');
  }

  return (
    <div className={`App ${isLoggedIn ? 'dashboard-view' : 'auth-view'}`}>
      {isLoggedIn ? (
        <Dashboard username={userUsername} />
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
