import React from "react";
import { IDayInWeek } from "../../../api/types";
import style from "./DayCard.module.scss";

/**
 * Компонент для отображения погоды в конкретный день
 * @param { import ("../../../api/types").IWeather } weather - Погода на день
 */
const DayCard = (weather: IDayInWeek) => {
  const date = new Date(weather.dt * 1000);
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className={style.dayCard}>
      <div className={style.dayCard__day}>
        {date.getDate()} {date.toLocaleDateString('ru-Ru', { weekday: "long"})}
      </div>
      <div className={style.dayCard__temp}>
        {Math.round(weather.temp.eve)}{"°"}
      </div>
      <img src={iconUrl} width="50px" height="50px" alt="" />
      <div className={style.dayCard__type}>
        {weather.weather[0].description}
      </div>
    </div>
  );
};

export default DayCard;
