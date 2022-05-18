import React, { useState } from "react";

function LocationsList({ submitRequest }) {
    const [locations, setLocations] = useState([
        "Córdoba",
        "Buenos Aires",
        "London",
        "Barcelona",
        "Long Beach",
    ]);

    const [request, setRequest] = useState("");

    // hacer que se guarden en localhost los últimos 5 lugares, no aumentar la lista, de este modo no tengo que agregar para eliminar

    const handleSubmit = (e) => {
        const selected = e.target.textContent;
        submitRequest(selected);
    };

    const handleLocations = (new_location) => {
        const a = "a";
    };

    return (
        <>
            <nav className="locations-list">
                {locations.map((loc) => (
                    <div className="location-item" onClick={handleSubmit}>
                        <h3>{loc}</h3>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                ))}
            </nav>
        </>
    );
}

export default LocationsList;
