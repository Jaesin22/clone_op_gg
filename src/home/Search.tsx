import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetData } from "../api/Champion";

const Search = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    GetData(encodeURI(name));
    navigate(`/summoner/${name}`, { state: { name: name } });
  };
  return (
    <div className="relative w-[800px] my-0 mx-auto text-center">
      <form
        className="flex h-[60px] items-center relative rounded-[30px] text-left bg-white shadow-xl"
        onSubmit={onSubmitHandler}
      >
        <div className="relative h-10 pl-8 mr-2 pr-2">
          <label
            htmlFor="searchHome"
            className="label block text-xs leading-4 font-bold text-[#202D37] mb-1"
          >
            Search
          </label>
          <input
            id="SearchHome"
            name="search"
            autoComplete="off"
            type="text"
            placeholder="소환사명, 소환사명, ..."
            className=" bg-white w-[480px] border-0 box-border text-sm leading-5 text-[#202D37] outline-none"
            onChange={onChange}
            value={name}
          />
        </div>
        <button type="submit" className="flex ml-auto mr-6">
          <img
            src="https://s-lol-web.op.gg/images/icon/icon-gg.svg"
            className="w-[42px] box-content"
            alt="logo"
          />
        </button>
      </form>
    </div>
  );
};

export default Search;
