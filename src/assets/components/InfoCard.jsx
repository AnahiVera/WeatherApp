import React from 'react';


function InfoCard({ weather }) {



    return (
        <div>
            <div className="cardInfo">
                <div className="align">
                    <img className="icon me-2" src={weather?.current.condition.icon} alt={weather?.current.condition.text} />
                    <h1>{weather?.current?.temp_c}°</h1>
                </div>
                <h5>{weather?.location.name}</h5>
                <h5>{weather?.location.country}</h5>
                

            </div>
        </div>
    );
}




export default InfoCard;