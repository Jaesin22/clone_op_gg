// Navbar.tsx list에서 사용
type SummaryLists = {
  name: string;
  wins: string;
  losses: string;
  leaguePoints: string;
  tier: string;
  queueType: string;
  rank: string;
};

export const SummaryList: SummaryLists[] = [
  {
    name: "솔로랭크",
    queueType: "RANKED_SOLO_5x5",
    tier: "DIAMOND",
    rank: "III",
    leaguePoints: "30",
    wins: "6",
    losses: "6",
  },
  {
    name: "자유랭크",
    queueType: "RANKED_SOLO_5x5",
    tier: "DIAMOND",
    rank: "III",
    leaguePoints: "30",
    wins: "6",
    losses: "6",
  },
  {
    name: "아레나",
    queueType: "RANKED_SOLO_5x5",
    tier: "DIAMOND",
    rank: "III",
    leaguePoints: "30",
    wins: "6",
    losses: "6",
  },
];

export interface RankT {
  name: string;
}

export const RankType: RankT[] = [
  { name: "솔로랭크" },
  { name: "자유랭크" },
  { name: "아레나" },
];
