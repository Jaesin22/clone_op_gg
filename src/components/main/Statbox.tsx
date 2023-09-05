import React from "react";
import PieGraph from "./PieGraph";
import useSummonerData from "../../hooks/useSummonerData";
import useTeamInfo from "../../hooks/useTeamInfo";
import { Champions } from "../../utils/HookUtils";
import { useTheme } from "../../contexts/ThemeProvider";

const Statbox = ({ data }: any) => {
  const { puuId, isLoading }: any = useSummonerData();
  const { win, lose, kill, death, assist, teamKill, champion, positionCounts } =
    useTeamInfo(data, puuId);
  const { isDarkMode } = useTheme();

  if (isLoading || data === undefined) {
    return <div></div>; // 또는 원하는 뷰로 대체할 수 있음
  }

  return (
    <div
      className={`stats-box flex text-left border-t ${
        isDarkMode ? `bg-[#31313C] border-[#1C1C1F]` : `bg-white`
      } py-2 px-3 box-border  h-[132px]`}
    >
      <div className="stats w-[222px]">
        <div className="win-lose leading-4 text-xs text-[#758592]">
          {win + lose}전 {win}승 {lose}패
        </div>
        <div className="kda flex items-center mt-3">
          <div className="chart w-[88px] h-[88px] relative">
            <div className="charts-wrapper relative cursor-default w-[88px] h-[88px]">
              <PieGraph />
            </div>
          </div>
          <div className="info ml-8">
            <div className="k-d-a leading-4 text-xs text-[#758592]">
              <span className="">{(kill / (win + lose)).toFixed(1)}</span>
              {" / "}
              <span className=" text-red-600">
                {(death / (win + lose)).toFixed(1)}
              </span>
              {" / "}
              <span>{(assist / (win + lose)).toFixed(1)}</span>
            </div>
            <div
              className={`ratio mt-0.5 leading-[26px] text-[20px] font-bold ${
                isDarkMode ? `text-white` : `text[#202D37]`
              }`}
            >
              {((kill + assist) / death).toFixed(2)}:1
            </div>
            <div className="kill-participantion leading-4 mt-0.5 text-xs text-red-600">
              킬관여 {(((kill + assist) / teamKill) * 100).toFixed()}%
            </div>
          </div>
        </div>
      </div>
      <div className="champions w-[222px] ml-4">
        <div className="title leading-4 text-xs text-[#758592]">
          플레이한 챔피언(최근 {win + lose}게임)
        </div>
        <ul className="flex flex-col justify-center h-[88px] mt-3">
          {champion.slice(0, 3).map((obj: Champions, index: number) => (
            <li key={index} className="flex mt-0 items-center my-1.5">
              <img
                src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${obj.championName}.png?
                image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1691043179819`}
                alt={`${obj.championName}`}
                className="w-6 h-6 rounded-[50%] mr-2"
              />
              <div className="win-lose text-[11px] text-[#9AA4AF]">
                <div className="relative inline">
                  <span className="text-[#D31A45]">
                    {(
                      (obj.championWinCount /
                        (obj.championWinCount + obj.championLoseCount)) *
                      100
                    ).toFixed()}
                    %
                  </span>{" "}
                  ({obj.championWinCount}승 {obj.championLoseCount}패)
                </div>
              </div>
              <div className="inline-block text-[11px] ml-1 text-[#00A399]">
                {(
                  (obj.championKill + obj.championAssist) /
                  (obj.championDeath === 0 ? 1 : obj.championDeath)
                ).toFixed(2)}{" "}
                평점
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="positions w-[222px] ml-4">
        <div className="title leading-4 text-xs text-[#758592] text-center">
          선호 포지션 (랭크)
        </div>
        <ul className="flex justify-around mt-3">
          <li>
            <div
              className={`bar flex items-end w-4 h-16 ${
                isDarkMode ? `bg-[#424254]` : `bg-[#DBE0E4]`
              } `}
            >
              <div
                className="gauge w-4 bg-[#5383E8]"
                style={{
                  height: `${(positionCounts.TOP / (win + lose)) * 100}%`,
                }}
              ></div>
            </div>
            <div className="position mt-2">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-position-top.svg?v=1691043179819"
                className="border-0 align-middle max-w-full w-4"
                alt="top"
              />
            </div>
          </li>
          <li>
            <div
              className={`bar flex items-end w-4 h-16 ${
                isDarkMode ? `bg-[#424254]` : `bg-[#DBE0E4]`
              } `}
            >
              <div
                className="gauge w-4 bg-[#5383E8]"
                style={{
                  height: `${(positionCounts.JUNGLE / (win + lose)) * 100}%`,
                }}
              ></div>
            </div>
            <div className="position mt-2">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-position-jungle.svg?v=1691043179819"
                className="border-0 align-middle max-w-full w-4"
                alt="jungle"
              />
            </div>
          </li>
          <li>
            <div
              className={`bar flex items-end w-4 h-16 ${
                isDarkMode ? `bg-[#424254]` : `bg-[#DBE0E4]`
              } `}
            >
              <div
                className="gauge w-4 bg-[#5383E8]"
                style={{
                  height: `${(positionCounts.MIDDLE / (win + lose)) * 100}%`,
                }}
              ></div>
            </div>
            <div className="position mt-2">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-position-mid.svg?v=1691043179819"
                className="border-0 align-middle max-w-full w-4"
                alt="mid"
              />
            </div>
          </li>
          <li>
            <div
              className={`bar flex items-end w-4 h-16 ${
                isDarkMode ? `bg-[#424254]` : `bg-[#DBE0E4]`
              } `}
            >
              <div
                className="gauge w-4 bg-[#5383E8]"
                style={{
                  height: `${(positionCounts.BOTTOM / (win + lose)) * 100}%`,
                }}
              ></div>
            </div>
            <div className="position mt-2">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-position-adc.svg?v=1691043179819"
                className="border-0 align-middle max-w-full w-4"
                alt="adc"
              />
            </div>
          </li>
          <li>
            <div
              className={`bar flex items-end w-4 h-16 ${
                isDarkMode ? `bg-[#424254]` : `bg-[#DBE0E4]`
              } `}
            >
              <div
                className="gauge w-4 bg-[#5383E8]"
                style={{
                  height: `${(positionCounts.UTILITY / (win + lose)) * 100}%`,
                }}
              ></div>
            </div>
            <div className="position mt-2">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-position-support.svg?v=1691043179819"
                className="border-0 align-middle max-w-full w-4"
                alt="support"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Statbox);
