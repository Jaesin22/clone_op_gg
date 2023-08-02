import React from "react";

const Record = () => {
  return (
    <div className="mt-2">
      <li className="relative mb-2 list-none">
        <div className="flex h-24 rounded border-l-[6px] border-[#e84057] bg-[#FFF1F3]">
          <div className="content flex h-full justify-between flex-grow flex-col">
            <div className="game-content flex h-24 items-center content-between pr-2 pl-3">
              <div className="game w-[108px] text-[#758592] justify-center flex-col leading-4">
                <div className="type font-bold text-[#D31A45]">
                  무작위 총력전
                </div>
                <div className="time-stamp relative">2일 전</div>
                <div className="bar w-12 h-[1px] mt-2 mr-0 mb-1 bg-[#D5E3FF]"></div>
                <div className="result font-bold">승리</div>
                <div className="length">27분 1초</div>
              </div>
            </div>
            <div className="info flex-auto">
              <div className="flex">
                <div className="champion flex items-center">
                  <div className="icon">
                    <a href="!#" className="relative block w-12 h-12">
                      <img
                        src="https://opgg-static.akamaized.net/meta/images/lol/champion/JarvanIV.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&v=1690894796459"
                        className="rounded-[50%]"
                        alt="character"
                      />
                      <span
                        className="champion-level absolute right-0 bottom-0 flex items-center
                    justify-center w-5 h-5 text-xs rounded-[50%] text-white bg-[#202d37]"
                      >
                        15
                      </span>
                    </a>
                  </div>
                  <div className="spells ml-1">
                    <div className="spell w-[22px] h-[22px] mb-[2px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="spell"
                        />
                      </div>
                    </div>
                    <div className="spell w-[22px] h-[22px] mb-[2px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="spell"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="runes ml-[2px]">
                    <div className="rune w-[22px] h-[22px] mb-[2px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/perk/8128.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="rune"
                        />
                      </div>
                    </div>
                    <div className="rune w-[22px] h-[22px] mb-[2px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/perkStyle/8000.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="rune"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kda flex flex-col justify-center pr-3 ml-3 w-[107px]">
                  <div className="k-d-a leading-[22px] text-[15px] text-[#9AA4AF]">
                    <span className="font-bold text-black">10</span>
                    {" / "}
                    <span className="font-bold text-red-600">5</span>
                    {" / "}
                    <span className="font-bold text-[#202D37]">26</span>
                  </div>
                  <div className="ratio leading-4 text-[#758592]"></div>
                  <span className="leading-4 text-[#758592]">7.20.1 평점</span>
                </div>
                <div className="stats flex flex-col items-start w-[140px] text-[11px] pl-2 text-[#758592]">
                  <div className="line relative top-0 left-0 w-[1px] h-full bg-[#FFD8D9]"></div>
                  <div className="p-kill text-red-600">
                    <div className="relative">킬관여 88%</div>
                  </div>
                  <div className="ward">제어 와드 0</div>
                  <div className="cs">
                    <div className="relative">CS 29 (1.9)</div>
                  </div>
                  <div className="average-tier font-bold">
                    <div className="relative">Emerald 4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Record;
