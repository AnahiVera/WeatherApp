import React from 'react';
import { MdDewPoint, MdVisibility } from "react-icons/md"
import { FaWind } from "react-icons/fa6";

function InfoCard({ weather }) {



    return (
        <div>
            <div className="cardInfo">
                <div className="align">
                    <img className="icon me-2" src={weather?.current.condition.icon} alt={weather?.current.condition.text} />
                    <h1>{weather?.current?.temp_c}°</h1>
                    <p>Real feel {weather?.current.feelslike_c}°</p> 
                    
                </div>
                <h5>{weather?.current.condition.text}</h5>
                <h5>{weather?.location.name}, {weather?.location.region}  </h5>
                <h5>{weather?.location.country}</h5>
                
                <h6 className='mt-4'> <MdVisibility /> Visibility {weather?.current.vis_km} km</h6>
                <h6> <FaWind /> Wind {weather?.current.wind_kph} km/h</h6>
                <h6> <MdDewPoint /> Dew point {weather?.current.dewpoint_c}</h6>

                <small>Last updated {weather?.current.last_updated}</small>
                
                
                

            </div>
        </div>
    );
}




export default InfoCard;