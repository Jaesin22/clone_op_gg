import React from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import { SummaryList } from "./Utils";
import useSummonerData from "../../hooks/useSummonerData";

const SummaryHeader = () => {
  const { isDarkMode } = useTheme();
  const { data } = useSummonerData();

  if (data?.name === "AxiosError") {
    return <div></div>;
  }

  return (
    <div
      className={`flex h-[45px] w-full ${
        isDarkMode
          ? `bg-[#31313C] border-t border-[#1C1C1F]`
          : `bg-white border-t`
      }  `}
    >
      <ul className="flex w-[1080px] m-auto">
        {SummaryList.map((obj, index) => (
          //<li key={index} className={`text-[${obj.color}]`}>
          <li
            key={index}
            className={`text-${obj.color}
            ${
              isDarkMode
                ? obj.color === "#000000"
                  ? `text-white`
                  : `text-[${obj.color}]`
                : `text-[${obj.color}]`
            }
          `}
          >
            <a
              className={`h-9 rounded text-center px-6 block text-sm min-w-[60px] mr-1 leading-9 ${
                obj.selected
                  ? `${
                      isDarkMode
                        ? `text-white bg-[#515163]`
                        : `bg-[#ECF2FF] text-[#4171D6]`
                    } font-bold`
                  : `${
                      isDarkMode ? `hover:bg-[#282830]` : `hover:bg-[#ebecf3]`
                    } text-${obj.color}`
              }`}
              href="#!"
            >
              <img
                src={`${obj.icon ? `${obj.icon}` : " "}`}
                className={`${
                  obj.icon ? "float-left mt-2.5 mr-1.5" : "hidden"
                }`}
                alt="icon"
              />
              <span className={`text-${obj.color}`}>{obj.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryHeader;
