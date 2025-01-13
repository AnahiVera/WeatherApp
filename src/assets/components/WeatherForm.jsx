import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5"

function WeatherForm({ onChangeCity }) {

    const [city, setCity] = useState('');

    function onChange(e) {
        const value = e.target.value;
        if (value !== "") {
            setCity(value);
        }else{
            console.log('No city entered');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        onChangeCity(city);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group flex-nowrap">

                <span className="input-group-text" id="addon-wrapping"><IoLocationSharp /></span>
                <input className="form-control" type="text" placeholder="Enter city name" onChange={onChange} aria-describedby="addon-wrapping" />
                

            </div>
        </form>
    )
}

export default WeatherForm;