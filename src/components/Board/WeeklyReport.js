import React from "react";
import HeavyRain from "../../Assets/images/HeavyRain.png";

// volver componentes cada día

function WeeklyReport() {
    return (
        <div className="weekly-report">
            <div className="week-card">
                <p className="week-text">Tomorrow</p>
                <img className="week-img" src={HeavyRain} alt="wat" />
                <div className="week-temp">
                    <p className="max">16°C</p>
                    <p className="min">11°C</p>
                </div>
            </div>
            <div className="week-card">
                <p className="week-text">Tomorrow</p>
                <img className="week-img" src={HeavyRain} alt="wat" />
                <div className="week-temp">
                    <p className="max">16°C</p>
                    <p className="min">11°C</p>
                </div>
            </div>
            <div className="week-card">
                <p className="week-text">Tomorrow</p>
                <img className="week-img" src={HeavyRain} alt="wat" />
                <div className="week-temp">
                    <p className="max">16°C</p>
                    <p className="min">11°C</p>
                </div>
            </div>
            <div className="week-card">
                <p className="week-text">Tomorrow</p>
                <img className="week-img" src={HeavyRain} alt="wat" />
                <div className="week-temp">
                    <p className="max">16°C</p>
                    <p className="min">11°C</p>
                </div>
            </div>
            <div className="week-card">
                <p className="week-text">Tomorrow</p>
                <img className="week-img" src={HeavyRain} alt="wat" />
                <div className="week-temp">
                    <p className="max">16°C</p>
                    <p className="min">11°C</p>
                </div>
            </div>
        </div>
    );
}

export default WeeklyReport;
