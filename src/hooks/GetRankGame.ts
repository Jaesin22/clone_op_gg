import { useQuery } from "react-query";
import { GetRanks } from "../api/Champion";
import { UserRank } from "../utils/ApiUtils";
import useSummonerData from "./useSummonerData";

const GetRankGame = () => {
  const { id } = useSummonerData();
  // 랭크 게임 전적 가져오는 쿼리
  const { data: infoss, isLoading } = useQuery<UserRank[], Error>(
    ["rankData", id],
    () => GetRanks(id),
    {
      enabled: !!id,
    }
  );
  return { infoss, isLoading };
};

export default GetRankGame;
