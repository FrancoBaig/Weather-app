import React from "react";

function Backdrop({ toggleSideBar }) {
    return <div className="backdrop" onClick={toggleSideBar}></div>;
}

export default Backdrop;
