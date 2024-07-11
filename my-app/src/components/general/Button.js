import React from 'react';
import './general.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ label, className, onClick, icon }) => {
    return (
        <button className={`customButton ${className}`} onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon} className="buttonIcon" />}
            {label}
        </button>
    );
};

export default Button;

