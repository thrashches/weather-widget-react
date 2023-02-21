import React, { useState, useContext, useEffect } from "react";
import DayCard from "../DayCard/DayCard";
import { getFiveDays } from "../../../api/requests";
import { LocationContext } from "../../../context/LocationContext";
import "./FiveDays.scss";
import { IFiveDaysForecast, IDayInWeek } from "../../../api/types";

/**
 * Компонент, отображающий погоду на 5 дней
 */
export default function FiveDays() {
  const defaultForecast: IFiveDaysForecast = { list: [] };
  const [forecast, setForecast] = useState<IFiveDaysForecast>(defaultForecast);
  const { location } = useContext(LocationContext);
  useEffect(() => {
    if (location) {
      getFiveDays(location)
        .then((response) => {
          setForecast(response);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          setForecast(defaultForecast);
        });
    }
  }, [location]);
  const dayCards = forecast.list.map((weather: IDayInWeek, index: number) => {
    return <DayCard {...weather} key={index} />;
  });

  return (
    <>
      {location && forecast ? (
        <div className="five-days-wrapper">{dayCards}</div>
      ) : (
        <></>
      )}
    </>
  );
}
