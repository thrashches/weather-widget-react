import React, { createContext, FC, useState } from "react";
import { ILocation } from "../components/Search/SearchItem";

// Контекст для хранения и передачи выбранного/текущего местоположения

type LocationContextType = {
  location: ILocation | null;
  setCurrentLocation: (location: ILocation | null) => void;
  clearSearchResults: () => void;
};

interface ILocationContext {
  location: ILocation | null;
  setCurrentLocation: (currentLocation: ILocation | null) => void;
  clearSearchResults: () => void;
}

const defaultState = {
  location: null,
  setCurrentLocation: () => {},
  clearSearchResults: () => {},
};

const LocationContext = createContext<ILocationContext>(defaultState);

interface IChildren {
  children: React.ReactNode;
}

/**
 * Контекст-провайдер для выбранного местоположения
 */
const LocationProvider: FC<IChildren> = ({ children }) => {
  const [location, setLocation] = useState<ILocation | null>(
    defaultState.location
  );

  const setCurrentLocation = (currentLocation: ILocation | null) => {
    setLocation(currentLocation);
    // добавить еще одну функцию для очистки всякой залупы
  };

  const clearSearchResults = () => {

  }
  return (
    <LocationContext.Provider
      value={{
        location,
        setCurrentLocation,
        clearSearchResults,
        // и сюда ее пропихнуть
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, type LocationContextType, LocationProvider };
