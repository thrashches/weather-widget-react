import React from "react";
import { ReactComponent as Spinner } from "./Spinner.svg";
import style from "./Loader.module.scss";

const Loader = () => (
  <div className={style.Loader}>
    <div>
      <Spinner className={style.Spinner} />
    </div>
    <h4>Загрузка</h4>
  </div>
);

export default Loader;
