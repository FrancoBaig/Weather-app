import React from "react";
import UnitButton from "./UnitButton";

function ChangeTemperatureUnit() {
    return (
        <div className="units-container">
            <UnitButton name={"C"} value={"metric"} />
            <UnitButton name={"F"} value={"imperial"} />
        </div>
    );
}

export default ChangeTemperatureUnit;
