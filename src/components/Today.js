import React from "react";

import Cloud from "../Assets/images/background/Cloud-background.png";
import Shower from "../Assets/images/Shower.png";

const today = {
    id: 4747549752688640,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "ESE",
    created: "2022-05-11T10:25:22.035986Z",
    applicable_date: "2022-05-11",
    min_temp: 11.114999999999998,
    max_temp: 17.555,
    the_temp: 15.865,
    wind_speed: 7.058959213587317,
    wind_direction: 123.37922185567122,
    air_pressure: 1022.5,
    humidity: 69,
    visibility: 14.173166209337468,
    predictability: 71,
};

function Today() {
    return (
        <div className="today-container">
            <div className="btn-container">
                <button type="button" className="btn btn-search">
                    Search for places
                </button>
            </div>

            <div className="today-display">
                <div className="img-container">
                    <img className="today-img" src={Shower} />
                </div>
            </div>
            <div className="today-data">
                <h2 className="temp-display">
                    15<span>°C</span>
                </h2>
                <p className="today-weather">Shower</p>
                <div className="date">
                    <p>Today</p>
                    <span>•</span>
                    <p>Fri, 5 Jun</p>
                </div>
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>Helsinki
                </div>
            </div>
        </div>
    );
}

export default Today;
