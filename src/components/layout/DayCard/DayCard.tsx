import React from "react";
import { IDayInWeek } from "../../../api/types";
import "./DayCard.scss";

/**
 * Компонент для отображения погоды в конкретный день
 * @param { import ("../../../api/types").IWeather } weather - Погода на день
 */
const DayCard = (weather: IDayInWeek) => {
  const date = new Date(weather.dt * 1000);
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="day-card">
      <div className="day-card__day">
        {date.getDate()} {date.toLocaleDateString('ru-Ru', { weekday: "long"})}
      </div>
      <div className="day-card__temp">
        {Math.round(weather.temp.eve)}{"°"}
      </div>
      <img src={iconUrl} width="50px" height="50px" alt="" />
      <div className="day-card__type">
        {weather.weather[0].description}
      </div>
    </div>
  );
};

export default DayCard;
