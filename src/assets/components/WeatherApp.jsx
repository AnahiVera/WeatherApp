import React, { useState } from "react";
import WeatherForm from "./weatherForm";

function WeatherApp() {

    const [weather, setWeather] = useState(null);

    async function loadInformation(city = 'london'){

    }

    function handleChangeCity(city){
        setWeather(null);
        loadInformation();
    }

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <div>Information</div>
    </div>
    
  );
}
export default WeatherApp;