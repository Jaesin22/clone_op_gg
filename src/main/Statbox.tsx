import React from "react";

const Statbox = () => {
  return (
    <div className="stats-box flex text-left bg-white py-2 px-3 box-border border-t h-[132px]">
      <div className="stats w-[222px]">
        <div className="win-lose leading-4 text-xs text-[#758592]">
          20전 11승 9패
        </div>
      </div>
    </div>
  );
};

export default Statbox;
