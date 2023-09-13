import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  GameData,
  convertUnixTimestampToDuration,
  participants,
  spellArray,
  runeTree,
  Team,
} from "../../utils/MainUtils";
import ScoreBoard from "./ScoreBoard";
import useSummonerData from "../../hooks/useSummonerData";
import { useTheme } from "../../contexts/ThemeProvider";
import LazyLoad from "react-lazyload";

const Record = ({
  data,
  hasNextPage,
  fetchNextPage,
  isFetching,
  isFetchingNextPage,
}: any) => {
  const now = useMemo(() => Math.floor(Date.now()), []); // 한 번만 계산됨
  const { runeData, puuId } = useSummonerData();
  const { isDarkMode } = useTheme();

  const [showScore, setShowScore] = useState(Array(data?.length).fill(false));

  const toggleScoreBoard = (index: number) => {
    const updatedShowScore = [...showScore];
    updatedShowScore[index] = !updatedShowScore[index];
    setShowScore(updatedShowScore);
  };

  if (isFetching) {
    return <div></div>;
  }

  const renderInfos = (obj: GameData, index: number) => {
    const participantData = obj.participants.filter(
      (partObj: participants) => partObj.puuid === puuId
    );
    const myTeam = obj.teams.find(
      (team: Team) => team.teamId === participantData[0]?.teamId
    );

    return (
      <div
        className={`flex h-24 rounded border-l-[6px] ${
          myTeam?.win
            ? `${isDarkMode ? `bg-[#28344E]` : `bg-[#ECF2FF]`} border-[#5383E8]`
            : `${isDarkMode ? `bg-[#59343B]` : `bg-[#FFF1F3]`} border-[#e84057]`
        } `}
      >
        <div className="content flex h-full justify-between flex-grow">
          <div className="game-content flex h-24 items-center content-between pl-3">
            <div className="game w-[108px] text-[#758592] justify-center flex-col leading-4">
              <div
                className={`type font-bold ${
                  myTeam?.win ? `text-[#4171D6]` : `text-[#D31A45]`
                }`}
              >
                {obj.queueId === 440
                  ? "자유 5:5 랭크"
                  : obj.queueId === 420
                  ? "솔랭"
                  : obj.queueId === 450
                  ? "무작위 총력전"
                  : obj.queueId === 430
                  ? "일반"
                  : ""}
              </div>
              <div className="time-stamp relative">
                {convertUnixTimestampToDuration(
                  now - Math.floor(obj.gameEndTimestamp)
                )}
              </div>
              <div className="bar w-12 h-[1px] mt-2 mr-0 mb-1 bg-[#D5E3FF]"></div>
              <div key={index} className="result font-bold">
                {myTeam?.win === true ? "승리" : "패배"}
              </div>
              <div className="length">
                {convertUnixTimestampToDuration(
                  obj.gameEndTimestamp - obj.gameStartTimestamp
                )}
              </div>
            </div>
          </div>
          {obj?.participants
            .filter((partObj: participants) => partObj.puuid === puuId)
            .map((partObj: participants, index: number) => (
              <div key={index} className="info mt-2">
                <div className="flex">
                  <div className="champion flex items-center">
                    <div className="icon">
                      <a href="!#" className="relative block w-12 h-12">
                        <img
                          src={`https://ddragon.leagueoflegends.com/cdn/13.15.1/img/champion/${partObj.championName}.png`}
                          className="rounded-[50%]"
                          alt="character"
                        />
                        <span
                          className="champion-level absolute right-0 bottom-0 flex items-center
                    justify-center w-5 h-5 text-xs rounded-[50%] text-white bg-[#202d37]"
                        >
                          {partObj.champLevel}
                        </span>
                      </a>
                    </div>
                    <div className="spells ml-1">
                      <div className="spell w-[22px] h-[22px] mb-[2px] rounded">
                        <div className="relative">
                          <img
                            src={`https://ddragon.leagueoflegends.com/cdn/13.15.1/img/spell/${
                              spellArray.find(
                                (spell) => spell.key === partObj.summoner1Id
                              )?.id
                            }.png`}
                            alt="spell"
                            className="rounded"
                          />
                        </div>
                      </div>
                      <div className="spell w-[22px] h-[22px] mb-[2px] rounded">
                        <div className="relative">
                          <img
                            src={`https://ddragon.leagueoflegends.com/cdn/13.15.1/img/spell/${
                              spellArray.find(
                                (spell) => spell.key === partObj.summoner2Id
                              )?.id
                            }.png`}
                            alt="spell"
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="runes ml-[2px]">
                      <div className="rune w-[22px] h-[22px] mb-[2px]">
                        <div className="relative">
                          <img
                            src={`https://ddragon.leagueoflegends.com/cdn/img/${
                              runeData?.find((rune: any) =>
                                rune.slots.some((slot: any) =>
                                  slot.runes.some(
                                    (key: any) =>
                                      key.id ===
                                      partObj.perks.styles[0].selections[0].perk
                                  )
                                )
                              )?.icon
                            }`}
                            alt="rune"
                          />
                        </div>
                      </div>
                      <div className="rune w-[22px] h-[22px] mb-[2px]">
                        <div className="relative">
                          <img
                            src={`https://ddragon.leagueoflegends.com/cdn/img/${
                              runeData.find(
                                (rune: runeTree) =>
                                  partObj.perks.styles[1].style === rune.id
                              )?.icon
                            }`}
                            alt="rune"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kda flex flex-col justify-center pr-3 ml-3 w-[107px]">
                    <div className="k-d-a leading-[22px] text-[15px] text-[#9AA4AF]">
                      <span
                        className={`font-bold ${
                          isDarkMode ? `text-white` : `text-[#202D37]`
                        }`}
                      >
                        {partObj.kills}
                      </span>
                      {" / "}
                      <span className="font-bold text-red-600">
                        {partObj.deaths}
                      </span>
                      {" / "}
                      <span
                        className={`font-bold text-[#202D37] ${
                          isDarkMode ? `text-white` : `text-[#202D37]`
                        }`}
                      >
                        {partObj.assists}
                      </span>
                    </div>
                    <div className="ratio leading-4 text-[#758592]"></div>
                    <span className="leading-4 text-[#758592]">
                      {(
                        (partObj.kills + partObj.assists) /
                        (partObj.deaths === 0 ? 1 : partObj.deaths)
                      ).toFixed(2)}
                      {":1"}
                      평점
                    </span>
                  </div>
                  {obj.queueId !== 1700 ? (
                    <div
                      className={`stats flex flex-col items-start w-[140px] text-[11px] mt-0.5 pl-2 text-[#758592]
                 before:absolute before:top-1 before:w-[1px]
                 before:h-[62px] ${
                   myTeam?.win ? `before:bg-[#D5E3FF]` : `before:bg-[#FFD8D9]`
                 } before:content`}
                    >
                      <div className="p-kill text-red-600 ml-1.5">
                        <div key={index} className="relative">
                          킬관여{" "}
                          {(
                            ((partObj.kills + partObj.assists) /
                              myTeam!.objectives.champion.kills) *
                            100
                          ).toFixed()}
                          %
                        </div>
                      </div>
                      <div className="ward ml-1.5">
                        제어 와드 {partObj.detectorWardsPlaced}
                      </div>
                      <div className="cs">
                        <div className="relative ml-1.5">
                          CS{" "}
                          {partObj?.totalMinionsKilled +
                            partObj?.neutralMinionsKilled}{" "}
                          (
                          {(
                            (partObj.totalMinionsKilled +
                              partObj.neutralMinionsKilled) /
                            (obj.gameDuration / 60)
                          ).toFixed(1)}
                          )
                        </div>
                      </div>
                      <div className="average-tier font-bold ml-1.5">
                        <div className="relative"></div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="flex items-center mt-1.5">
                  <div className="items flex">
                    <ul className="flex">
                      <li
                        className={`rounded ${
                          myTeam?.win
                            ? `${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                            : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                        } mx-[1px] w-[22px] h-[22px]`}
                      >
                        <div className="relative">
                          {partObj.item0 ? (
                            <img
                              src={`${process.env.REACT_APP_ITEM_URL}${partObj.item0}.png`}
                              alt={partObj.item0}
                              className="w-[22px] h-[22px] rounded"
                            />
                          ) : null}
                        </div>
                      </li>
                      <li
                        className={`rounded ${
                          myTeam?.win
                            ? `${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                            : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                        } mx-[1px] w-[22px] h-[22px]`}
                      >
                        <div className="relative">
                          {partObj.item1 ? (
                            <img
                              src={`${process.env.REACT_APP_ITEM_URL}${partObj.item1}.png`}
                              alt={partObj.item1}
                              className="w-[22px] h-[22px] rounded"
                            />
                          ) : null}
                        </div>
                      </li>
                      <li
                        className={`rounded ${
                          myTeam?.win
                            ? `${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                            : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                        } mx-[1px] w-[22px] h-[22px]`}
                      >
                        <div className="relative">
                          {partObj.item2 ? (
                            <img
                              src={`${process.env.REACT_APP_ITEM_URL}${partObj.item2}.png`}
                              alt={partObj.item2}
                              className="w-[22px] h-[22px] rounded"
                            />
                          ) : null}
                        </div>
                      </li>
                      <li
                        className={`rounded ${
                          myTeam?.win
                            ? `${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                            : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                        } mx-[1px] w-[22px] h-[22px]`}
                      >
                        <div className="relative">
                          {partObj.item3 ? (
                            <img
                              src={`${process.env.REACT_APP_ITEM_URL}${partObj.item3}.png`}
                              alt={partObj.item3}
                              className="w-[22px] h-[22px] rounded"
                            />
                          ) : null}
                        </div>
                      </li>
                      <li
                        className={`rounded ${
                          myTeam?.win
                            ? `${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                            : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                        } mx-[1px] w-[22px] h-[22px]`}
                      >
                        <div className="relative">
                          {partObj.item4 ? (
                            <img
                              src={`${process.env.REACT_APP_ITEM_URL}${partObj.item4}.png`}
                              alt={partObj.item4}
                              className="w-[22px] h-[22px] rounded"
                            />
                          ) : null}
                        </div>
                      </li>
                      <li
                        className={`rounded ${
                          myTeam?.win
                            ? `${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                            : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                        } mx-[1px] w-[22px] h-[22px]`}
                      >
                        <div className="relative">
                          {partObj.item5 ? (
                            <img
                              src={`${process.env.REACT_APP_ITEM_URL}${partObj.item5}.png`}
                              alt={partObj.item5}
                              className="w-[22px] h-[22px] rounded"
                            />
                          ) : null}
                        </div>
                      </li>
                    </ul>
                    <div
                      className={`ward w-[22px] h-[22px] 0.5 mr-1 ${
                        myTeam?.win
                          ? `${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                          : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                      } rounded-[50%]`}
                    >
                      <div className="relative">
                        {partObj.item6 ? (
                          <img
                            src={`${process.env.REACT_APP_ITEM_URL}${partObj.item6}.png`}
                            alt={partObj.item6}
                            className="w-[22px] h-[22px] rounded"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <div key={index} className="particpants flex">
            <ul className="mr-2 mt-0.5">
              {obj?.participants
                .slice(0, Math.ceil(obj?.participants.length / 2))
                .map((userObj: any, index: number) => (
                  <li
                    key={index}
                    className="flex items-center w-[88px] h-[18px] text-left"
                  >
                    <div className="icon relative inline-block align-middle mr-1">
                      <img
                        src={`${process.env.REACT_APP_CHAMPION_ICON_URL}${userObj.championName}.png`}
                        alt={userObj.championName}
                        className="block h-4 w-4 rounded"
                      />
                    </div>
                    <div className="name inline-block max-w-[60px] align-middle text-[#758592] overflow-hidden text-ellipsis whitespace-nowrap">
                      <Link
                        to={`/summoner/${userObj?.summonerName}`}
                        className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                      >
                        {userObj?.summonerName}
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
            <ul className="mr-2 mt-0.5">
              {obj?.participants
                .slice(
                  Math.ceil(obj?.participants.length / 2),
                  obj?.participants.length
                )
                .map((userObj: any, index: number) => (
                  <li
                    key={index}
                    className="flex items-center w-[88px] h-[18px] text-left"
                  >
                    <div className="icon relative inline-block align-middle mr-1">
                      <img
                        src={`${process.env.REACT_APP_CHAMPION_ICON_URL}${userObj.championName}.png`}
                        alt="쓰레쉬"
                        className="block h-4 w-4 rounded"
                      />
                    </div>
                    <div className="name inline-block max-w-[60px] align-middle text-[#758592] overflow-hidden text-ellipsis whitespace-nowrap">
                      <Link
                        to={`/summoner/${userObj.summonerName}`}
                        className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                      >
                        {userObj.summonerName}
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="action relative w-10 roundㄹed overflow-hidden">
          <button
            className={`detail w-10 h-24 ${
              myTeam?.win
                ? `${isDarkMode ? `bg-[#2F436E]` : `bg-[#D5E3FF]`}`
                : ` ${isDarkMode ? `bg-[#703C47]` : `bg-[#FFD8D9]`}`
            } `}
            onClick={() => toggleScoreBoard(index)}
          >
            <img
              src={`https://s-lol-web.op.gg/images/icon/icon-arrow-down-${
                myTeam?.win ? `blue` : `red`
              }.svg?v=1690894796459`}
              alt="more"
              className="w-6 h-6 absolute bottom-2 left-2"
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-2">
      {data?.map((obj: GameData, index: number) => {
        return (
          <li key={index} className="relative mb-2 list-none">
            <LazyLoad height={110}>
              {renderInfos(obj, index)}
              {showScore[index] && <ScoreBoard GameData={obj} />}
            </LazyLoad>
          </li>
        );
      })}

      <button
        className={`more border rounded block w-full h-9 py-2 text-xs text-center box-border ${
          isDarkMode
            ? `bg-[#31313C] text-white border-[#424254]`
            : `bg-white text-black border-[#DBE0E4]`
        }`}
        onClick={() => {
          fetchNextPage();
        }}
        disabled={!hasNextPage || isFetchingNextPage}
        type="button"
      >
        더 보기
      </button>
    </div>
  );
};

export default React.memo(Record);
