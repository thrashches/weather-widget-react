import React, { useState, useContext, useEffect } from "react";
import DayCard from "../DayCard/DayCard";
import { getFiveDays } from "../../../api/requests";
import { LocationContext } from "../../../context/LocationContext";
import style from "./FiveDays.module.scss";
import { IFiveDaysForecast, IDayInWeek } from "../../../api/types";
import Loader from "../../info/Loader/Loader";

/**
 * Компонент, отображающий погоду на 5 дней
 */
export default function FiveDays() {
  const defaultForecast: IFiveDaysForecast = { list: [] };
  const [forecast, setForecast] = useState<IFiveDaysForecast>(defaultForecast);
  const { location } = useContext(LocationContext);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (location) {
      setLoading(true);
      getFiveDays(location)
        .then((response) => {
          setForecast(response);
          console.log(response);
          setLoading(false);
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
    <>{loading && <Loader/>}
      {location && forecast ? (
        <div className={style.fiveDaysWrapper}>{dayCards}</div>
      ) : (
        <></>
      )}
    </>
  );
}
