import { useState, useEffect } from "react";
import { GameData, participants } from "../main/Utils";
import { Team } from "../main/Utils";
import { Champions } from "./Utils";

const useTeamInfo = (gameData: GameData[], puuId: string) => {
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [kill, setKill] = useState(0);
  const [death, setDeath] = useState(0);
  const [assist, setAssist] = useState(0);
  const [teamKill, setTeamKill] = useState(0);
  const [champion, setChampion] = useState<Champions[]>([]);
  const [positionCounts, setPositionCounts] = useState({
    TOP: 0,
    JUNGLE: 0,
    MIDDLE: 0,
    UTILITY: 0,
    BOTTOM: 0,
  });

  useEffect(() => {
    calculateVictory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData]);

  const calculateVictory = () => {
    let winCount = 0;
    let loseCount = 0;
    let killCount = 0;
    let deathCount = 0;
    let assistCount = 0;
    let teamKillCount = 0;
    let teamId = 0;

    gameData?.forEach((data: any) => {
      data.participants.forEach((participant: participants) => {
        if (participant.puuid === puuId) {
          participant.win ? winCount++ : loseCount++;
          killCount += participant.kills;
          deathCount += participant.deaths;
          assistCount += participant.assists;
          teamId = participant.teamId;

          const position = participant.individualPosition;
          if (positionCounts.hasOwnProperty(position)) {
            setPositionCounts((prevCounts: any) => ({
              ...prevCounts,
              [position]: prevCounts[position] + 1,
            }));
          }
          const championData: any = {
            championName: participant.championName,
            championWinCount: participant.win ? 1 : 0,
            championLoseCount: !participant.win ? 1 : 0,
            championKill: participant.kills,
            championDeath: participant.deaths,
            championAssist: participant.assists,
            championLane: participant.lane,
            count: 1,
          };

          setChampion((prevChampion: Champions[]) => {
            const existingChampionIndex = prevChampion.findIndex(
              (champion: Champions) =>
                champion.championName === championData.championName
            );

            if (existingChampionIndex !== -1) {
              const updatedChampion = prevChampion.map(
                (champion: Champions, index: number) => {
                  if (index === existingChampionIndex) {
                    return {
                      ...champion,
                      count: (champion.count += 1),
                      championWinCount:
                        champion.championWinCount +
                        championData.championWinCount,
                      championLoseCount:
                        champion.championLoseCount +
                        championData.championLoseCount,
                      championKill:
                        champion.championKill + championData.championKill,
                      championDeath:
                        champion.championDeath + championData.championDeath,
                      championAssist:
                        champion.championAssist + championData.championAssist,
                    };
                  }
                  return champion;
                }
              );

              // 정렬
              const sortedChampion = [...updatedChampion].sort(
                (a, b) => b.count - a.count
              );
              return sortedChampion;
            }

            // 새로운 챔피언 데이터 추가
            const updatedChampion = [...prevChampion, championData];

            return updatedChampion;
          });
        }
      });
      const myTeam = data.teams.find((team: Team) => team.teamId === teamId);
      teamKillCount += myTeam.objectives.champion.kills;
    });
    setWin(winCount);
    setLose(loseCount);
    setKill(killCount);
    setDeath(deathCount);
    setAssist(assistCount);
    setTeamKill(teamKillCount);
  };

  return {
    win,
    lose,
    calculateVictory,
    kill,
    death,
    assist,
    teamKill,
    champion,
    positionCounts,
  };
};

export default useTeamInfo;
