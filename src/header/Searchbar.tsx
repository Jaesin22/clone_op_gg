import React, { useState } from "react";

const Searchbar = () => {
  const [name, setName] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className="flex h-12 bg-[#5383E8] justify-center">
      <div className="">
        <img
          src="https://opgg-static.akamaized.net/logo/20230717181253.4193b693203f4c9ca15ec82267ba2682.png?image=q_auto,f_webp,w_auto&v=1690447901880"
          className=" max-w-full max-h-12"
          alt="napiri"
        />
      </div>
      <div className="ml-5 flex items-center justify-center">
        <form>
          <div className="float-left ">
            <button
              type="button"
              className="bg-[#ecf2ff] text-[#5882dd] p-1 text-xs h-8 rounded-l-md"
            >
              <span className="ml-2">KR</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#5882dd"
                className="flex w-4 h-4 float-right ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex">
            <label htmlFor="search" className="hidden">
              Search
            </label>
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="소환사명, 소환사명, ..."
              value={name}
              className="float-right w-[840px] h-8 text-xs px-2.5"
              onChange={onChange}
            />
            <button
              type="submit"
              className="bg-white text-[#5882dd] text-xl font-black rounded-r-md"
            >
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-gg.svg"
                className="w-9 h-8 mr-3"
                alt="search"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
