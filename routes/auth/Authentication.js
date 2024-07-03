import React, { useState } from 'react';
import './auth.css';

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
      <form className="auth-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{_switch ? 'Log In' : 'Register'}</button>
      </form>
    </div>
  );
}

export default Authentication;
