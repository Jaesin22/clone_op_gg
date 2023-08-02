import axios from "axios";

export const getData = async () => {
  const keys = process.env.REACT_APP_API_KEY?.replaceAll('"', "").replace(
    ";",
    ""
  );
  try {
    const response = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B0%8D%20%EC%9D%B4?api_key=${keys}`
    );
    return response.data;
  } catch (e) {
    console.log("Failed", e);
  }
};

export const getPuuId = async () => {
  try {
    const response = await getData();
    if (response) {
      return response.id;
    }
  } catch (e) {
    console.error("Error fetching user ID:", e);
    return null;
  }
};

export const GetRanks = async (puuId: string | null) => {
  const keys = process.env.REACT_APP_API_KEY?.replaceAll('"', "").replace(
    ";",
    ""
  );
  try {
    const response = await axios.get(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${puuId}?api_key=${keys}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
