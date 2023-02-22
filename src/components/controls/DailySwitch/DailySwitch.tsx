import React, { useContext } from "react";
import { DailyContext, DaysType } from "../../../context/DailyContext";
import style from "./DailySwitch.module.scss";

/**Переключатель отображения погоды на день/5 дней */
export default function DailySwitch() {
  const { days, setDays } = useContext(DailyContext);
  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as DaysType;
    setDays(value);
  };

  return (
    <div className={style.TabSelect}>
      <div className={style.TabSelect__item}>
        <input
          type="radio"
          id="today"
          value={"today"}
          name="dailySwitch"
          checked={days === "today"}
          onChange={handleSwitch}
        />
        <label htmlFor="today">Сегодня</label>
      </div>
      <div className={style.TabSelect__item}>
        <input
          type="radio"
          id="five"
          value={"five"}
          name="dailySwitch"
          checked={days === "five"}
          onChange={handleSwitch}
        />
        <label htmlFor="five">На 5 дней</label>
      </div>
    </div>
  );
}
