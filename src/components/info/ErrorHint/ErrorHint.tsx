import React from "react";
import style from "./ErrorHint.module.scss"

interface IErrorMessage {
  message: string;
}

/**
 * Всплывающая ошибка
 * @param {IErrorMessage} props - message: текст сообщения.
 */
const ErrorHint = (props: IErrorMessage) => (
  <div className={style.ErrorHint}>
    <p>{props.message}</p>
  </div>
);

export default ErrorHint;
