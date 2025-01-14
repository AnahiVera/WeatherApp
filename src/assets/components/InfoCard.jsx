import React from 'react';


function InfoCard({ weather }) {



    return (
        <div>
            <div className="card">
                <div className="align">
                    <img className="icon" src={weather?.current.condition.icon} alt={weather?.current.condition.text} />
                </div>
                <h5>{weather?.location.name}</h5>
                <h5>{weather?.location.country}</h5>
                <div>C° {weather?.current?.temp_c}</div>
                <div>
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}




export default InfoCard;