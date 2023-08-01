import React, { useEffect, useState } from "react";
import { getPuuId, GetRanks } from "../api/Champion";
import { UserRank } from "../api/Utils";
import { RankType, RankT } from "./Utils";

const Rank = () => {
  const [puuId, setPuuId] = useState<string | null>(null);
  const [info, setInfo] = useState<UserRank[] | []>([]);
  useEffect(() => {
    getPuuId().then((id: string) => setPuuId(id));
  }, []);

  useEffect(() => {
    GetRanks(puuId).then((res: UserRank[]) =>
      setInfo(res.filter((infos) => infos.queueType !== "CHERRY"))
    );
  }, [puuId]);
  return (
    <div>
      {RankType.map((rank: RankT, index: number) => (
        <div className=" mt-2 rounded bg-white">
          <div className="header leading-9 px-3 text-sm justify-between">
            <span key={index}>{rank.name}</span>
          </div>
        </div>
      ))}

      <div>
        {info.map((obj: UserRank, index: number) => (
          <div
            className="content flex items-center p-3 border-t border-[#ebeef1]"
            key={index}
          >
            <div className="img relative">
              <img
                src="https://opgg-static.akamaized.net/images/medals_new/diamond.png?image=q_auto,f_webp,w_144&v=1690782010896"
                alt="tier"
                className="bg-[#F7F7F9] rounded-[50%] h-[72px] min-w-[72px] w-[100%]"
              />
            </div>
            <div className="info flex-1 relative ml-4">
              <div className="tier leading-[26px] w-[120px] text-xl font-bold text-[#202D37]">
                {obj.tier} {obj.rank}
              </div>
              <div className="lp leading-4 text-xs text-[#758592]">30 LP</div>
            </div>
            <div className="win-lose container text-xs text-right text-[#9AA4AF]">
              <div className="win-lose leading-6">
                {obj.wins}승 {obj.losses}패
              </div>
              <div className="ratio mt-[2px] leading-4">
                승률 {((obj.wins / (obj.wins + obj.losses)) * 100).toFixed(0)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Rank;
