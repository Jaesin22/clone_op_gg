import React, { useEffect, useState } from "react";
const History = () => {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  //keyword에 변화가 일어날 때만 렌더링
  useEffect(() => {
    // array 타입을 string 형태로 바꾸기 위해 json.stringify를 사용
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  return (
    <div className="static">
      <div
        className="mt-[2px] absolute top-[calc(100% + 10px)]
         w-2/3 border-b rounded shadow-sm z-50 overflow-hidden"
      >
        <div className="bg-white">
          <div>
            <button className="bg-white h-[34px] w-1/2 cursor-pointer">
              최근 검색
            </button>
            <button className="bg-[#9AA4AF] h-[34px] w-1/2 cursor-pointer">
              즐겨찾기
            </button>
          </div>
          <ul className="mt-1 mb-1 list-none p-0">
            <li className="py-2 px-4 flex box-border items-center list-none hover:bg-[#F7F7F9]">
              <a
                className="summoner flex flex-1 text-left items-center overflow-hidden"
                href="www.naver.com"
              >
                <span className="summoner-name text-sm color">형은 무결점</span>
              </a>
              <div className="relative">
                <input
                  className=" hidden bg-transparent appearance-none"
                  type="checkbox"
                />
                <label className="favorite-summoner-label block static h-6 w-6 m-0 align-middle border-0">
                  <img
                    src="https://s-lol-web.op.gg/images/icon/icon-bookmark.svg"
                    alt="즐겨찾기"
                  />
                </label>
              </div>
              <button type="button" className="close-btn ml-2">
                <img
                  src="https://s-lol-web.op.gg/images/icon/icon-close-small.svg?v=1692872564027"
                  className="w-6 h-6"
                  alt="최근검색 지우기"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
