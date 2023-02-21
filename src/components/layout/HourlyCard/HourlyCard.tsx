import React from "react";
import { IDailyWeather } from "../../../api/types";
import "./HourlyCard.scss";

/** Погода на 3 часа для дневного прогноза
 * @param { import ("../../../api/types").IDailyWeather } weather - информация об отображаемой погоде
 */
const HourlyCard = (weather: IDailyWeather) => {
  const time = new Date(weather.dt * 1000);
  const iconSrc = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div className="hourly__card">
      <div className="hourly__time">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
      <div className="hourly__temp">{Math.round(weather.main.temp)}&deg;</div>
      <img src={iconSrc} width="50px" height="50px" alt="" />
      <div className="hourly__wind">{Math.round(weather.wind.speed)} м/с</div>
    </div>
  );
};

export default HourlyCard;
