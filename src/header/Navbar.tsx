import React from "react";
import { routeList } from "./Utils";

const Navbar = () => {
  return (
    <div className="flex h-10 bg-[#5383E8]">
      <nav>
        <ul className="flex list-none ml-20">
          {routeList.map((obj, index) => (
            <li key={index} className="text-[#B3CDFF]">
              <a
                data-key={obj.keys}
                className="flex h-11 justify-center items-center"
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
