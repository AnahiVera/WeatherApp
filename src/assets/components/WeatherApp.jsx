import React, { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import InfoCard from "./InfoCard";


function WeatherApp() {

  const [weather, setWeather] = useState(null);

  
  async function loadInformation(city ='London') {

    try {
      const request = await fetch(
        `${import.meta.env.VITE_REACT_APP_URL}&key=${import.meta.env.VITE_REACT_APP_KEY}&q=${city}`
      )

      const json = await request.json();

      setWeather(json);
      console.log(json);

    } catch (error) {
      console.error(error, 'Error');
    }
  }

  function handleChangeCity(city) {
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
      <h1>Weather App</h1>
      <WeatherForm onChangeCity={handleChangeCity} />
             
      <InfoCard weather={weather}/>
    </div>

  );
}
export default WeatherApp;