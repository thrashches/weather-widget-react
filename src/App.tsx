import React from "react";
import "./App.css";
import Search from "./components/Search/Search";

import {
  LocationContext,
} from "./context/LocationContext";
import { useLocation } from "./hooks/useLocation";

function App() {
  const location = useLocation();

  return (
    <LocationContext.Provider value={location}>
      <div className="App">
        <header className="App-header">
          <Search />
        </header>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
