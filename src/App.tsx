import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";

import { LocationProvider } from "./context/LocationContext";


function App() {
  return (
    <LocationProvider>
      <div className="App">
        <header className="App-header">
          <Search />
          <Weather />
        </header>
      </div>
    </LocationProvider>
  );
}

export default App;
