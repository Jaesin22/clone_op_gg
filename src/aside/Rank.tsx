import React, { useEffect, useState } from "react";
import { UserRank } from "../api/Utils";
import GetRankGame from "../hooks/GetRankGame";
import { useTheme } from "../context/ThemeProvider";

const Rank = () => {
  const [info, setInfo] = useState<UserRank[]>([]);
  const { infoss, isLoading } = GetRankGame();
  const { isDarkMode } = useTheme();
  useEffect(() => {
    if (infoss) {
      setInfo(infoss.filter((infos) => infos.queueType === "RANKED_SOLO_5x5"));
    }
  }, [infoss]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <div
        className={`mt-2 rounded ${isDarkMode ? `bg-[#31313C]` : `bg-white`} `}
      >
        <div className="flex header leading-9 px-3 text-sm justify-between">
          <span className={`${isDarkMode ? `text-white` : `text-[#31313C]`}`}>
            솔로랭크
          </span>
          {!info.length ? (
            <span className="unranked text-sm font-bold text-[#C3C8D1] mt-2">
              Unranked
            </span>
          ) : null}
        </div>
      </div>
      <div>
        {info.map((obj: UserRank, index: number) => (
          <div
            key={index}
            className={`content flex items-center p-3 border-t border-[#ebeef1] ${
              isDarkMode
                ? `bg-[#31313C] border-[#1C1C1F]`
                : `bg-white border-[#ebeef1]`
            }`}
          >
            <div className="img relative">
              <img
                src="https://opgg-static.akamaized.net/images/medals_new/diamond.png?image=q_auto,f_webp,w_144&v=1690782010896"
                alt="tier"
                className={`${
                  isDarkMode ? `bg-[#282830]` : `bg-[#F7F7F9]`
                }  rounded-[50%] h-[72px] min-w-[72px] w-[100%]`}
              />
            </div>
            <div className="info flex-1 relative ml-4">
              <div
                className={`tier leading-[26px] w-[130px] text-xl font-bold ${
                  isDarkMode ? `text-white` : `text-[#202D37]`
                } `}
              >
                {obj?.tier} {obj?.rank}
              </div>
              <div className="lp leading-4 text-xs text-[#758592]">30 LP</div>
            </div>
            <div className="win-lose container text-xs text-right text-[#9AA4AF]">
              <div className="win-lose leading-6">
                {obj?.wins}승 {obj?.losses}패
              </div>
              <div className="ratio mt-[2px] leading-4">
                승률{" "}
                {((obj!.wins / (obj!.wins + obj!.losses)) * 100).toFixed(0)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Rank;
