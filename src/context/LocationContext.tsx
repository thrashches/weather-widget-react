import React, { createContext, FC, useState } from "react";
import { ILocation } from "../components/Search/SearchItem";

// Контекст для хранения и передачи выбранного/текущего местоположения

type LocationContextType = {
  location: ILocation | null;
  setCurrentLocation: (location: ILocation | null) => void;
};

interface ILocationContext {
  location: ILocation | null;
  setCurrentLocation: (currentLocation: ILocation | null) => void;
}

const defaultState = {
  location: null,
  setCurrentLocation: () => {},
};

const LocationContext = createContext<ILocationContext>(defaultState);

interface IChildren {
  children: React.ReactNode;
}

const LocationProvider: FC<IChildren> = ({ children }) => {
  const [location, setLocation] = useState<ILocation | null>(
    defaultState.location
  );

  const setCurrentLocation = (currentLocation: ILocation | null) => {
    setLocation(currentLocation);
  };
  return (
    <LocationContext.Provider
      value={{
        location,
        setCurrentLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, type LocationContextType, LocationProvider };
