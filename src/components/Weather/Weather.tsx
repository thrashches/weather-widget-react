import React, { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import Daily from "./Daily";
import FiveDays from "./FiveDays";
import "./Weather.scss";

/**
 * Компонент для отображения погоды
 */
export default function Weather() {
  const { location } = useContext(LocationContext);

  return (
    <div className="weather">
      <h1>{location?.name}</h1>
      <div className="tab-select">
        <button className="tab-select__item">Сегодня</button>
        <button className="tab-select__item tab-select__item__active">На 5 дней</button>
      </div>
      <FiveDays />
      <Daily/>
    </div>
  );
}
