import React from "react";
import Header from "./header/Header";
import MainTop from "./main/MainTop";
import "./App.css";
import Rank from "./aside/Rank";
import FreeRank from "./aside/FreeRank";
import Statbox from "./main/Statbox";
import Arena from "./aside/Arena";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="content-container w-[1080px] mx-auto my-0">
        <div className="flex">
          <aside>
            <div className="w-[332px] text-xs align-top inline-block min-h-[870px]">
              <Rank />
              <FreeRank />
              <Arena />
            </div>
          </aside>
          <main>
            <div className="w-[740px] mt-2 ml-2 text-xs align-top">
              <MainTop />
              <Statbox />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
