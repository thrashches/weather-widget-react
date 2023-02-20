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
      <div className="tab-select">
        <div className="tab-select__item">
          <input type="radio" id="today" name="dailySwitch" />
          <label htmlFor="today">Сегодня</label>
        </div>
        <div className="tab-select__item">
          <input type="radio" id="fiveDays" name="dailySwitch" />
          <label htmlFor="fiveDays">На 5 дней</label>
        </div>
      </div>
      <FiveDays />
      <Daily />
    </div>
  );
}
