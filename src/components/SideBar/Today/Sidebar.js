import React, { useState } from "react";

import SideSearch from "../Search/SideSearch";
import Backdrop from "../Search/Backdrop";
import { useUnits } from "../../../hooks/useUnits";

function Sidebar({ icon, temp, main, date, submitRequest, cityName }) {
    const [sidebar, setSidebar] = useState(false);
    const { symb } = useUnits();

    const toggleSideBar = () => {
        setSidebar((prev) => !prev);
    };

    return (
        <div className="side-bar">
            <div className="btn-container">
                <button
                    type="button"
                    className="btn btn-search"
                    onClick={toggleSideBar}
                >
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
                    <span>{symb}</span>
                </h2>
                <p className="today-weather">{main}</p>
                <div className="date">
                    <p>Today</p>
                    <span>•</span>
                    <p>{date}</p>
                </div>
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    {cityName}
                </div>
            </div>
            {sidebar && (
                <>
                    <SideSearch
                        sidebar={sidebar}
                        toggleSideBar={toggleSideBar}
                        submitRequest={submitRequest}
                    />
                    <Backdrop toggleSideBar={toggleSideBar} />
                </>
            )}
        </div>
    );
}

export default Sidebar;
