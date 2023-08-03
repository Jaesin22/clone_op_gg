import React from "react";

const Record = () => {
  return (
    <div className="mt-2">
      <li className="relative mb-2 list-none">
        <div className="flex h-24 rounded border-l-[6px] border-[#e84057] bg-[#FFF1F3]">
          <div className="content flex h-full justify-between flex-grow">
            <div className="game-content flex h-24 items-center content-between pl-3">
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
            <div className="info">
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
                <div
                  className="stats flex flex-col items-start w-[140px] text-[11px] mt-0.5 pl-2 text-[#758592]
                 before:absolute before:top-1 before:w-[1px]
                 before:h-[62px] before:bg-[#FFD8D9] before:content"
                >
                  <div className="p-kill text-red-600 ml-1.5">
                    <div className="relative">킬관여 88%</div>
                  </div>
                  <div className="ward ml-1.5">제어 와드 0</div>
                  <div className="cs">
                    <div className="relative ml-1.5">CS 29 (1.9)</div>
                  </div>
                  <div className="average-tier font-bold ml-1.5">
                    <div className="relative">Emerald 4</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-1.5">
                <div className="items flex">
                  <ul className="flex">
                    <li className="rounded bg-[#FFBAC3] mx-[1px] w-[22px] h-[22px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/item/4628.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="지평선의 초점"
                          className="w-[22px] h-[22px] rounded"
                        />
                      </div>
                    </li>
                    <li className="rounded bg-[#FFBAC3] mx-[1px] w-[22px] h-[22px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/item/4628.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="지평선의 초점"
                          className="w-[22px] h-[22px] rounded"
                        />
                      </div>
                    </li>
                    <li className="rounded bg-[#FFBAC3] mx-[1px] w-[22px] h-[22px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/item/4628.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="지평선의 초점"
                          className="w-[22px] h-[22px] rounded"
                        />
                      </div>
                    </li>
                    <li className="rounded bg-[#FFBAC3] mx-[1px] w-[22px] h-[22px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/item/4628.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="지평선의 초점"
                          className="w-[22px] h-[22px] rounded"
                        />
                      </div>
                    </li>
                    <li className="rounded bg-[#FFBAC3] mx-[1px] w-[22px] h-[22px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/item/4628.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="지평선의 초점"
                          className="w-[22px] h-[22px] rounded"
                        />
                      </div>
                    </li>
                    <li className="rounded bg-[#FFBAC3] mx-[1px] w-[22px] h-[22px]">
                      <div className="relative">
                        <img
                          src="https://opgg-static.akamaized.net/meta/images/lol/item/4628.png?image=q_auto,f_webp,w_44&v=1690894796459"
                          alt="지평선의 초점"
                          className="w-[22px] h-[22px] rounded"
                        />
                      </div>
                    </li>
                  </ul>
                  <div className="ward w-[22px] h-[22px] 0.5 mr-1 bg-[#FFBAC3] rounded-[50%]">
                    <div className="relative">
                      <img
                        src="https://opgg-static.akamaized.net/meta/images/lol/item/2052.png?
                        image=q_auto,f_webp,w_44&amp;v=1690894796459"
                        alt="포로 간식"
                        className="rounded-[50%] max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="particpants flex">
              <ul className="mr-2 mt-0.5">
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="mr-2 mt-0.5">
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
                <li className="flex items-center w-[88px] h-[18px] text-left">
                  <div className="icon relative inline-block align-middle mr-1">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690894796459"
                      alt="쓰레쉬"
                      className="block h-4 w-4 rounded"
                    />
                  </div>
                  <div className="name inline-block max-w-[60px] align-middle text-[#758592]">
                    <a
                      href="!#"
                      className="text-xs block overflow-hidden bg-inherit text-ellipsis"
                    >
                      Ehdzl
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="action relative w-10 rounded overflow-hidden">
            <button className="detail w-10 h-24 bg-[#FFD8D9]">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-red.svg?v=1690894796459"
                alt="more"
                className="w-6 h-6 absolute bottom-2 left-2"
              />
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Record;
