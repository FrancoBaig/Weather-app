import React, { useState } from "react";

function Form({ placeholder, btnText, submitRequest }) {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        submitRequest(input);
        setInput("");
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="search" className="search-icon">
                <i className="fas fa-search"></i>
            </label>
            <input
                value={input}
                type="text"
                id="search"
                placeholder={placeholder}
                className="search-input"
                onChange={handleInput}
            />
            <button type="button" className="search-btn" onClick={handleSubmit}>
                {btnText}
            </button>
        </form>
    );
}

export default Form;
