import React, { useState } from "react";
import axios from "axios";
import { UserRank } from "./Utils";

export const getData = async () => {
  try {
    const response = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B0%8D%20%EC%9D%B4?api_key=RGAPI-b7573eb9-aff1-4d10-abb5-3ecc326ada04`
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
  console.log(puuId);
  console.log(process.env.REACT_APP_API_KEY);
  try {
    const response = await axios.get(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/yXc30f13EA-GVsGHEWez9wU5dk-bIwbeLRw4mV5jz9pRGQ?api_key=RGAPI-b7573eb9-aff1-4d10-abb5-3ecc326ada04`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
