import React, { useState } from "react";
import SearchHooks from "../hooks/SearchHooks";

const History = () => {
  const { keywords, handleRemoveKeyword } = SearchHooks();
  const [mode, setMode] = useState("recent");

  const handleModeChange = (mode: string) => {
    setMode(mode);
  };

  return (
    <div className="static">
      <div className="mt-[2px] absolute top-[calc(100% + 10px)] w-2/3 rounded shadow-sm z-50 overflow-hidden">
        <div className="bg-white">
          <div>
            <button
              className={`h-[34px] w-1/2 cursor-pointer ${
                mode === "recent" ? `bg-white` : `bg-[#9AA4AF]`
              }`}
              onClick={() => handleModeChange("recent")}
            >
              최근 검색
            </button>
            <button
              className={` h-[34px] w-1/2 cursor-pointer ${
                mode === "favorite" ? `bg-white` : `bg-[#9AA4AF]`
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
                  className="py-2 px-4 flex box-border items-center list-none hover:bg-[#F7F7F9]"
                >
                  <a
                    className="summoner flex flex-1 text-left items-center overflow-hidden"
                    href="www.naver.com"
                  >
                    <span className="summoner-name text-sm color">
                      {items?.text}
                    </span>
                  </a>
                  <div className="relative">
                    <input
                      className=" hidden bg-transparent appearance-none"
                      type="checkbox"
                    />
                    <label className="favorite-summoner-label block static h-6 w-6 m-0 align-middle border-0">
                      <img
                        src="https://s-lol-web.op.gg/images/icon/icon-bookmark.svg"
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
            ) : mode === "favorite" && keywords.length > 0 ? (
              keywords.map((items: any) => (
                <li
                  key={items?.id}
                  className="py-2 px-4 flex box-border items-center list-none hover:bg-[#F7F7F9]"
                >
                  <a
                    className="summoner flex flex-1 text-left items-center overflow-hidden"
                    href="www.naver.com"
                  >
                    <span className="summoner-name text-sm color">
                      {items?.text}
                    </span>
                  </a>
                  <div className="relative">
                    <input
                      className=" hidden bg-transparent appearance-none"
                      type="checkbox"
                    />
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
            ) : mode === "favorite" && keywords.length === 0 ? (
              ``
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
