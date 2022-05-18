import React, { useState, useEffect } from "react";
import axios from "axios";
import getTodayWeather from "../helper/getTodayWeather";
import getTodayHightlights from "../helper/getTodayHightlights";
import getWeeklyWeather from "../helper/getWeeklyWeather";

function useWeather() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [cityName, setCityName] = useState("");

    const getCoord = async (location) => {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c910e33b5a28d3b7318844d8de3f9f17&units=metric`
        );

        if (!data || data.lenght === 0) {
            setError("There is no such location");
            setLoading(false);
            return;
        }
        setCityName(data.name);
        return data.coord;
    };

    const getWeather = async (coord) => {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=c910e33b5a28d3b7318844d8de3f9f17&units=metric&exclude=minutely,hourly,alert`
        );

        if (!data || data.lenght === 0) {
            setError("Something went wrong");
            setLoading(false);
            return;
        }

        return data;
    };

    const weatherData = (data) => {
        const currentDay = getTodayWeather(data);
        const currentHightlights = getTodayHightlights(data);
        const weekly = getWeeklyWeather(data);

        setWeather({ currentDay, currentHightlights, weekly });
        setLoading(false);
    };

    const submitRequest = async (location) => {
        setLoading(true);
        setError(false);

        // get coords
        const coords = await getCoord(location);
        if (!coords?.lat && !coords?.lon) return;

        // get weather data
        const data = await getWeather(coords);
        if (!data) return;

        weatherData(data);
    };

    return { cityName, error, loading, weather, submitRequest };
}

export default useWeather;
