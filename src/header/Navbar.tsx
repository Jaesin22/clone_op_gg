import React from "react";
import { routeList } from "./Utils";

const Navbar = () => {
  return (
    <div className="flex h-11 bg-[#5383E8] pt-1">
      <nav>
        <ul className="flex list-none ml-20">
          {routeList.map((obj, index) => (
            <li key={index} className="text-[#B3CDFF] hover:text-white">
              <a
                data-key={obj.keys}
                className="flex h-11 justify-center items-center box-border
                 leading-[22px] hover:border-b-[3px] hover:border-b-[#ffffff] pt-[9px] pb-2.5"
                href="#!"
              >
                <span className="text-base m-2.5 pb-2.5 text-center justify-center">
                  {obj.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
