import React from "react";
import "./App.scss";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";

import { LocationProvider } from "./context/LocationContext";


function App() {
  return (
    <LocationProvider>
      <div className="app-layout">
        <header></header>
        <main>
          <div className="widget">
            <Search />
            <Weather />
          </div>
        </main>
        <footer></footer>
      </div>
    </LocationProvider>
  );
}

export default App;
