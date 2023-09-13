import { useQuery } from "react-query";
import { getRuneInfo, GetData } from "../api/Champion";
import { useLocation } from "react-router-dom";

const useSummonerData = () => {
  const location = useLocation();
  const splitUrl = location.pathname.split("/") ?? null;
  const summonerName =
    splitUrl.length > 1
      ? splitUrl[splitUrl.length - 1].replaceAll("'", "")
      : "";
  const { data, isLoading } = useQuery(["summonerData", summonerName], () =>
    GetData(summonerName)
  );

  // 룬 정보 가져오는 query
  const { data: runeData } = useQuery(["runeData"], getRuneInfo, {});

  const puuId = data?.puuid;
  const id = data?.id;

  return {
    data,
    runeData,
    puuId,
    isLoading,
    id,
  };
};

export default useSummonerData;
