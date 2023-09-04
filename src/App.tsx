import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SummonerLayout from "./pages/SummonerLayout";
import HomeLayout from "./pages/HomeLayout";
import { ThemeProvider } from "./contexts/ThemeProvider";

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
