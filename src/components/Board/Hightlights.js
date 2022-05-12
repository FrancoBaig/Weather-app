import React from "react";

// acá se podría hacer un componente de tarjeta, primero título, despues texto, y después opcional otra cosa, y lo ubique, porque son siempre igual

function Hightlights() {
    return (
        <section className="hightlights">
            <h2 id="hightlights-title">Today's Hightlights</h2>
            <div className="details-container">
                <div className="today-details">
                    <h3 className="details-title">Wind status</h3>
                    <p className="details-content">
                        7<span>mph</span>
                    </p>
                    <div className="details-extra">WSW</div>
                </div>
                <div className="today-details">
                    <h3 className="details-title">Humidity</h3>
                    <p className="details-content">84%</p>
                    <div className="details-extra">--progressbar</div>
                </div>
                <div className="today-details">
                    <h3 className="details-title">Visibility</h3>
                    <p className="details-content">6.4 miles</p>
                </div>
                <div className="today-details">
                    <h3 className="details-title">Air pressure</h3>
                    <p className="details-content">998 mb</p>
                </div>
            </div>
        </section>
    );
}

export default Hightlights;
