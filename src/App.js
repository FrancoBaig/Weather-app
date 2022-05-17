import "./styles/App.css";
import React, { useState, useLayoutEffect } from "react";
import Today from "./components/Today";
import Board from "./components/Board/Board";
import useWeather from "./hooks/useWeather";
import Loader from "./components/Loader";

// re hacer muchas cosas
// [] cuando loading este prendido poner un spinner
// [] cuando error este activo hacer un display
// si tenemos weather mostrar, en caso contrario solo pedir una ubicación
// ver styled components

function App() {
    const { error, loading, weather, submitRequest } = useWeather();

    useLayoutEffect(() => {
        onSubmit("Córdoba");
        // acá agregar que inicie en córdoba, pero que después guarde cuál fue la última ubicación vista, solo tengo que almacenar nombre ab
        console.log(weather);
    }, []);

    const onSubmit = (value) => {
        submitRequest(value);
        console.log(weather);
    };

    return (
        <div className="App">
            {loading && <Loader />}
            {!loading && weather && (
                <>
                    <Today {...weather.currentDay} />
                    <Board weather={weather} />
                </>
            )}
        </div>
    );
}

export default App;
