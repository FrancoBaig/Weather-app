import React from "react";

function Form({ placeholder, btnText }) {
    return (
        <form className="search-form">
            <label htmlFor="search" className="search-icon">
                <i className="fas fa-search"></i>
            </label>
            <input
                type="text"
                id="search"
                placeholder={placeholder}
                className="search-input"
            />
            <button type="button" className="search-btn">
                {btnText}
            </button>
        </form>
    );
}

export default Form;
