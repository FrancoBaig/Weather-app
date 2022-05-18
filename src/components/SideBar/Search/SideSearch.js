import React, { useState } from "react";
import Form from "./Form";
import LocationsList from "./LocationsList";

import useWeather from "../../../hooks/useWeather";

function SideSearch({ sidebar, toggleSideBar, submitRequest }) {
    return (
        <div
            className={
                sidebar
                    ? "sidebar-search sidebar-search-open"
                    : "sidebar-search"
            }
        >
            <>
                <div className="close-btn" onClick={toggleSideBar}>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <Form
                    placeholder="search location"
                    btnText="Search"
                    submitRequest={submitRequest}
                />
                ;
                <LocationsList submitRequest={submitRequest} />
            </>
        </div>
    );
}

export default SideSearch;
