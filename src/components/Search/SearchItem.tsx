import React, { useContext } from "react";
import Flag from "react-svg-country-flags";
import { LocationContext } from "../../context/LocationContext";

interface ILocation {
  name: string;
  state: string;
  country: string;
  local_names: {
    ru?: string;
  };
  lat: number;
  lon: number;
}

// Компонент результата поиска

function SearchItem(props: ILocation) {
  const { location, setCurrentLocation } = useContext(LocationContext);

  const handleSelectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Установка выбранного местоположения в контекст
    setCurrentLocation(props);
  }

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
        <button className="select-btn" onClick={handleSelectClick}>Выбрать</button>
      </div>
    </li>
  );
}

export { type ILocation, SearchItem };
