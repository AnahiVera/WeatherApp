import React, { useState } from 'react'

function WeatherForm({ onChangeCity }) {

    const [city, setCity] = useState('');

    function onChange(e) {
        const value = e.target.value;
        if (value === '') {
            setCity(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        onChangeCity(city);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group flex-nowrap">

                <span className="input-group-text" id="addon-wrapping">icon location</span>
                <input className="form-control" type="text" placeholder="Enter city name" onChange={onChange} aria-describedby="addon-wrapping" />
                <button type="button" className="btn btn-info">Get Weather</button>

            </div>
        </form>
    )
}

export default WeatherForm;