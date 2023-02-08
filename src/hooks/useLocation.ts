import { useCallback, useState } from "react";
import { LocationInterface } from "../components/Search/SearchItem";
import { LocationContextType } from "../context/LocationContext";

// Кастомный хук для установки местоположения в контексте из дочерних компонентов

export const useLocation = (): LocationContextType => {
  const [location, setLocation] = useState<LocationInterface | null>(null);
  const setCurrentLocation = useCallback(
    (currentLocation: LocationInterface | null): void => {
      setLocation(currentLocation);
    },
    []
  );
  return {
    location,
    setCurrentLocation,
  };
};
