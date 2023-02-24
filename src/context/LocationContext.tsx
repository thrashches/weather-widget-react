import React, { createContext, FC, useState } from "react";
import { ILocation, IChildren } from "../api/types";

// Контекст для хранения и передачи выбранного/текущего местоположения

interface ILocationContext {
  location: ILocation | null;
  setCurrentLocation: (currentLocation: ILocation | null) => void;
  results: ILocation[];
  setSearchResults: (searchResults: ILocation[]) => void;
}

const defaultState = {
  location: null,
  setCurrentLocation: () => {},
  results: [],
  setSearchResults: () => {},
};

const LocationContext = createContext<ILocationContext>(defaultState);


/**
 * Контекст-провайдер для выбранного местоположения
 */
const LocationProvider: FC<IChildren> = ({ children }) => {
  const [location, setLocation] = useState<ILocation | null>(
    defaultState.location
  );
  const [results, setResults] = useState<ILocation[]>([]);

  const setCurrentLocation = (currentLocation: ILocation | null) => {
    setLocation(currentLocation);
  };
  const setSearchResults = (searchResults: ILocation[]) => {
    setResults(searchResults);
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        setCurrentLocation,
        results,
        setSearchResults,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
