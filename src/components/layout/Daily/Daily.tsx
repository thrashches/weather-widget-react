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
  useEffect(() => {
    setLoading(true);
    if (location) {
      getDaily(location, 6)
        .then((response) => {
          setForecast(response);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      getCurrent(location)
        .then((response) => {
          setCurrentWeather(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);

  // const currentDate = new Date(currentWeather.dt * 1000);
  const hourlyCards = forecast.list.map(
    (weather: IDailyWeather, index: number) => {
      return <HourlyCard {...weather} key={index} />;
    }
  );

  return (
    <>
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
