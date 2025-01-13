import React, { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";


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
  

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>Information</div>
      <div>{weather?.location.name}</div>
      <div>Temperature C° {weather?.current?.temp_c}</div>
    </div>

  );
}
export default WeatherApp;