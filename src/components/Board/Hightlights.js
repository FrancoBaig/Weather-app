import React from "react";
import ProgressBar from "./ProgressBar";

// acá se podría hacer un componente de tarjeta, primero título, despues texto, y después opcional otra cosa, y lo ubique, porque son siempre igual

function Hightlights(hightlights) {
    const values = Object.values(hightlights);
    return (
        <section className="hightlights">
            <h2 id="hightlights-title">Today's Hightlights</h2>
            <div className="details-container">
                <div className="today-details">
                    <h3 className="details-title">{values[0].title}</h3>
                    <p className="details-content">
                        {values[0].wind_speed}
                        <span>mph</span>
                    </p>
                    <div className="details-extra">
                        <span className="material-symbols-outlined">
                            assistant_navigation
                        </span>
                        <p>WSW</p>
                    </div>
                </div>
                <div className="today-details">
                    <h3 className="details-title">{values[1].title}</h3>
                    <p className="details-content">{values[1].humidity}</p>
                    <div className="details-extra">
                        <ProgressBar percent={values[1].humidity} />
                    </div>
                </div>
                <div className="today-details">
                    <h3 className="details-title">{values[2].title}</h3>
                    <p className="details-content">
                        {values[2].visibility} miles
                    </p>
                </div>
                <div className="today-details">
                    <h3 className="details-title">{values[3].title}</h3>
                    <p className="details-content">{values[3].pressure} mb</p>
                </div>
            </div>
        </section>
    );
}

export default Hightlights;
