import React, { useState } from "react";
import useSummonerData from "../../hooks/useSummonerData";
import { useTheme } from "../../contexts/ThemeProvider";
import SearchHooks from "../../hooks/SearchHooks";
import { convertUnixTimestampToDuration } from "../../utils/MainUtils";
const Profile = () => {
  const { data, isLoading } = useSummonerData();
  const { isDarkMode } = useTheme();
  const { favorites, handleAddFavorites } = SearchHooks();

  const [updateTime, setupdateTime]: any = useState(
    localStorage.getItem("clickTime") || Date.now()
  );

  const now = Math.floor(Date.now());

  const timeDifferenceInMilliseconds = convertUnixTimestampToDuration(
    now - updateTime
  );

  if (isLoading) {
    return <div></div>;
  }
  if (data?.name === "AxiosError") {
    return (
      <div
        className={`pt-[50px] leading-3 font-bold pb-[22px] mb-[15px] border-b  ${
          isDarkMode ? `border-b-[#424254]` : `border-b-[#DBE0E4]`
        }`}
      >
        <h2
          className={`title text-2xl text-center ${
            isDarkMode ? `text-white` : `text-[#202D37]`
          }`}
        >
          OP.GG에 등록되지 않은 소환사입니다. 오타를 확인 후 다시 검색해주세요.
        </h2>
      </div>
    );
  }

  const reload = () => {
    const date = Date.now();
    setupdateTime(date);
    localStorage.setItem("clickTime", date.toString());
    window.location.reload(); // 새로고침
  };

  const imgUrl = process.env.REACT_APP_PROFILE_ICON_URL?.replaceAll(
    '"',
    ""
  ).replace(";", "");
  const profile_icons: string = `${imgUrl}${data.profileIconId}.png`;

  return (
    <article>
      {data && (
        <div
          className={`flex h-[228px] w-full ${
            isDarkMode ? `bg-[#31313C]` : `bg-white`
          }`}
        >
          <div className="wrapper flex w-[1080px] mx-auto my-0">
            <div className="header-profile flex pt-2.5 pr-2.5 pb-4 pl-0 mt-8 relative basis-24">
              <div className="profile-icon">
                <img
                  src={`${profile_icons}`}
                  alt="icon"
                  className="float-left rounded-2xl"
                  width="96px"
                  height="96px"
                />
                <div className="level absolute text-center pt-20 pl-7">
                  <span className="inline-block py-0 px-2 bg-[#202D37] rounded-lg text-xs leading-5 text-white">
                    {data?.summonerLevel}
                  </span>
                </div>
              </div>
            </div>
            <div className="info ml-6 mt-3">
              <div className="prev-tier items-center justify-between mt-4"></div>
              <div className="flex name mt-2">
                <h1
                  className={`summoner-name text-2xl font-bold ${
                    isDarkMode ? `text-white` : `text-black`
                  }`}
                >
                  {data?.name}
                </h1>
                <button
                  className={`w-7 h-7 rounded border-solid border ml-2 mt-0.5 ${
                    isDarkMode ? `border-[#424254]` : `border-[#DBE0E4]`
                  } ${
                    favorites.some(
                      (favorite: any) => favorite.name === data?.name
                    )
                      ? `bg-yellow-300`
                      : `${isDarkMode ? `bg-[#31313C]` : `bg-white`}`
                  } `}
                  onClick={() => handleAddFavorites(data?.name)}
                >
                  <img
                    src={
                      favorites.some(
                        (favorite: any) => favorite.name === data?.name
                      )
                        ? "https://s-lol-web.op.gg/images/icon/icon-bookmark-on-w.svg?v=1693456151155"
                        : "https://s-lol-web.op.gg/images/icon/icon-bookmark.svg"
                    }
                    alt="즐겨찾기"
                  />
                </button>
              </div>
              <div className="advertise mt-2 items-center">
                <a
                  href="#!"
                  className="flex border border-[#DBE0E4] bg-inherit p-1.5 rounded"
                >
                  <img
                    src="https://s-lol-web.op.gg/assets/images/icons/riot-logomark-circle-offwhite@2x.png?image=q_auto,f_webp,w_32&v=1690447901880"
                    alt="logo"
                    className="w-4 h-4"
                  />
                  <span
                    className={`text-xs ml-2 ${
                      isDarkMode ? `text-white` : `text-black`
                    }`}
                  >
                    라이엇 계정 연동하고 나만의 프로필을 설정해보세요.
                  </span>
                  <img
                    src="https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg?v=1690447901880"
                    alt=">"
                    className="ml-2.5 w-5 h-5"
                  />
                </a>
              </div>
              <div className="reload_button mt-2">
                <button
                  className="rounded text-white bg-[#5383e9] py-2.5 px-3 text-sm"
                  onClick={() => reload()}
                >
                  전적 갱신
                </button>
              </div>
              <div className="last-update mt-1.5 text-xs text-gray-400">
                <div>최근 업데이트 : {timeDifferenceInMilliseconds}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Profile;
