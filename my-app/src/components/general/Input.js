import React from 'react';
import './general.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={`inputContainer ${className}`}>
            {label && <label className="inputLabel">{label}</label>}
            <div className="inputWrapper">
                {icon && <FontAwesomeIcon icon={icon} className="inputIcon" />}
                <input
                    type={type}
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes}
                    className="inputElement"
                />
            </div>
        </div>
    );
};

export default Input;

