import React from "react";
import Flag from "react-svg-country-flags";
import { useLocation } from "../../hooks/useLocation";

interface LocationInterface {
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

function SearchItem(props: LocationInterface) {
  const { location, setCurrentLocation } = useLocation();
  const handleSelectClick = () => {
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

export { type LocationInterface, SearchItem };
