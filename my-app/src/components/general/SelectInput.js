import React from 'react';
import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
    const handleSelect = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={`select-input-container ${className}`}>
            {label && <label className="select-input-label">{label}</label>}
            <select value={value} onChange={handleSelect} className="select-input-element">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
