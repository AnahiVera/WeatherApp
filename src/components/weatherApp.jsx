import React, { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import InfoCard from "./infoCard";
import MapCard from "./mapCard";


function WeatherApp() {

  const [weather, setWeather] = useState(null);

  
  async function loadInformation(city = 'London') {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_URL}&key=${import.meta.env.VITE_REACT_APP_KEY}&q=${city}`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setWeather(data);
      console.log(data);
  
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  function handleChangeCity(city) {
    if (!city) {
      city = 'London';
    }
    setWeather(null);
    loadInformation(city);
  }

  useEffect(() => { 
    loadInformation();
   }, []) 
  
   useEffect(() => { 
    document.title = `Weather App ${weather?.location?.name ?? ''}`;
   }, [weather]) 

  return (
    <div className="container">
      <h1>Look your Weather here!</h1>
      <WeatherForm onChangeCity={handleChangeCity} />

      <div className="row">  
        <div className="column col-sm-12 col-md-6">
        <InfoCard weather={weather}/>
        </div>

        <div className="column col-sm-12 col-md-6">
        <MapCard weather={weather}/>
        </div>
      </div>
      
    </div>

  );
}
export default WeatherApp;