import "./styles/App.css";
import React from "react";
import Today from "./components/Today";
import Board from "./components/Board/Board";

function App() {
    return (
        <div className="App">
            <Today />
            <Board />
        </div>
    );
}

export default App;
