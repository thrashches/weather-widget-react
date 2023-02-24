import React, { useContext } from "react";
import { LocationContext } from "../../../context/LocationContext";
import Daily from "../Daily/Daily";
import FiveDays from "../FiveDays/FiveDays";
import style from "./Weather.module.scss";
import { DailyContext } from "../../../context/DailyContext";
import DailySwitch from "../../controls/DailySwitch/DailySwitch";


/**
 * Компонент для отображения погоды
 */
export default function Weather() {
  const { days } = useContext(DailyContext);
  const { location } = useContext(LocationContext);

  return (
    <>
      {location ? (
        <div className={style.Weather}>
          <DailySwitch />
          {days === "five" && <FiveDays />}
          {days === "today" && <Daily />}
        </div>
      ) : (
        <>
        </>
      )}
    </>
  );
}
