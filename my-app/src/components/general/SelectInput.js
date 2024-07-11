import React from 'react';
import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
    const handleSelect = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={`selectInputContainer ${className}`}>
            {label && <label className="selectInputLabel">{label}</label>}
            <select value={value} onChange={handleSelect} className="selectInputElement">
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
