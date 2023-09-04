import React from "react";
import {
  spellArray,
  participants,
  runeTree,
  getMaxDamageInParticipant,
  getMaxtotalDamageTaken,
  Team,
} from "../../utils/MainUtils";
import useSummonerData from "../../hooks/useSummonerData";
import { useTheme } from "../../contexts/ThemeProvider";
import { Link } from "react-router-dom";

const EnemyScoreBoard = ({ GameData }: any) => {
  const { runeData, puuId, isLoading } = useSummonerData();
  const { isDarkMode } = useTheme();

  if (isLoading) {
    return <div></div>;
  }

  const maxDamage = getMaxDamageInParticipant(
    GameData.participants
  ).totalDamageDealtToChampions;

  const maxTotalDamageTaken = getMaxtotalDamageTaken(
    GameData.participants
  ).totalDamageTaken;

  const participantData = GameData.participants.filter(
    (partObj: participants) => partObj.puuid === puuId
  );
  const enemyTeam = GameData.teams.find(
    (team: Team) => team.teamId !== participantData[0]?.teamId
  );

  if (!participantData.length) {
    return <div></div>;
  }

  return (
    <div className="">
      <table className="rounded-t w-[740px]">
        <thead
          className={`table-header-group align-middle border-inherit ${
            isDarkMode ? `bg-[#31313C]` : `bg-white`
          }`}
        >
          <tr className=" table-row border-inherit align-middle w-[740px]">
            <th colSpan={4} className="pl-[15px] text-left text-gray-400">
              <span
                className={`font-xs ${
                  enemyTeam.win ? `text-[#4171D6]` : `text-[#D31A45]`
                }`}
              >
                {enemyTeam.win ? "승리" : "패배"}
              </span>
              ({enemyTeam.teamId === 100 ? "블루팀" : "레드팀"})
            </th>
            <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
              KDA
            </th>
            <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
              피해량
            </th>
            <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
              와드
            </th>
            <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
              CS
            </th>
            <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
              아이템
            </th>
          </tr>
        </thead>
        <tbody
          className={`${
            enemyTeam.win
              ? `${
                  isDarkMode ? `bg-[#28344E]` : `bg-[#ECF2FF]`
                } border-[#d5e3ff]`
              : ` ${
                  isDarkMode ? `bg-[#59343B]` : `bg-[#FFF1F3]`
                } border-[#ffd8d9]`
          } border-t `}
        >
          {GameData.participants
            .filter(
              (partObj: participants) => partObj.teamId === enemyTeam.teamId
            )
            .map((partObj: participants, index: number) => {
              return (
                <tr
                  key={index}
                  className="table-row border-inherit align-middle"
                >
                  <td className="champion pl-2.5 pr-1">
                    <a href="!#" className="relative block">
                      <div className="relative w-8">
                        <img
                          src={`${process.env.REACT_APP_CHAMPION_ICON_URL}${partObj.championName}.png`}
                          alt={partObj.championName}
                          className="w-8 h-8 rounded-[50%] block"
                        />
                        <div className="level absolute -bottom-[3px] -left-[3px] w-[15px] h-[15px] bg-[#202d37] rounded-[50%] text-white font-[10px] text-center leading-[15px]">
                          {partObj.champLevel}
                        </div>
                      </div>
                    </a>
                  </td>
                  <td className="spells pt-1 pb-[3px] align-middle">
                    <div className="relative w-4 h-4">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/13.15.1/img/spell/${
                          spellArray.find(
                            (spell) => spell.key === partObj.summoner1Id
                          )?.id
                        }.png`}
                        alt="점화"
                        className="w-4 h-4 rounded"
                      />
                    </div>
                    <div className="relative w-4 h-4">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/13.15.1/img/spell/${
                          spellArray.find(
                            (spell) => spell.key === partObj.summoner2Id
                          )?.id
                        }.png`}
                        alt="점화"
                        className="w-4 h-4 rounded"
                      />
                    </div>
                  </td>
                  <td className="runes pt-1 pb-[3px] align-middle w-4 h-4">
                    <div className="relative mb-0.5 bg-black rounded-[50%]">
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
                        alt="기민한 발놀림"
                        className="block h-4 w-4 rounded-[50%]"
                      />
                    </div>
                    <div className="relative mb-0.5 w-4 h-4">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/img/${
                          runeData.find(
                            (rune: runeTree) =>
                              partObj.perks.styles[1].style === rune.id
                          )?.icon
                        }`}
                        alt="기민한 발놀림"
                        className="block h-4 w-4 rounded-[50%]"
                      />
                    </div>
                  </td>
                  <td className="name pl-[5px] whitespace-nowrap overflow-hidden text-ellipsis">
                    <Link
                      to={`/summoner/${partObj.summonerName}`}
                      className={`leading-4 text-xs ${
                        isDarkMode ? `text-white` : `text-[#202D37]`
                      } `}
                    >
                      {partObj.summonerName}
                    </Link>
                    <div className="tier text-[11px] leading-[14px] text-[#9AA4AF]">
                      <div className="relative capitalize">
                        Level {partObj.summonerLevel}
                      </div>
                    </div>
                  </td>
                  <td className="kda text-center whitespace-nowrap">
                    <div className="leading-[14px] text-[11px] text-[#758592]">
                      {partObj.kills} / {partObj.deaths} / {partObj.assists}
                      <div className="relative inline">
                        (
                        {(
                          ((partObj.kills + partObj.assists) /
                            enemyTeam!.objectives.champion.kills) *
                          100
                        ).toFixed()}
                        %)
                      </div>
                    </div>
                    <div
                      className={`text-[11px] font-bold ${
                        (partObj.kills + partObj.assists) /
                          (partObj.deaths === 0 ? 1 : partObj.deaths) <
                        3
                          ? "text-gray-400" // Apply red text color for values less than 3
                          : (partObj.kills + partObj.assists) /
                              (partObj.deaths === 0 ? 1 : partObj.deaths) >=
                              3 &&
                            (partObj.kills + partObj.assists) /
                              (partObj.deaths === 0 ? 1 : partObj.deaths) <
                              4
                          ? "text-[#00A399]" // Apply yellow text color for values between 3 and 4 (inclusive)
                          : (partObj.kills + partObj.assists) /
                              (partObj.deaths === 0 ? 1 : partObj.deaths) >=
                              4 &&
                            (partObj.kills + partObj.assists) /
                              (partObj.deaths === 0 ? 1 : partObj.deaths) <
                              5
                          ? "text-blue-500" // Apply green text color for values between 4 (inclusive) and 5 (inclusive)
                          : "text-orange-600" // Apply blue text color for values greater than 5
                      }`}
                    >
                      {(
                        (partObj.kills + partObj.assists) /
                        (partObj.deaths === 0 ? 1 : partObj.deaths)
                      ).toFixed(2)}
                      {":1"}
                    </div>
                  </td>
                  <td className="damage pt-1 pb-[3px] align-middle text-gray-500">
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="dealt text-center text-[11px] leading-[14px]">
                          {partObj.totalDamageDealtToChampions
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className="progress w-[50px] h-1.5 mt-1 mx-auto bg-white">
                          <div
                            className="fill w-full h-full bg-red-500"
                            style={{
                              width: `${
                                (partObj.totalDamageDealtToChampions /
                                  maxDamage) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="relative block">
                        <div className="taken text-center text-gray-500 text-[11px] leading-[14px] ml-2">
                          {partObj.totalDamageTaken
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className="progress--taken w-[50px] h-1.5 mt-1 mr-auto ml-2 bg-white">
                          <div
                            className="fill w-[53%] h-full bg-gray-400"
                            style={{
                              width: `${
                                (partObj.totalDamageTaken /
                                  maxTotalDamageTaken) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="ward text-center text-[11px] text-gray-500">
                    <div className="relative block">
                      <div className="block">
                        {partObj.challenges.controlWardsPlaced}
                      </div>
                      <div className="block">
                        {partObj.wardsPlaced} / {partObj.wardsKilled}
                      </div>
                    </div>
                  </td>
                  <td className="ward text-center text-[11px] text-gray-500 pt-1 pb-[3px] align-middle">
                    <div className="text-center text-gray-500 text-11px">
                      {partObj?.totalMinionsKilled +
                        partObj?.neutralMinionsKilled}
                    </div>
                    <div className="text-center text-gray-500 text-11px">
                      분당{" "}
                      {(
                        (partObj.totalMinionsKilled +
                          partObj.neutralMinionsKilled) /
                        (GameData.gameDuration / 60)
                      ).toFixed(1)}
                    </div>
                  </td>
                  <td className="items text-center pt-1 pb-[3px] align-middle">
                    <div
                      className={`item ml-0 inline-block w-[22px] h-[22px] align-middle mx-[1px] rounded ${
                        enemyTeam.win
                          ? ` ${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                          : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                      }`}
                    >
                      <div className="relative">
                        {partObj.item0 ? (
                          <img
                            src={`${process.env.REACT_APP_ITEM_URL}${partObj.item0}.png`}
                            alt={partObj.item0}
                            className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                          />
                        ) : null}
                      </div>
                    </div>
                    <div
                      className={`item ml-0 inline-block w-[22px] h-[22px] align-middle mx-[1px] rounded ${
                        enemyTeam.win
                          ? ` ${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                          : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                      }`}
                    >
                      <div className="relative">
                        {partObj.item1 ? (
                          <img
                            src={`${process.env.REACT_APP_ITEM_URL}${partObj.item1}.png`}
                            alt={partObj.item1}
                            className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                          />
                        ) : null}
                      </div>
                    </div>
                    <div
                      className={`item ml-0 inline-block w-[22px] h-[22px] align-middle mx-[1px] rounded ${
                        enemyTeam.win
                          ? ` ${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                          : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                      }`}
                    >
                      <div className="relative">
                        {partObj.item2 ? (
                          <img
                            src={`${process.env.REACT_APP_ITEM_URL}${partObj.item2}.png`}
                            alt={partObj.item2}
                            className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                          />
                        ) : null}
                      </div>
                    </div>
                    <div
                      className={`item ml-0 inline-block w-[22px] h-[22px] align-middle mx-[1px] rounded ${
                        enemyTeam.win
                          ? ` ${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                          : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                      }`}
                    >
                      <div className="relative">
                        {partObj.item3 ? (
                          <img
                            src={`${process.env.REACT_APP_ITEM_URL}${partObj.item3}.png`}
                            alt={partObj.item3}
                            className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                          />
                        ) : null}
                      </div>
                    </div>
                    <div
                      className={`item ml-0 inline-block w-[22px] h-[22px] align-middle mx-[1px] rounded ${
                        enemyTeam.win
                          ? ` ${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                          : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                      }`}
                    >
                      <div className="relative">
                        {partObj.item4 ? (
                          <img
                            src={`${process.env.REACT_APP_ITEM_URL}${partObj.item4}.png`}
                            alt={partObj.item4}
                            className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                          />
                        ) : null}
                      </div>
                    </div>
                    <div
                      className={`item ml-0 inline-block w-[22px] h-[22px] align-middle mx-[1px] rounded ${
                        enemyTeam.win
                          ? ` ${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                          : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                      }`}
                    >
                      <div className="relative">
                        {partObj.item5 ? (
                          <img
                            src={`${process.env.REACT_APP_ITEM_URL}${partObj.item5}.png`}
                            alt={partObj.item5}
                            className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                          />
                        ) : null}
                      </div>
                    </div>
                    <div
                      className={`item ml-0 inline-block w-[22px] h-[22px] align-middle mx-[1px] rounded ${
                        enemyTeam.win
                          ? ` ${isDarkMode ? `bg-[#2F436E]` : `bg-[#B3CDFF]`}`
                          : `${isDarkMode ? `bg-[#703C47]` : `bg-[#FFBAC3]`}`
                      }`}
                    >
                      <div className="relative">
                        {partObj.item6 ? (
                          <img
                            src={`${process.env.REACT_APP_ITEM_URL}${partObj.item6}.png`}
                            alt={partObj.item6}
                            className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                          />
                        ) : (
                          <div
                            className={`no-item w-22 h-22 rounded ${
                              enemyTeam.win ? `bg-[#B3CDFF]` : "bg-[#FFBAC3]"
                            }`}
                          ></div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(EnemyScoreBoard);
