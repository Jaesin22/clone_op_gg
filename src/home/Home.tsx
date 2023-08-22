import React from "react";
import Search from "./Search";
import { useTheme } from "../context/ThemeProvider";

const Home = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`h-screen ${isDarkMode ? `bg-[#1C1C1F]` : `bg-[#5383E8]`}`}>
      <div className="content block w-[1080px] mx-auto my-0">
        <div
          className={`img pt-14 pb-[46px] mx-0 ${
            isDarkMode ? `bg-[#1C1C1F]` : `bg-[#5383E8]`
          }`}
        >
          <img
            src="https://meta-static.op.gg/logo/image/fc9a4aeddcf438c0b4faa8556253fadc.png?
          image=q_auto,f_webp,w_auto&v=1692255489132"
            className="block max-h-[224px] my-0 mx-auto max-w-full border-0 align-middle"
            title="라이즈 주문 전이"
            alt="op.gg logo (라이즈 주문 전이)"
          />
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Home;
