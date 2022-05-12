import React from "react";
import UnitButton from "./UnitButton";

function ChangeTemperatureUnit() {
    return (
        <div className="units-container">
            <UnitButton name={"C"} />
            <UnitButton name={"F"} />
        </div>
    );
}

export default ChangeTemperatureUnit;
