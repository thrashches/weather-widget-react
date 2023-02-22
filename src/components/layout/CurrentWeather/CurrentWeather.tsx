import React from "react";
import { ICurrentWeather } from "../../../api/types";
import style from "./CurrentWeather.module.scss";
import { ReactComponent as WindDirectionIcon } from "./WindDirectionIcon.svg";
import { ReactComponent as WindIcon } from "./WindIcon.svg";
import { ReactComponent as PressureIcon } from "./PressureIcon.svg";
import { ReactComponent as HumidityIcon } from "./HumidityIcon.svg";

type DailyProps = {
  currentWeather: ICurrentWeather;
  hourlyCards: JSX.Element[];
};

const CurrentWeather = (dailyProps: DailyProps) => {
  const currentDate = new Date(dailyProps.currentWeather.dt * 1000);
  const iconUrl = `https://openweathermap.org/img/wn/${dailyProps.currentWeather.weather[0].icon}@4x.png`;

  return (
    <div className={style.dailyWrapper}>
      <div className={style.dailyHeader}>
        <h4>
          {currentDate.toLocaleDateString("ru-Ru", {
            day: "numeric",
            month: "long",
          })}
        </h4>
      </div>
      <div className={style.summaryWrapper}>
        <div className="daily__main-wrapper">
          <div className={style.dailyCondition}>
            <div className={style.dailyCondition__data}>
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
            <div className={style.dailyCondition__data}>
              <p>
                <WindIcon width={20} height={20} />{" "}
                {Math.round(dailyProps.currentWeather.wind.speed)} м/с
                <WindDirectionIcon
                  className={style.windDirection}
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
        <div className={style.dailySecondaryWrapper}>
          <div className={style.dailyTemp}>
            {Math.round(dailyProps.currentWeather.main.temp)}&deg;
          </div>
          <div>
            Мин: {Math.round(dailyProps.currentWeather.main.temp_min)}&deg;
          </div>
          <div>
            Макс: {Math.round(dailyProps.currentWeather.main.temp_max)}&deg;
          </div>
          <div>
            Ощущается как:{" "}
            {Math.round(dailyProps.currentWeather.main.feels_like)}&deg;
          </div>
        </div>
      </div>
      <div className={style.hourlyWrapper}>{dailyProps.hourlyCards}</div>
    </div>
  );
};

export default CurrentWeather;
