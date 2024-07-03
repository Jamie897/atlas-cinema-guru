

import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// src/components/general/Input.js

const Input = ({
    label,
    type,
    className,
    value,
    setValue,
    icon,
    inputAttributes
  }) => {
    
    const handleInput = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <div className={`input-wrapper ${className}`}>
        {label && <label className="input-label">{label}</label>}
        <div className="input-container">
          {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
          <input
            type={type}
            className="input-field"
            value={value}
            onChange={handleInput}
            {...inputAttributes}
          />
        </div>
      </div>
    );
  };
  
  export default Input;
  