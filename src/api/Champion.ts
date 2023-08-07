import axios from "axios";

export const getData = async () => {
  const key = process.env.REACT_APP_API_KEY?.replaceAll('"', "")?.replace(
    ";",
    ""
  );
  try {
    const response = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B0%8D%20%EC%9D%B4?api_key=${key}`
    );
    return response.data;
  } catch (e) {
    console.log("Failed", e);
  }
};

export const getSummonerInfo = async () => {
  try {
    const response = await getData();
    if (response) {
      return response;
    }
  } catch (e) {
    console.error(e);
    return null;
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

export const getMatchId = async (puuId: string | null) => {
  const key = process.env.REACT_APP_API_KEY?.replaceAll('"', "")?.replace(
    ";",
    ""
  );
  try {
    const response = await axios.get(
      `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuId}/ids?start=0&count=20&api_key=${key}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getGameInfo = async (matchList: []) => {
  let gameArray: any[] = [];
  const key = process.env.REACT_APP_API_KEY?.replaceAll('"', "")?.replace(
    ";",
    ""
  );
  for (let i = 0; i < matchList.length; i++) {
    try {
      const response = await axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/${matchList[i]}?api_key=${key}`
      );
      if (response.data.info.gameMode !== "CHERRY") {
        gameArray = [...gameArray, response.data.info];
      }
    } catch (e) {
      console.error(e);
    }
  }
  return gameArray;
};

export const getSpells = async () => {
  try {
    const response = await axios.get(
      `https://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/summoner.json`
    );

    console.log(response);
    return response.data;
    // const spellData = response.data.data;
    // const spellInfo = spellData[id];
  } catch (e) {
    console.error(e);
  }
};
