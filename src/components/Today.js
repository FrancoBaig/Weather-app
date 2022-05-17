import React from "react";

import Cloud from "../Assets/images/background/Cloud-background.png";
import Shower from "../Assets/images/Shower.png";

function Today({ icon, temp, main, date }) {
    // const [loading, data, error] = GetWeather(city);

    // if (loading) return <h1>Loading</h1>;

    return (
        <div className="today-container">
            <div className="btn-container">
                <button type="button" className="btn btn-search">
                    Search for places
                </button>
            </div>

            <div className="today-display">
                <div className="img-container">
                    <img className="today-img" src={icon} />
                </div>
            </div>
            <div className="today-data">
                <h2 className="temp-display">
                    {temp}
                    <span>°C</span>
                </h2>
                <p className="today-weather">{main}</p>
                <div className="date">
                    <p>Today</p>
                    <span>•</span>
                    <p>{date}</p>
                </div>
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>Córdoba
                </div>
            </div>
        </div>
    );
}

export default Today;
