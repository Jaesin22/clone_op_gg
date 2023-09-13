import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetData } from "../../api/Champion";
import { useTheme } from "../../contexts/ThemeProvider";
import History from "../header/History";
import SearchHooks from "../../hooks/SearchHooks";

const Search = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [showHistory, setShowHistory] = useState(false);
  const { handleAddKeyword } = SearchHooks();

  const handleHistory = () => {
    setShowHistory(!showHistory);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    // 값이 없거나 공백일 경우 제출하지 않음
    if (!name.trim()) {
      return;
    }

    handleAddKeyword(name);
    GetData(encodeURI(name));
    navigate(`/summoner/${name}`, { state: { name: name } });
    setShowHistory(false);
  };

  // const handleClose = () => {
  //   setShowHistory(false);
  // };

  return (
    <div className="relative w-[800px] mx-auto text-center">
      <form
        className={`flex h-[60px] items-center relative rounded-[30px] text-left ${
          isDarkMode ? `bg-[#31313C]` : `bg-white`
        }  shadow-xl`}
        onSubmit={onSubmitHandler}
      >
        <div className="relative h-10 pl-8 mr-2 pr-2">
          <label
            htmlFor="searchHome"
            className={`label block text-xs leading-4 font-bold ${
              isDarkMode ? `text-white` : `text-[#202D37]`
            }  mb-1`}
          >
            Search
          </label>
          <input
            id="SearchHome"
            name="search"
            autoComplete="off"
            type="text"
            placeholder="소환사명, 소환사명, ..."
            className={` w-[480px] border-0 box-border text-sm leading-5  outline-none
             ${
               isDarkMode
                 ? `bg-[#31313C] text-white`
                 : `bg-white text-[#202D37]`
             }`}
            onChange={onChange}
            value={name}
            onClick={handleHistory}
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
      {showHistory && (
        <div className="absolute mx-1 ml-[30px]">
          <div
            style={{
              position: "fixed",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
            }}
            onClick={handleHistory}
          />
          <History />
        </div>
      )}
    </div>
  );
};

export default Search;
