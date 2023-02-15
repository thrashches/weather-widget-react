import React, { useState, useContext, useEffect } from "react";
import DayCard from "./DayCard";
import { getDaily } from "../../api/requests";
import { LocationContext } from "../../context/LocationContext";
import "./FiveDays.scss";
import { IForecast, IWeather } from "../../api/types";

/**
 * Компонент, отображающий погоду на 5 дней
 * @returns 
 */
export default function FiveDays() {
  const defaultForecast: IForecast = { list: [] };
  const [forecast, setForecast] = useState<IForecast>(defaultForecast);
  const { location } = useContext(LocationContext);
  useEffect(() => {
    if (location) {
      getDaily(location, 5)
        .then((response) => {
          setForecast(response);
        })
        .catch((err) => {
          console.log(err);
          setForecast(defaultForecast);
        });
    }
  }, [location]);
  const dayCards = forecast.list.map((weather: IWeather, index: number) => {
    return <DayCard {...weather} key={index} />
  });

  return (
    <div className="five_days-wrapper">
      {dayCards}
    </div>
  );
}
