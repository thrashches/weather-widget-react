import React, { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";


export default function Weather() {
  const { location } = useContext(LocationContext);
  
  return (
    <div>
      {location?.name}
    </div>
  )
}