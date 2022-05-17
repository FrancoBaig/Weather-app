import moment from "moment";
import images from "../Assets/images.json";

const getTodayWeather = (data) => {
    const current = data.current;
    const weather = data.current.weather[0];
    const icon = weather.icon;

    return {
        // icon: `http://openweathermap.org/img/wn/${weather.icon}@2x.png`,
        icon: images[icon],
        temp: Math.round(current.temp),
        main: weather.main,
        date: moment(current.dt * 1000).format("ddd, D MMM"),
    };
};

export default getTodayWeather;
