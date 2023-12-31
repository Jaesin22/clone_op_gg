import { gameList } from "./Utils";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeProvider";
import Beacon from "../Beacon";
import { useState } from "react";

const Header = () => {
  const { isDarkMode, toggleMode } = useTheme();
  const [onBeacon, setOnBeacon] = useState(false);

  const onBeaconSelect = () => {
    setOnBeacon(!onBeacon);
  };
  console.log(onBeaconSelect);

  const handleClose = () => {
    setOnBeacon(false);
  };

  return (
    <header>
      <div className="flex bg-[#28344e]">
        <Link className="logo" to="/">
          <img
            src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1690271849565"
            alt="로고"
            className="w-24 h-11 px-3 float-left bg-[#5383E8] justify-center items-center"
          />
        </Link>
        <nav>
          <ul className="flex list-none ">
            {gameList.map((obj, index) => (
              <li
                key={index}
                className={`flex float-left px-3  ${
                  obj.name === "리그오브레전드"
                    ? "bg-[#5383E8] text-white"
                    : "bg-[#28344e] text-[#C3CBD1] hover:bg-[#2F436E]"
                }`}
              >
                <a href={obj.href} className="flex items-center h-11">
                  <img src={obj.src} alt={obj.name} className="w-6 h-9" />
                  <span className="justify-center ml-2 text-xs text-center">
                    {obj.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-end ml-auto mr-3">
          <div className="mt-2.5 mx-2">
            <button onClick={onBeaconSelect} aria-label="onBeacon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#b4ceff"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="mt-2.5 mx-2">
            <button onClick={toggleMode} aria-label="light/dark mode">
              {isDarkMode ? (
                <img
                  src="https://s-lol-web.op.gg/images/icon/icon-darkmode.svg"
                  alt="changemode"
                  className="w-5 h-5"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#b4ceff"
                  className="w-5 h-5"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex mx-2 mt-2 ">
            <div>
              <div className="flex">
                <div className="ml-6 mr-6 text-sm text-gray-500">|</div>
                <button
                  type="button"
                  className={`text-xs mt-1 bg-white"
                  text-white`}
                >
                  hello
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#c2cad6"
                    className={`flex w-4 h-4 float-right mt-0.5 ml-2 rotate-180"
                    `}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {onBeacon && (
            <div className="absolute">
              <div
                style={{
                  position: "fixed",
                  top: "0",
                  right: "0",
                  bottom: "0",
                  left: "0",
                }}
                onClick={handleClose} // 배경 클릭 시 Beacon 컴포넌트를 숨깁니다.
              />
              <Beacon />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
