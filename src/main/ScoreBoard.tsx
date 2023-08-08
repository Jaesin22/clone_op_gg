import Summary from "./scoreBoard/Summary";

const ScoreBoard = () => {
  return (
    <div className="mt-1">
      <div className="block ">
        <table className="rounded-t w-[740px]">
          <thead className=" table-header-group align-middle border-inherit bg-white ">
            <tr className=" table-row border-inherit align-middle w-[740px]">
              <th colSpan={4} className="pl-[15px] text-left">
                <span className="font-xs text-[#4171D6]">승리</span>
                (레드팀)
              </th>
              <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
                KDA
              </th>
              <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
                피해량
              </th>
              <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
                와드
              </th>
              <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
                CS
              </th>
              <th className=" h-8 text-[#9AA4AF] text-xs font-normal text-center border-b border-b-[#D5E3FF]">
                아이템
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#ECF2FF] border-t border-[#d5e3ff]">
            <tr className="table-row border-inherit align-middle">
              <td className="champion pl-2.5 pr-1">
                <a href="!#" className="relative block">
                  <div className="relative w-8">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/champion/Quinn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_64&amp;v=1691465306255"
                      alt="퀸"
                      className="w-8 h-8 rounded-[50%] block"
                    />
                    <div className="level absolute -bottom-[3px] -left-[3px] w-[15px] h-[15px] bg-[#202d37] rounded-[50%] text-white font-[10px] text-center leading-[15px]">
                      16
                    </div>
                  </div>
                </a>
              </td>
              <td className="spells pt-1 pb-[3px] align-middle">
                <div className="relative w-4 h-4">
                  <img
                    src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerDot.png?
                    image=q_auto,f_webp,w_auto&amp;v=1691465306255"
                    alt="점화"
                    className="w-4 h-4 rounded"
                  />
                </div>
                <div className="relative w-4 h-4">
                  <img
                    src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerDot.png?
                    image=q_auto,f_webp,w_auto&amp;v=1691465306255"
                    alt="점화"
                    className="w-4 h-4 rounded"
                  />
                </div>
              </td>
              <td className="runes pt-1 pb-[3px] align-middle w-4 h-4">
                <div className="relative mb-0.5 bg-black rounded-[50%]">
                  <img
                    src="https://opgg-static.akamaized.net/meta/images/lol/perk/8021.png?
                image=q_auto,f_webp,w_auto&amp;v=1691465306255"
                    alt="기민한 발놀림"
                    className="block h-4 w-4 rounded-[50%]"
                  />
                </div>
                <div className="relative mb-0.5 w-4 h-4">
                  <img
                    src="https://opgg-static.akamaized.net/meta/images/lol/perk/8021.png?
                image=q_auto,f_webp,w_auto&amp;v=1691465306255"
                    alt="기민한 발놀림"
                    className="block h-4 w-4 rounded-[50%]"
                  />
                </div>
              </td>
              <td className="name pl-[5px] whitespace-nowrap overflow-hidden text-ellipsis">
                <a href="!#" className=" leading-4 text-xs text-[#202D37]">
                  나폴레옹은죽었다
                </a>
                <div className="tier text-[11px] leading-[14px] text-[#9AA4AF]">
                  <div className="relative capitalize">Emerald 1</div>
                </div>
              </td>
              <td className="kda text-center whitespace-nowrap">
                <div className="leading-[14px] text-[11px] text-[#758592]">
                  12 / 6 / 6<div className="relative inline">(37%)</div>
                </div>
                <div className="text-[11px] font-bold text-[#00A399]">
                  3.00:1
                </div>
              </td>
              <td className="damage pt-1 pb-[3px] align-middle">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="dealt text-center text-[11px] leading-[14px]">
                      34,492
                    </div>
                    <div className="progress w-[50px] h-1.5 mt-1 mx-auto bg-white">
                      <div className="fill w-full h-full bg-red-500"></div>
                    </div>
                  </div>
                  <div className="relative block">
                    <div className="taken text-center text-gray-500 text-[11px] leading-[14px] ml-2">
                      21,592
                    </div>
                    <div className="progress--taken w-[50px] h-1.5 mt-1 mr-auto ml-2 bg-white">
                      <div className="fill w-[53%] h-full bg-gray-400"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="ward text-center text-[11px] text-gray-500">
                <div className="relative block">
                  <div className="block">1</div>
                  <div className="block">8 / 0</div>
                </div>
              </td>
              <td className="ward text-center text-[11px] text-gray-500 pt-1 pb-[3px] align-middle">
                <div className="text-center text-gray-500 text-11px">191</div>
                <div className="text-center text-gray-500 text-11px">
                  분당 6.9
                </div>
              </td>
              <td className="items text-center pt-1 pb-[3px] align-middle">
                <div className="item ml-0 inline-block w-[22px] h-[22px] align-middle">
                  <div className="relative">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/item/1043.png?
                        image=q_auto,f_webp,w_44&amp;v=1691465306255"
                      alt="곡궁"
                      className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                    />
                  </div>
                </div>
                <div className="item ml-0 inline-block w-[22px] h-[22px] align-middle">
                  <div className="relative">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/item/1043.png?
                        image=q_auto,f_webp,w_44&amp;v=1691465306255"
                      alt="곡궁"
                      className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                    />
                  </div>
                </div>
                <div className="item ml-0 inline-block w-[22px] h-[22px] align-middle">
                  <div className="relative">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/item/1043.png?
                        image=q_auto,f_webp,w_44&amp;v=1691465306255"
                      alt="곡궁"
                      className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                    />
                  </div>
                </div>
                <div className="item ml-0 inline-block w-[22px] h-[22px] align-middle">
                  <div className="relative">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/item/1043.png?
                        image=q_auto,f_webp,w_44&amp;v=1691465306255"
                      alt="곡궁"
                      className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                    />
                  </div>
                </div>
                <div className="item ml-0 inline-block w-[22px] h-[22px] align-middle">
                  <div className="relative">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/item/1043.png?
                        image=q_auto,f_webp,w_44&amp;v=1691465306255"
                      alt="곡궁"
                      className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                    />
                  </div>
                </div>
                <div className="item ml-0 inline-block w-[22px] h-[22px] align-middle">
                  <div className="relative">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/item/1043.png?
                        image=q_auto,f_webp,w_44&amp;v=1691465306255"
                      alt="곡궁"
                      className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                    />
                  </div>
                </div>
                <div className="item ml-0 inline-block w-[22px] h-[22px] align-middle">
                  <div className="relative">
                    <img
                      src="https://opgg-static.akamaized.net/meta/images/lol/item/1043.png?
                        image=q_auto,f_webp,w_44&amp;v=1691465306255"
                      alt="곡궁"
                      className="h-full w-full rounded-[3px] max-w-full align-middle border-0"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Summary />
    </div>
  );
};

export default ScoreBoard;
