import React, { useState } from "react";

function LocationsList({ submitRequest }) {
    const [locations, setLocations] = useState([
        "Córdoba",
        "Buenos Aires",
        "London",
        "Barcelona",
        "Long Beach",
    ]);

    const handleSubmit = (ciudad) => {
        console.log(ciudad);
    };

    return (
        <>
            <nav className="locations-list">
                {locations.map((loc) => (
                    <div className="location-item" onClick={handleSubmit(loc)}>
                        <h3>{loc}</h3>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                ))}
            </nav>
        </>
    );
}

export default LocationsList;
