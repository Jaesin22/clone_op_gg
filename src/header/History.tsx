import React, { useState } from "react";
import SearchHooks from "../hooks/SearchHooks";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeProvider";

const History = () => {
  const {
    keywords,
    handleRemoveKeyword,
    favorites,
    handleAddFavorites,
    handleRemoveFavorites,
  } = SearchHooks();
  const [mode, setMode] = useState("recent");

  const handleModeChange = (mode: string) => {
    setMode(mode);
  };

  const { isDarkMode } = useTheme();

  return (
    <div className="static">
      <div className="mt-[2px] absolute top-[calc(100% + 10px)] w-[480px] rounded shadow-sm z-50 overflow-hidden">
        <div className={` ${isDarkMode ? `bg-[#31313C]` : `bg-white`}`}>
          <div>
            <button
              className={`h-[34px] text-sm w-1/2 ${
                isDarkMode ? `text-white` : `text-[#B7B7C9]`
              } cursor-pointer ${
                mode === "recent" && isDarkMode
                  ? "bg-[#31313C]"
                  : mode === "recent" && !isDarkMode
                  ? "bg-white"
                  : mode !== "recent" && isDarkMode
                  ? "bg-[#282830]"
                  : mode !== "recent" && !isDarkMode
                  ? "bg-[#EBEEF1]"
                  : ""
              }`}
              onClick={() => handleModeChange("recent")}
            >
              최근검색
            </button>
            <button
              className={`h-[34px] text-sm w-1/2 ${
                isDarkMode ? `text-white` : `text-[#B7B7C9]`
              } cursor-pointer ${
                mode === "favorite" && isDarkMode
                  ? "bg-[#31313C]"
                  : mode === "favorite" && !isDarkMode
                  ? "bg-white"
                  : mode !== "favorite" && isDarkMode
                  ? "bg-[#282830]"
                  : mode !== "favorite" && !isDarkMode
                  ? "bg-[#EBEEF1]"
                  : ""
              }`}
              onClick={() => handleModeChange("favorite")}
            >
              즐겨찾기
            </button>
          </div>
          <ul className="mt-1 mb-1 list-none p-0">
            {mode === "recent" && keywords.length > 0 ? (
              keywords.map((items: any) => (
                <li
                  key={items?.id}
                  className={`py-2 px-4 flex box-border items-center list-none ${
                    isDarkMode ? `hover:bg-[#282830]` : `hover:bg-[#F7F7F9]`
                  }`}
                >
                  <Link
                    to={`/summoner/${items?.text}`}
                    className="summoner flex flex-1 text-left items-center overflow-hidden"
                  >
                    <span
                      className={`summoner-name text-sm color ${
                        isDarkMode ? `text-[#B7B7C9]` : `text-black`
                      }`}
                    >
                      {items?.text}
                    </span>
                  </Link>
                  <div className="relative">
                    <input
                      className=" hidden bg-transparent appearance-none"
                      type="checkbox"
                    />
                    <label
                      className="favorite-summoner-label block static h-6 w-6 m-0 align-middle border-0 cursor-pointer"
                      onClick={() => handleAddFavorites(items.text)}
                    >
                      <img
                        src={
                          favorites.some(
                            (favorite: any) => favorite.name === items.text
                          )
                            ? "https://s-lol-web.op.gg/images/icon/icon-bookmark-on-yellow.svg"
                            : "https://s-lol-web.op.gg/images/icon/icon-bookmark.svg"
                        }
                        alt="즐겨찾기"
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    className="close-btn ml-2"
                    onClick={() => handleRemoveKeyword(items.id)}
                  >
                    <img
                      src="https://s-lol-web.op.gg/images/icon/icon-close-small.svg?v=1692872564027"
                      className="w-6 h-6"
                      alt="최근검색 지우기"
                    />
                  </button>
                </li>
              ))
            ) : mode === "recent" && keywords.length === 0 ? (
              <li className="noData box-border flex justify-center items-center w-full h-[264px] px-6 text-center text-xs text-[#9AA4AF]">
                <p className="m-0">
                  <img
                    src="https://s-lol-web.op.gg/images/icon/icon-info.svg"
                    alt="느낌표 안에 동그라미"
                    className=" ml-14"
                  />
                  최근에 본 소환사가 없습니다.
                </p>
              </li>
            ) : mode === "favorite" && favorites.length > 0 ? (
              favorites.map((items: any) => (
                <li
                  key={items?.id}
                  className={`py-2 px-4 flex box-border items-center list-none ${
                    isDarkMode ? `hover:bg-[#282830]` : `hover:bg-[#F7F7F9]`
                  }`}
                >
                  <Link
                    to={`/summoner/${items?.name}`}
                    className="summoner flex flex-1 text-left items-center overflow-hidden"
                  >
                    <span
                      className={`summoner-name text-sm ${
                        isDarkMode ? `text-[#B7B7C9]` : `text-black`
                      }`}
                    >
                      {items?.name}
                    </span>
                  </Link>
                  <div className="relative">
                    <input
                      className=" hidden bg-transparent appearance-none"
                      type="checkbox"
                    />
                  </div>
                  <button
                    type="button"
                    className="close-btn ml-2"
                    onClick={() => handleRemoveFavorites(items.id)}
                  >
                    <img
                      src="https://s-lol-web.op.gg/images/icon/icon-close-small.svg?v=1692872564027"
                      className="w-6 h-6"
                      alt="최근검색 지우기"
                    />
                  </button>
                </li>
              ))
            ) : mode === "favorite" && favorites.length === 0 ? (
              <li className="noData box-border flex justify-center items-center w-full h-[264px] px-6 text-center text-xs text-[#9AA4AF]">
                <div className="block">
                  <img
                    src="https://s-lol-web.op.gg/images/icon/icon-bookmark-on-yellow.svg?v=1693375322808"
                    className="w-6 h-6 align-middle ml-[150px] mb-2"
                    alt="info"
                  />
                  <p className="m-0">
                    관심있는 소환사에 즐겨찾기를 하여 편리하게 정보를
                    받아보세요.
                  </p>
                </div>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
