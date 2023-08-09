const Summary = () => {
  return (
    <div className="summary flex justify-between items-center bg-gray-100 border-t border-t-gray-200">
      <div className="team pr-0 pl-4 text-left border-l">
        <div className="object ml-0 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src="https://s-lol-web.op.gg/images/icon/icon-baron-r.svg?v=1691482879292"
              alt="바론"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">0</span>
          </div>
        </div>
        <div className="object ml-4 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src="https://s-lol-web.op.gg/images/icon/icon-dragon-r.svg?v=1691482879292"
              alt="바론"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">0</span>
          </div>
        </div>
        <div className="object ml-4 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src="https://s-lol-web.op.gg/images/icon/icon-tower-r.svg?v=1691482879292"
              alt="바론"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">0</span>
          </div>
        </div>
      </div>
      <div className="summary-graph flex-grow-0 flex-shrink basis-[405px]">
        <div className="pt-2 pb-1 flex justify-center px-2 text-[10px] text-white">
          <div className="graph relative flex flex-grow-0 flex-shrink basis-[405px] items-center mx-[3px]">
            <div className="title ml-1 flex-1 h-4 absolute top-0 left-[calc(50%-30px)] text-center w-[60px] leading-4">
              Total kill
            </div>
            <div className="data-left absolute top-0 left-2 w-10 leading-4 text-left ml-1 flex-1 h-4">
              11
            </div>
            <div className="data-right flex-1 h-4 absolute top-0 right-2 w-10 leading-4 text-right">
              19
            </div>
            <div className="lose flex-grow flex-shrink basis-[37%] bg-red-500 h-4"></div>
            <div className="win flex-grow flex-shrink basis-[63%] bg-[#5383E8] h-4"></div>
          </div>
        </div>
        <div className="pt-1 pb-2 flex justify-center px-2 text-[10px] text-white">
          <div className="graph relative flex flex-grow-0 flex-shrink basis-[405px] items-center mx-[3px]">
            <div className="title ml-1 flex-1 h-4 absolute top-0 left-[calc(50%-30px)] text-center w-[60px] leading-4">
              Total Gold
            </div>
            <div className="data-left absolute top-0 left-2 w-10 leading-4 text-left ml-1 flex-1 h-4">
              11
            </div>
            <div className="data-right flex-1 h-4 absolute top-0 right-2 w-10 leading-4 text-right">
              19
            </div>
            <div className="lose flex-grow flex-shrink basis-[37%] bg-red-500 h-4"></div>
            <div className="win flex-grow flex-shrink basis-[63%] bg-[#5383E8] h-4"></div>
          </div>
        </div>
      </div>
      <div className="team pr-4 table-cell h-[30px] align-middle text-right leading-[30px]">
        <div className="object ml-0 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src="https://s-lol-web.op.gg/images/icon/icon-dragon.svg?v=1691488768375"
              alt="바론"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">0</span>
          </div>
        </div>
        <div className="object ml-4 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src="	https://s-lol-web.op.gg/images/icon/icon-dragon.svg?v=1691488768375"
              alt="바론"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">0</span>
          </div>
        </div>
        <div className="object ml-4 inline-block text-xs text-gray-500">
          <div className="relative">
            <img
              src="	https://s-lol-web.op.gg/images/icon/icon-tower.svg?v=1691488768375"
              alt="바론"
              className="inline-block mr-1 align-middle w-4 h-4"
            />
            <span className="inline-block align-middle">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
