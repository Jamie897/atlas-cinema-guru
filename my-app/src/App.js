import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
            setUserUsername(response.data.username); // Assuming response.data contains username
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
    // Optionally: handle other tasks on authentication failure
  };

  return (
    <div className="App">
      <h1>Authentication Check</h1>
      <p>User Logged In: {isLoggedIn ? 'Yes' : 'No'}</p>
      <p>User Username: {userUsername}</p>
    </div>
  );
}

export default App;
