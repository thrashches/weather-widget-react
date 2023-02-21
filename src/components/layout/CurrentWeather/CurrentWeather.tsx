import React from "react";
import { ICurrentWeather } from "../../../api/types";
import "./CurrentWeather.scss";
import { ReactComponent as WindDirectionIcon } from "./wind-direction.svg";
import { ReactComponent as WindIcon } from "./wind.svg";
import { ReactComponent as PressureIcon } from "./pressure.svg";
import { ReactComponent as HumidityIcon } from "./humidity.svg";

type DailyProps = {
  currentWeather: ICurrentWeather;
  hourlyCards: JSX.Element[];
};

const CurrentWeather = (dailyProps: DailyProps) => {
  const currentDate = new Date(dailyProps.currentWeather.dt * 1000);
  const iconUrl = `http://openweathermap.org/img/wn/${dailyProps.currentWeather.weather[0].icon}@4x.png`;

  return (
    <div className="daily-wrapper">
      <div className="daily-header">
        <h4>
          {currentDate.toLocaleDateString("ru-Ru", {
            day: "numeric",
            month: "long",
          })}
        </h4>
      </div>
      <div className="summary-wrapper">
        <div className="daily__main-wrapper">
          <div className="daily__condition">
            <div className="daily__condition__data">
              <img
                src={iconUrl}
                width="100px"
                height="100px"
                alt={dailyProps.currentWeather.weather[0].description}
              />
              <p className="text-center">
                {dailyProps.currentWeather.weather[0].description}
              </p>
            </div>
            <div className="daily__condition__data">
              <p>
                <WindIcon width={20} height={20} />{" "}
                {Math.round(dailyProps.currentWeather.wind.speed)} м/с
                <WindDirectionIcon
                  className="wind-direction"
                  style={{
                    transform: `rotate(${dailyProps.currentWeather.wind.deg}deg)`,
                  }}
                />
              </p>
              <p>
                <PressureIcon width={20} height={20} />{" "}
                {Math.round(dailyProps.currentWeather.main.pressure / 1.333)} мм
                р.с.
              </p>
              <p>
                <HumidityIcon width={20} height={20} />{" "}
                {dailyProps.currentWeather.main.humidity}%
              </p>
            </div>
          </div>
        </div>
        <div className="daily__secondary-wrapper">
          <div className="daily__temp">
            {Math.round(dailyProps.currentWeather.main.temp)}&deg;
          </div>
          <div className="daily__temp__secondary">
            Мин: {Math.round(dailyProps.currentWeather.main.temp_min)}&deg;
          </div>
          <div className="daily__temp__secondary">
            Макс: {Math.round(dailyProps.currentWeather.main.temp_max)}&deg;
          </div>
          <div className="daily__temp__secondary">
            Ощущается как:{" "}
            {Math.round(dailyProps.currentWeather.main.feels_like)}&deg;
          </div>
        </div>
      </div>
      <div className="hourly-wrapper">{dailyProps.hourlyCards}</div>
    </div>
  );
};

export default CurrentWeather;
