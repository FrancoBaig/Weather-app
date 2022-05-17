import React from "react";
import HeavyRain from "../../Assets/images/HeavyRain.png";

// volver componentes cada día

function WeeklyReport(week) {
    const value = Object.values(week);
    return (
        <div className="weekly-report">
            {value.map((day, i) => (
                <div className="week-card " key={i}>
                    <p className="week-text">{day.date}</p>
                    <img className="week-img" src={day.icon} alt="wat" />
                    <div className="week-temp">
                        <p className="max">{day.temp_max}°C</p>
                        <p className="min">{day.temp_min}°C</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WeeklyReport;
