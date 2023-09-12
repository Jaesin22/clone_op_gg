import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeProvider";

const Home = lazy(() => import("./pages/HomeLayout"));
const Summoner = lazy(() => import("./pages/SummonerLayout"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summoner/:summonerName" element={<Summoner />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
