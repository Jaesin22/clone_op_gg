import { useQuery, useInfiniteQuery } from "react-query";
import { getRuneInfo, getMatchId, getGameInfo, GetData } from "../api/Champion";
import { useLocation, useParams } from "react-router-dom";

const useSummonerData = () => {
  const PAGE_SIZE = 20;
  const location = useLocation();
  const splitUrl = location.pathname.split("/") ?? null;
  const summonerName =
    splitUrl.length > 1
      ? splitUrl[splitUrl.length - 1].replaceAll("'", "")
      : "";
  const { data, isFetching } = useQuery(["summonerData", summonerName], () =>
    GetData(summonerName)
  );

  // 룬 정보 가져오는 query
  const { data: runeData } = useQuery(["runeData"], getRuneInfo, {
    refetchOnWindowFocus: false,
  });

  const puuId = data?.puuid;
  const id = data?.id;

  // 게임 매치 정보 가져오는 쿼리
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
  // 매치 정보를 통해 세부 게임 결과 가져오는 쿼리
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
    isFetching,
    id,
  };
};

export default useSummonerData;
