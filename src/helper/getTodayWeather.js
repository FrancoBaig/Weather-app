import moment from "moment";

const getTodayWeather = (data) => {
    const current = data.current;
    const weather = data.current.weather[0];

    return {
        icon: `http://openweathermap.org/img/wn/${weather.icon}@2x.png`,
        temp: Math.round(current.temp),
        main: weather.main,
        date: moment(current.dt).format("ddd, D MMM"),
    };
};

export default getTodayWeather;
