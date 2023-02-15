import React from "react";
import { IWeather } from "../../api/types";
import "./DayCard.scss";


/**
 * Компонент для отображения погоды в конкретный день
 * @param { import ("../../api/types").IWeather } weather - Погода на день 
 * @returns 
 */
const DayCard = (weather: IWeather) => {
  const date = new Date(weather.dt_txt);
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="day-card">
      <div className="day-card__day text-secondary">
        {date.toLocaleDateString()}
      </div>
      <div className="day-card__temp text-secondary">
        {weather.main.temp}&deg;
      </div>
      <img src={iconUrl} width="50px" height="50px" alt="" />
      <div className="day-card__type text-secondary">{weather.weather[0].description}</div>
    </div>
  );
}

export default DayCard;
