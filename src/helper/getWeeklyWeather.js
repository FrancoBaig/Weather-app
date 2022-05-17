import moment from "moment";
import images from "../Assets/images.json";
// [] hacer todo esto un for

const getWeeklyWeather = (data) => {
    const daily = data.daily;

    return [
        {
            date: "Tomorrow",
            icon: images[daily[0].weather[0].icon],
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
        {
            date: moment(daily[1].dt * 1000).format("ddd, D MMM"),
            icon: images[daily[1].weather[0].icon],
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
        {
            date: moment(daily[2].dt * 1000).format("ddd, D MMM"),
            icon: images[daily[2].weather[0].icon],
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
        {
            date: moment(daily[3].dt * 1000).format("ddd, D MMM"),
            icon: images[daily[3].weather[0].icon],
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
        {
            date: moment(daily[4].dt * 1000).format("ddd, D MMM"),
            icon: images[daily[4].weather[0].icon],
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
    ];
};

export default getWeeklyWeather;
