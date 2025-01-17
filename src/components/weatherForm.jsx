import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";

function WeatherForm({ onChangeCity }) {
    const [city, setCity] = useState('');
    const [warning, setWarning] = useState('');

    function onChange(e) {
        const value = e.target.value;
        setCity(value);
        if (value) {
            setWarning('');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!city) {
            setWarning('Please enter a city name.');
        } else {
            onChangeCity(city);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><IoLocationSharp /></span>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={onChange}
                    aria-describedby="addon-wrapping"
                />
              
            </div>
           {warning && <p className="text-bg-warning px-3">{warning}</p>}
        </form>
    );
}

export default WeatherForm;