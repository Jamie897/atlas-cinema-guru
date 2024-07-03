import React, { useState } from 'react';
import './auth.css';
import axios from 'axios';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInClick = () => {
    setSwitch(true);
  };

  const handleSignUpClick = () => {
    setSwitch(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
    
    axios.post(url, { username, password })
      .then((response) => {
        localStorage.setItem('accessToken', response.data.token);
        setUserUsername(username);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error('Error during authentication:', error);
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <button onClick={handleSignInClick} className={_switch ? 'active' : ''}>
          Sign In
        </button>
        <button onClick={handleSignUpClick} className={!_switch ? 'active' : ''}>
          Sign Up
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
      </form>
    </div>
  );
}

export default Authentication;

