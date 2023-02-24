import React, { useContext, useState } from "react";
import { getCityByPosition } from "../../../api/requests";
import { LocationContext } from "../../../context/LocationContext";
import { ReactComponent as GeoIcon } from "./GeoIcon.svg";
import style from "./LocationBtn.module.scss";
import { ILocation } from "../../../api/types";
import ErrorHint from "../../info/ErrorHint/ErrorHint";

/** Кнопка определения текущего местоположения пользователя */
export default function LocationBtn() {
  const { setCurrentLocation } = useContext(LocationContext);
  const [error, setError] = useState<boolean>(false);

  const handleClick = () => {
    if (navigator.geolocation) {
      const success = (position: GeolocationPosition) => {
        getCityByPosition(position).then((response: ILocation[]) => {
          if (response.length) {
            setCurrentLocation(response[0]);
          }
        });
      };
      navigator.geolocation.getCurrentPosition(success, () => {
        setError(true);
        setTimeout(() => setError(false), 5000);
      });
    }
  };

  return (
    <div className={style.LocationBtn__wrapper}>
      <button className={style.LocationBtn} onClick={handleClick}>
        <GeoIcon height={20} width={20} />
      </button>
      {error && (
        <ErrorHint message="Активируйте службы геолокации на вашем устройстве!" />
      )}
    </div>
  );
}
