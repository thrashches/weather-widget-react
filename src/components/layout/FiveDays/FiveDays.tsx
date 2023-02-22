import React, { useState, useContext, useEffect } from "react";
import DayCard from "../DayCard/DayCard";
import { getFiveDays } from "../../../api/requests";
import { LocationContext } from "../../../context/LocationContext";
import style from "./FiveDays.module.scss";
import { IFiveDaysForecast, IDayInWeek } from "../../../api/types";
import Loader from "../../info/Loader/Loader";
import ErrorMessage from "../../info/ErrorMessage/ErrorMessage";

/**
 * Компонент, отображающий погоду на 5 дней
 */
export default function FiveDays() {
  const defaultForecast: IFiveDaysForecast = { list: [] };
  const [forecast, setForecast] = useState<IFiveDaysForecast>(defaultForecast);
  const { location } = useContext(LocationContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    if (location) {
      setLoading(true);
      getFiveDays(location).then(
        (response) => {
          setForecast(response);
          setLoading(false);
        },
        (err) => {
          setError(true);
          setLoading(false);
          setForecast(defaultForecast);
        }
      );
    }
  }, [location]);
  const dayCards = forecast.list.map((weather: IDayInWeek, index: number) => {
    return <DayCard {...weather} key={index} />;
  });

  return (
    <>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {location && forecast ? (
        <div className={style.FiveDaysWrapper}>{dayCards}</div>
      ) : (
        <></>
      )}
    </>
  );
}
