import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SummonerLayout from "./layout/SummonerLayout";
import HomeLayout from "./layout/HomeLayout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/summoner" element={<SummonerLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
