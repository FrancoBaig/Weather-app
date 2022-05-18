import React from "react";
import { Line } from "rc-progress";

function ProgressBar({ percent, color = "#FFEC65" }) {
    return (
        <div className="progress-bar">
            <div className="percent-container">
                <p className="percent-item">0</p>
                <p className="percent-item">50</p>
                <p className="percent-item">100</p>
            </div>
            <Line
                percent={percent}
                strokeWidth={4}
                strokeColor={color}
                trailColor="#E7E7EB"
                trailWidth={4}
            />
            <div className="percent-symbol">
                <span>%</span>
            </div>
        </div>
    );
}

export default ProgressBar;
