import moment from "moment";
// [] hacer todo esto un for

const getWeeklyWeather = (data) => {
    const daily = data.daily;

    return [
        {
            date: "Tomorrow",
            icon: `http://openweathermap.org/img/wn/${daily[0].weather[0].icon}@2x.png`,
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
        {
            date: moment(daily[1].dt).format("ddd, D MMM"),
            icon: `http://openweathermap.org/img/wn/${daily[0].weather[0].icon}@2x.png`,
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
        {
            date: moment(daily[2].dt).format("ddd, D MMM"),
            icon: `http://openweathermap.org/img/wn/${daily[0].weather[0].icon}@2x.png`,
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
        {
            date: moment(daily[3].dt).format("ddd, D MMM"),
            icon: `http://openweathermap.org/img/wn/${daily[0].weather[0].icon}@2x.png`,
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
        {
            date: moment(daily[4].dt).format("ddd, D MMM"),
            icon: `http://openweathermap.org/img/wn/${daily[0].weather[0].icon}@2x.png`,
            temp_max: Math.round(daily[0].temp.max),
            temp_min: Math.round(daily[0].temp.min),
        },
    ];
};

export default getWeeklyWeather;
