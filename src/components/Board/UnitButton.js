import React from "react";

function UnitButton({ name }) {
    return (
        <button type="button" className="btn-unit">
            °{name}
        </button>
    )
}

export default UnitButton;
