import React, { useContext, useEffect, useState } from "react";
import { getDaily } from "../../api/requests";
import { LocationContext } from "../../context/LocationContext";

/**
 * Компонент для отображения погоды на текущий день
 */
export default function Daily() {
  const [weather, setWeather] = useState();
  const { location } = useContext(LocationContext);
  useEffect(() => {
    if (location) {
      getDaily(location, 1)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);

  return (
    <div className="daily-wrapper">
      <h4>12 февраля, Воскресенье</h4>
      <div className="daily__temp">12&deg;</div>
    </div>
  );
}
