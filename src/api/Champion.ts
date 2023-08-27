import axios from "axios";

export const GetData = async (name: string) => {
  const key = process.env.REACT_APP_API_KEY?.replaceAll('"', "")?.replace(
    ";",
    ""
  );
  try {
    const response = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${key}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const GetRanks = async (summonerId: string | null) => {
  const key = process.env.REACT_APP_API_KEY?.replaceAll('"', "")?.replace(
    ";",
    ""
  );
  try {
    const response = await axios.get(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${key}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getMatchId = async (
  puuId: string | null,
  start: number,
  count: number
) => {
  const key = process.env.REACT_APP_API_KEY?.replaceAll('"', "")?.replace(
    ";",
    ""
  );
  try {
    const response = await axios.get(
      `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuId}/ids?start=${start}&count=${count}&api_key=${key}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getGameInfo = async (matchList: []) => {
  const key = process.env.REACT_APP_API_KEY?.replaceAll('"', "")?.replace(
    ";",
    ""
  );

  const fetchGameInfo = async (matchId: string) => {
    try {
      const response = await axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${key}`
      );
      if (response.data.info.queueId !== 1700) {
        return response.data.info;
      }
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const gamePromises = matchList.map(async (matchId, index) => {
    return await fetchGameInfo(matchId);
  });

  const gameArray = await Promise.all(gamePromises);

  return gameArray.filter(
    (gameInfo) => gameInfo !== undefined && gameInfo !== null
  );
};

export const getRuneInfo = async () => {
  try {
    const url = `https://ddragon.leagueoflegends.com/cdn/13.15.1/data/ko_KR/runesReforged.json`;

    const runeResponse = await axios.get(url);
    return runeResponse.data;
  } catch (e) {
    console.error(e);
  }
};
