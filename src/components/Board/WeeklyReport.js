import React from "react";
import HeavyRain from "../../Assets/images/HeavyRain.png";
import { useUnits } from "../../hooks/useUnits";

// volver componentes cada día

function WeeklyReport(week) {
    const value = Object.values(week);
    const { symb } = useUnits();
    return (
        <div className="weekly-report">
            {value.map((day, i) => (
                <div className="week-card " key={i}>
                    <p className="week-text">{day.date}</p>
                    <img className="week-img" src={day.icon} alt="wat" />
                    <div className="week-temp">
                        <p className="max">
                            {day.temp_max}
                            {symb}
                        </p>
                        <p className="min">
                            {day.temp_min}
                            {symb}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WeeklyReport;
