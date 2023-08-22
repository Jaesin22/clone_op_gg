import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SummonerLayout from "./layout/SummonerLayout";
import HomeLayout from "./layout/HomeLayout";
import { ThemeProvider } from "./context/ThemeProvider";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route
              path="/summoner/:summonerName"
              element={<SummonerLayout />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
