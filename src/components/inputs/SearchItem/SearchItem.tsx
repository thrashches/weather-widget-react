import React, { useContext } from "react";
import Flag from "react-svg-country-flags";
import { LocationContext } from "../../../context/LocationContext";
import { ILocation } from "../../../api/types";
import style from "./SearchItem.module.scss";

/**
 * Компонент результата поиска
 * @param { import ("../../api/types").ILocation } props - объект местоположения из api
 */
export default function SearchItem(props: ILocation) {
  const { setCurrentLocation, setSearchResults } =
    useContext(LocationContext);

  const handleSelectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Установка выбранного местоположения в контекст
    setCurrentLocation(props);
    setSearchResults([]);
  };

  return (
    <li>
      <div>
        {props.name}, {props.state}{" "}
        <Flag country={props.country} className={style.Flag} />{" "}
        <span className="text-secondary">
          {props.lat}, {props.lon}
        </span>
      </div>
      <div>
        <button className={style.SelectBtn} onClick={handleSelectClick}>
          Выбрать
        </button>
      </div>
    </li>
  );
}

