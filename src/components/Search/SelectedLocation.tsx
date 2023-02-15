import React, { useContext } from "react";
import { Flag } from "react-svg-country-flags";
import { ILocation } from "./SearchItem";
import "./Search.scss";
import { ReactComponent as Close } from "./close.svg";
import { LocationContext } from "../../context/LocationContext";

/**
 * Компонент выбранного местоположения
 * @param { import ("../../api/types").ILocation } props - объект местоположения из api
 * @returns 
 */
export default function SelectedLocation(props: ILocation) {
  const { location, setCurrentLocation } = useContext(LocationContext);

  const handleCloseClick = () => {
    setCurrentLocation(null);
  };

  return (
    <div className="selected-location">
      <p>
        {props.name}, {props.state} <Flag country={props.country} />{" "}
        <span className="text-secondary">
          {props.lat}, {props.lon}
        </span>
      </p>
      <button className="close-btn">
        <Close className="close-btn__icon" onClick={handleCloseClick} />
      </button>
    </div>
  );
}
