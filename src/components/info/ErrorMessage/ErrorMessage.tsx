import React from "react";
import style from "./ErrorMessage.module.scss";

/**
 * Сообщение об ошибке загрузки погоды
 */
const ErrorMessage = () => (
  <div className={style.NoLocation}>
    <h2>
      Что-то пошло не так. Возможно наши внешние сервисы недоступны. Повторите
      попытку позже.
    </h2>
  </div>
);

export default ErrorMessage;
