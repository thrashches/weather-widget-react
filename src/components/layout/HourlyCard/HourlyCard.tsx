import React from "react";
import { IDailyWeather } from "../../../api/types";
import style from "./HourlyCard.module.scss";

/** Погода на 3 часа для дневного прогноза
 * @param { import ("../../../api/types").IDailyWeather } weather - информация об отображаемой погоде
 */
const HourlyCard = (weather: IDailyWeather) => {
  const time = new Date(weather.dt * 1000);
  const iconSrc = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div className={style.HourlyCard}>
      <div className={style.HourlyTime}>
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
      <div className={style.HourlyTemp}>{Math.round(weather.main.temp)}&deg;</div>
      <img src={iconSrc} width="50px" height="50px" alt="" />
      <div className={style.HourlyWind}>{Math.round(weather.wind.speed)} м/с</div>
    </div>
  );
};

export default HourlyCard;
