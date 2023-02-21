import React from "react";
import "./App.scss";
import Search from "./components/inputs/Search/Search";
import Weather from "./components/layout/Weather/Weather";

import { LocationProvider } from "./context/LocationContext";
import { DailyProvider } from "./context/DailyContext";

function App() {
  return (
    <LocationProvider>
      <div className="app-layout">
        <header></header>
        <main>
          <div className="widget">
            <Search />
            <DailyProvider>
              <Weather />
            </DailyProvider>
          </div>
        </main>
        <footer>
        </footer>
      </div>
    </LocationProvider>
  );
}

export default App;
