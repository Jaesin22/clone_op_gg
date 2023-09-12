import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Spinner from "./components/spinner/Spinner";

const Home = lazy(() => import("./pages/HomeLayout"));
const Summoner = lazy(() => import("./pages/SummonerLayout"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/summoner/:summonerName" element={<Summoner />} />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
