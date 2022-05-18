import React from "react";
import { useUnits } from "../../hooks/useUnits";

function UnitButton({ name, value }) {
    const { unit, changeUnit } = useUnits();

    const handleChange = () => {
        changeUnit(value);
        // console.log(unit);
    };

    return (
        <button
            type="button"
            className={`btn-unit ${unit === value ? "unit-selected " : ""} `}
            onClick={handleChange}
        >
            °{name}
        </button>
    );
}

export default UnitButton;
