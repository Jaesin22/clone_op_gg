import React from "react";
import { useSelector } from "react-redux";
import { useQuery, useInfiniteQuery } from "react-query";
import { useTheme } from "../contexts/ThemeProvider";
import Rank from "../components/aside/Rank";
import FreeRank from "../components/aside/FreeRank";
import Arena from "../components/aside/Arena";
import Statbox from "../components/main/Statbox";
import MainTop from "../components/main/MainTop";
import Record from "../components/main/Record";
import Header from "../components/header/Header";
import Searchbar from "../components/header/Searchbar";
import Navbar from "../components/header/Navbar";
import Profile from "../components/header/Profile";
// import SummaryHeader from "../header/SummaryHeader";

import useSummonerData from "../hooks/useSummonerData";

import { getMatchId, getGameInfo } from "../api/Champion";

const SummonerLayout = () => {
  const { isDarkMode } = useTheme();
  const { data, puuId } = useSummonerData();
  const { type } = useSelector((state: { typeInfo: any }) => state.typeInfo);

  const {
    data: matchData,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["matchData", puuId, type],
    ({ pageParam = 0 }) => {
      return getMatchId(puuId, pageParam, 10, type);
    },
    {
      enabled: !!puuId,
      staleTime: Infinity,
      getNextPageParam: (lastPage, pages) => {
        return 10 * pages.length;
      },
      keepPreviousData: true,
    }
  );

  // 매치 정보를 통해 세부 게임 결과 가져오는 쿼리
  const queryKey = ["gameData", matchData?.pages[matchData?.pages.length - 1]];
  //const queryKey = ["gameData", matchData?.pages];

  const { data: gameData } = useQuery(
    queryKey,
    () => {
      //const allMatchIds: any = matchData?.pages.flatMap((page) => page);
      const allMatchIds: [] = matchData?.pages[
        matchData.pages.length - 1
      ].flatMap((page: []) => page);
      return getGameInfo(allMatchIds);
    },
    {
      enabled: !!matchData && !isFetching,
      keepPreviousData: true,
      staleTime: Infinity,
      notifyOnChangeProps: "tracked",
    }
  );

  return (
    <div
      className={`${isDarkMode ? "bg-[#1C1C1F]" : "bg-[#dadada]"} min-h-screen`}
    >
      <Header />
      <Searchbar />
      <Navbar />
      <Profile />

      <div className="content-container w-[1080px] mx-auto my-0">
        {data?.name !== "AxiosError" && (
          <div className="flex">
            <aside>
              <div className="w-[332px] text-xs align-top inline-block min-h-[870px]">
                <Rank />
                <FreeRank />
                <Arena />
              </div>
            </aside>
            <main>
              <div className="w-[740px] mt-2 ml-2 text-xs align-top">
                <MainTop />
                <Statbox data={gameData} />
                <Record
                  data={gameData}
                  hasNextPage={hasNextPage}
                  fetchNextPage={fetchNextPage}
                  isFetching={isFetching}
                  isFetchingNextPage={isFetchingNextPage}
                />
              </div>
            </main>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummonerLayout;
