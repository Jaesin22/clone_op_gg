import React from "react";

const Rank = () => {
  return (
    <div className=" mt-2 rounded bg-white">
      <div className="header leading-9 px-3 text-sm justify-between">
        <span>솔로랭크</span>
      </div>
      <div className="content flex items-center p-3 border-t border-[#ebeef1]">
        <div className="img relative">
          <img
            src="https://opgg-static.akamaized.net/images/medals_new/diamond.png?image=q_auto,f_webp,w_144&v=1690782010896"
            alt="tier"
            className="bg-[#F7F7F9] rounded-[50%] h-[72px] min-w-[72px] w-[100%]"
          />
        </div>
        <div className="info flex-1 relative ml-4">
          <div className="tier leading-[26px] w-[120px] text-xl font-bold text-[#202D37]">
            Diamond 3
          </div>
          <div className="lp leading-4 text-xs text-[#758592]">30 LP</div>
        </div>
        <div className="win-lose container text-xs text-right text-[#9AA4AF]">
          <div className="win-lose leading-6">6승 6패</div>
          <div className="ratio mt-[2px] leading-4">승률 50%</div>
        </div>
      </div>
    </div>
  );
};
export default Rank;
