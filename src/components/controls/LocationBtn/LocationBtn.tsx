import React, { useContext } from "react";
import { getCityByPosition } from "../../../api/requests";
import { LocationContext } from "../../../context/LocationContext";
import { ReactComponent as GeoIcon } from "./geo.svg";
import style from "./LocationBtn.module.scss";
import { ILocation } from "../../../api/types";

/** Кнопка определения текущего местоположения пользователя */
export default function LocationBtn() {
  const { location, setCurrentLocation } = useContext(LocationContext);

  const handleClick = () => {
    if (navigator.geolocation) {
      const success = (position: GeolocationPosition) => {
        getCityByPosition(position).then((response: ILocation[]) => {
          if (response.length) {
            setCurrentLocation(response[0]);
          }
        });
      };
      navigator.geolocation.getCurrentPosition(success);
    }
  };

  return (
    <button className={style.locationBtn}>
      <GeoIcon height={20} width={20} onClick={handleClick} />
    </button>
  );
}
