import React from "react";


/**Переключатель отображения погоды на день/5 дней */
export default function DailySwitch() {
  return (
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
  );
}