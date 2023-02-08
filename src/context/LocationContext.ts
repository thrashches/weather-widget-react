import { createContext } from "react";
import { LocationInterface } from "../components/Search/SearchItem";

// Контекст для хранения и передачи выбранного/текущего местоположения

type LocationContextType = {
  location: LocationInterface | null;
  setCurrentLocation: (location: LocationInterface | null) => void;
};

const LocationContext = createContext<LocationContextType>({
  location: null,
  setCurrentLocation: () => {},
});

export { LocationContext, type LocationContextType };
