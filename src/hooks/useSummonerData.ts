import { useQuery, useInfiniteQuery } from "react-query";
import {
  getSummonerInfo,
  getRuneInfo,
  getMatchId,
  getGameInfo,
} from "../api/Champion";

const useSummonerData = () => {
  const PAGE_SIZE = 20;
  const { data } = useQuery(["puuid"], getSummonerInfo, {
    refetchOnWindowFocus: false,
  });

  const { data: runeData } = useQuery(["runeData"], getRuneInfo, {
    refetchOnWindowFocus: false,
  });

  const puuId = data?.puuid;

  const {
    data: matchData,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    ["matchData", puuId],
    ({ pageParam = 0 }) => getMatchId(puuId, pageParam, PAGE_SIZE),
    {
      enabled: !!puuId,
      staleTime: Infinity,
      getNextPageParam: (lastPage, pages) => {
        return PAGE_SIZE * pages.length;
      },
    }
  );

  const { data: gameData } = useQuery(
    ["gameData", matchData?.pages],
    () => {
      const allMatchIds: any = matchData?.pages.flatMap((page) => page);
      return getGameInfo(allMatchIds);
    },
    {
      enabled: !!matchData && !isLoading, // matchData가 있고, isLoading이 false인 경우에만 쿼리 실행
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      notifyOnChangeProps: "tracked",
    }
  );

  return {
    data,
    runeData,
    puuId,
    matchData,
    isLoading,
    fetchNextPage,
    gameData,
  };
};

export default useSummonerData;
