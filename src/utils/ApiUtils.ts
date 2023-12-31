import axios from "axios";

export interface UserRank {
  filter(
    arg0: (infos: any) => boolean
  ): import("react").SetStateAction<UserRank[] | null>;
  leagueId: string | null;
  queueType: string | null;
  tier: string | null;
  rank: string | null;
  summonerId: string;
  summonerName: string;
  leaguePoints: string;
  wins: number;
  losses: number;
  veteran: boolean | null;
  inactive: boolean | null;
  freshBlood: boolean | null;
  hotStreak: boolean | null;
}

export const client = axios.create({
  withCredentials: false,
});
