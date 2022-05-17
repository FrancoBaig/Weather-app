const getTodayHightlights = (data) => {
    const current = data.current;
    const metersToMile = 1609;
    return [
        {
            title: "Wind status",
            wind_speed: current.wind_speed,
        },
        {
            title: "Humidity",
            humidity: current.humidity,
        },
        {
            title: "Visibility",
            visibility: Math.round(current.visibility / metersToMile),
        },
        {
            title: "Air Pressure",
            pressure: current.pressure,
        },
    ];
};

export default getTodayHightlights;
