import React, { useState } from 'react';
import axios from 'axios';

const Authentication = ({ setUserUsername, setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSwitch, setIsSwitch] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = isSwitch ? '/api/auth/login' : '/api/auth/register';
        const data = { username, password };

        try {
            const response = await axios.post(url, data);
            const token = response.data.token;

            localStorage.setItem('token', token);
            setUserUsername(username);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error during authentication', error);
  
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">{isSwitch ? 'Login' : 'Register'}</button>
            </form>
            <button onClick={() => setIsSwitch(!isSwitch)}>
                {isSwitch ? 'Switch to Register' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default Authentication;

