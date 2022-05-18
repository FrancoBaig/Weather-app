import React from "react";
import Form from "./Form";
import LocationsList from "./LocationsList";

import useWeather from "../../../hooks/useWeather";

function SideSearch({ sidebar, toggleSideBar }) {
    const { submitRequest } = useWeather();

    return (
        <div
            className={
                sidebar
                    ? "sidebar-search sidebar-search-open"
                    : "sidebar-search"
            }
        >
            <>
                <div className="close-btn">
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
