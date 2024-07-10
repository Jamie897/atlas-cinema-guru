import React from 'react';
import './auth.css';

function Register({ username, password, setUsername, setPassword }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering with:', { username, password });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
