import React, { useContext } from "react";
import { Flag } from "react-svg-country-flags";
import { ILocation } from "../../../api/types";
import style from "./SelectedLocation.module.scss"
import { ReactComponent as Close } from "./Close.svg";
import { LocationContext } from "../../../context/LocationContext";

/**
 * Компонент выбранного местоположения
 * @param { import ("../../api/types").ILocation } props - объект местоположения из api
 */
export default function SelectedLocation(props: ILocation) {
  const { location, setCurrentLocation } = useContext(LocationContext);

  const handleCloseClick = () => {
    setCurrentLocation(null);
  };

  return (
    <div className={style.selectedLocation}>
      <p>
        {props.name}, {props.state} <Flag country={props.country} />{" "}
        <span className="text-secondary">
          {props.lat}, {props.lon}
        </span>
      </p>
      <button className={style.closeBtn}>
        <Close className={style.closeBtn__icon} onClick={handleCloseClick} />
      </button>
    </div>
  );
}
