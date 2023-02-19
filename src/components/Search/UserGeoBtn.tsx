import React from "react";
import { ReactComponent as GeoIcon } from "./geo.svg";
import "./UserGeoBtn.scss"

/** Кнопка определения текущего местоположения пользователя */
const UserGeoBtn = () => <button className="user-geo-btn"><GeoIcon height={20} width={20}/></button>;

export default UserGeoBtn;