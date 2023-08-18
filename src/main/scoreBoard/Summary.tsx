import { Team, participants } from "../Utils";
import useSummonerData from "../../hooks/useSummonerData";

const Summary = ({ GameData }: any) => {
  const { puuId } = useSummonerData();

  const participantData = GameData.participants.filter(
    (partObj: participants) => partObj.puuid === puuId
  );
  const myTeam = GameData.teams.find(
    (team: Team) => team.teamId === participantData[0]?.teamId
  );

  const enemyTeam = GameData.teams.find(
    (team: Team) => team.teamId !== participantData[0]?.teamId
  );

  return (
    <div className="summary flex justify-between items-center bg-gray-100 border-t border-t-gray-200">
      <div className="team pr-0 pl-4 text-left border-l">
        <div className="object ml-0 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src={`https://s-lol-web.op.gg/images/icon/icon-baron${
                myTeam.win ? `` : "-r"
              }.svg?v=1691482879292`}
              alt="바론"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">
              {myTeam.objectives.baron.kills}
            </span>
          </div>
        </div>
        <div className="object ml-4 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src={`https://s-lol-web.op.gg/images/icon/icon-dragon${
                myTeam.win ? `` : "-r"
              }.svg?v=1691482879292`}
              alt="드래곤"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">
              {myTeam.objectives.dragon.kills}
            </span>
          </div>
        </div>
        <div className="object ml-4 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src={`https://s-lol-web.op.gg/images/icon/icon-tower${
                myTeam.win ? `` : "-r"
              }.svg?v=1691482879292`}
              alt="타워"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">
              {myTeam.objectives.tower.kills}
            </span>
          </div>
        </div>
      </div>
      <div className="summary-graph flex-grow-0 flex-shrink basis-[405px]">
        <div className="pt-2 pb-1 flex justify-center px-2 text-[10px] text-white">
          <div className="graph relative flex flex-grow-0 flex-shrink basis-[405px] items-center mx-[3px]">
            <div className="title ml-1 flex-1 h-4 absolute top-0 left-[calc(50%-30px)] text-center w-[60px] leading-4">
              Total kill
            </div>
            <div className="data-left absolute top-0 left-2 w-10 leading-4 text-left ml-1 flex-1 h-4">
              {myTeam.objectives.champion.kills}
            </div>
            <div className="data-right flex-1 h-4 absolute top-0 right-2 w-10 leading-4 text-right">
              {enemyTeam.objectives.champion.kills}
            </div>
            <div
              className={`lose flex-grow flex-shrink ${
                myTeam.win ? `bg-[#5383E8]` : `bg-red-500`
              } h-4`}
              style={{
                width: `${(
                  (myTeam.objectives.champion.kills /
                    (myTeam.objectives.champion.kills +
                      enemyTeam.objectives.champion.kills)) *
                  100
                ).toFixed()}%`,
              }}
            ></div>
            <div
              className={`win flex-grow flex-shrink ${
                !myTeam.win ? `bg-[#5383E8]` : `bg-red-500`
              } h-4`}
              style={{
                width: `${(
                  (enemyTeam.objectives.champion.kills /
                    (myTeam.objectives.champion.kills +
                      enemyTeam.objectives.champion.kills)) *
                  100
                ).toFixed()}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="pt-1 pb-2 flex justify-center px-2 text-[10px] text-white">
          <div className="graph relative flex flex-grow-0 flex-shrink basis-[405px] items-center mx-[3px]">
            <div className="title ml-1 flex-1 h-4 absolute top-0 left-[calc(50%-30px)] text-center w-[60px] leading-4">
              Total Gold
            </div>
            <div className="data-left absolute top-0 left-2 w-10 leading-4 text-left ml-1 flex-1 h-4">
              11
            </div>
            <div className="data-right flex-1 h-4 absolute top-0 right-2 w-10 leading-4 text-right">
              19
            </div>
            <div
              className={`win flex-grow flex-shrink basis-[63%] ${
                myTeam.win ? `bg-[#5383E8]` : `bg-red-500`
              } h-4`}
            ></div>
            <div
              className={`win flex-grow flex-shrink basis-[63%] ${
                !myTeam.win ? `bg-[#5383E8]` : `bg-red-500`
              } h-4`}
            ></div>
          </div>
        </div>
      </div>
      <div className="team pr-4 table-cell h-[30px] align-middle text-right leading-[30px]">
        <div className="object ml-0 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src={`https://s-lol-web.op.gg/images/icon/icon-baron${
                !myTeam.win ? `` : "-r"
              }.svg?v=1691482879292`}
              alt="바론"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">
              {enemyTeam.objectives.baron.kills}
            </span>
          </div>
        </div>
        <div className="object ml-4 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src={`https://s-lol-web.op.gg/images/icon/icon-dragon${
                !myTeam.win ? `` : "-r"
              }.svg?v=1691482879292`}
              alt="드래곤"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">
              {enemyTeam.objectives.dragon.kills}
            </span>
          </div>
        </div>
        <div className="object ml-4 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src={`https://s-lol-web.op.gg/images/icon/icon-tower${
                !myTeam.win ? `` : "-r"
              }.svg?v=1691482879292`}
              alt="타워"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">
              {enemyTeam.objectives.tower.kills}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
