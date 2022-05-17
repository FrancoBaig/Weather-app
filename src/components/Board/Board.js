import React from "react";
import ChangeTemperatureUnit from "./ChangeTemperatureUnit";
import WeeklyReport from "./WeeklyReport";
import Hightlights from "./Hightlights";
import Footer from "./Footer";

// Quizás se puede quitar el "board-container y pasar todo a board, si simpl
// mente hago que el fondo tenga ese color html "

function Board({ weather }) {
    console.log(weather.weekly);

    return (
        <section className="board">
            <div className="board-container">
                <ChangeTemperatureUnit />
                <WeeklyReport {...weather.weekly} />
                <Hightlights {...weather.currentHightlights} />
                <Footer />
            </div>
        </section>
    );
}

export default Board;
