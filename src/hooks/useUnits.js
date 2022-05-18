import React, { useState, createContext, useContext } from "react";

const UnitsContext = createContext();
export const useUnits = () => useContext(UnitsContext);

export default function UnitsProvider({ children }) {
    const [unit, setUnit] = useState("metric");
    const [symb, setSymb] = useState("°C");

    const changeUnit = (value) => {
        setUnit(value);
        getSymbol(value);
    };

    const getSymbol = (value) => {
        if (value === "metric") {
            setSymb("°C");
        } else if (value === "imperial") {
            setSymb("°F");
        }
    };

    return (
        <UnitsContext.Provider value={{ unit, changeUnit, symb }}>
            {children}
        </UnitsContext.Provider>
    );
}
