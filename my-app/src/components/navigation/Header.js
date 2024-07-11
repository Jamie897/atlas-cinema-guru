

import React from 'react';
import './navigation.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {
    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <nav className="header-nav">
            <img src="https://picsum.photos/100/100" alt="Avatar" className="header-avatar" />
            <p className="header-welcome">Welcome, JimJam!</p>
            <span className="header-logout" onClick={logout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </span>
        </nav>
    );
};

export default Header;
