import React, { useContext, useEffect, useState } from "react";
import { getCurrent, getDaily } from "../../../api/requests";
import { LocationContext } from "../../../context/LocationContext";
import {
  ICurrentWeather,
  IDailyForecast,
  IDailyWeather,
} from "../../../api/types";
import HourlyCard from "../HourlyCard/HourlyCard";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Loader from "../../info/Loader/Loader";
import ErrorMessage from "../../info/ErrorMessage/ErrorMessage";

/**
 * Компонент для отображения погоды на текущий день
 */
export default function Daily() {
  const defaultForecast: IDailyForecast = { list: [] };
  const defaultWeather = null;
  const [forecast, setForecast] = useState<IDailyForecast>(defaultForecast);
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather | null>(
    defaultWeather
  );
  const { location } = useContext(LocationContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (location) {
      getDaily(location, 6)
        .then(
          (response) => {
            setForecast(response);
            setLoading(false);
          },
          (err) => {
            setLoading(false);
            setError(true);
          }
        )
        .catch();
      getCurrent(location).then(
        (response) => {
          setCurrentWeather(response);
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          setError(true);
        }
      );
    }
  }, [location]);

  const hourlyCards = forecast.list.map(
    (weather: IDailyWeather, index: number) => {
      return <HourlyCard {...weather} key={index} />;
    }
  );

  return (
    <>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {location && currentWeather && hourlyCards ? (
        <CurrentWeather
          {...{
            currentWeather: currentWeather,
            hourlyCards: hourlyCards,
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
