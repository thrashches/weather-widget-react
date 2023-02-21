import React, { useContext } from "react";
import Flag from "react-svg-country-flags";
import { LocationContext } from "../../../context/LocationContext";
import { ILocation } from "../../../api/types";

/**
 * Компонент результата поиска
 * @param { import ("../../api/types").ILocation } props - объект местоположения из api
 */
export default function SearchItem(props: ILocation) {
  const { location, setCurrentLocation, results, setSearchResults } =
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
        <Flag country={props.country} className="flag" />{" "}
        <span className="text-secondary">
          {props.lat}, {props.lon}
        </span>
      </div>
      <div>
        <button className="select-btn" onClick={handleSelectClick}>
          Выбрать
        </button>
      </div>
    </li>
  );
}

