import React from "react";
import { MainHeader } from "./Utils";

const MainTop = () => {
  return (
    <div className="flex justify-between p-1 bg-white border-[#ebeef1] rounded">
      <ul className="flex h-7">
        {MainHeader.map((obj, index) => (
          //<li key={index} className={`text-[${obj.color}]`}>
          <li key={index} className={`text-${obj.color}`}>
            <button
              className={`block py-1 px-3 rounded text-sm h-7 box-border ${
                obj.selected
                  ? "bg-[#ECF2FF] text-[#4171D6] font-bold"
                  : `hover:bg-[#ebecf3] text-${obj.color}`
              }`}
            >
              <img
                src={`${obj.icon ? `${obj.icon}` : " "}`}
                className={`${
                  obj.icon ? "float-left mt-2.5 mr-1.5" : "hidden"
                }`}
                alt="icon"
              />
              <span className={`text-${obj.color}`}>{obj.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MainTop;
