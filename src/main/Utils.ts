// SummaryHeader.tsx list에서 사용
type MainHeaders = {
  color: string;
  name: string;
  selected?: boolean;
  icon?: string;
};

export const MainHeader: MainHeaders[] = [
  {
    name: "전체",
    color: "#000000",
    selected: true,
  },
  {
    name: "솔로랭크",
    color: "#000000",
    selected: false,
  },
  {
    name: "자유랭크",
    color: "[#00A399]",
    selected: false,
  },
  // {
  //   name: "전략적 팀 전투",
  //   color: "red-600",
  //   selected: false,
  //   icon: "https://s-lol-web.op.gg/images/icon/icon-tft.svg?image=q_auto,f_webp,w_32&v=1690771026044",
  // },
];

export type selections = {
  perk: number;
  var1: number;
  var2: number;
  var3: number;
};

export interface styles {
  description: string;
  style: number;
  selections: selections[];
}

export interface perks {
  statPerks: [];
  styles: styles[];
}

type bans = {
  championId: number | string;
  pickTurn: number | string;
};

type champion = {
  first: number;
  kills: number;
};

export type objectives = {
  baron: {};
  champion: champion;
  dragon: {};
  inhibitor: {};
  tower: {};
  riftHerald: {};
};

export type runeTree = {
  id: number;
  key: string;
  icon: string;
  name: string;
  slots: [];
};

export type runes = {
  id: number;
  key: string;
  icon: string;
  name: string;
  shortDesc: string;
};

export interface participants {
  assists: number;
  kills: number;
  puuid: string;
  champLevel: number;
  deaths: number;
  championName: string;
  detectorWardsPlaced?: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  summoner1Id: number;
  summoner2Id: number;
  perks: perks;
  wardsPlaced: number;
  wardsKilled: number;
  win: boolean;
  summonerName: string;
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
  teamId: number;
  item0?: string;
  item1?: string;
  item2?: string;
  lane: string;
  item3?: string;
  item4?: string;
  item5?: string;
  summonerLevel: number;
  individualPosition: string;
  item6?: string;
  challenges: any;
}

export interface Team {
  bans: bans[];
  objectives: objectives;
  win: boolean;
  teamId: number;
}

export interface BoardProps {
  gameData: GameData;
}

export interface GameData {
  gameMode: string;
  gameName: string;
  participants: any;
  teams: Team[];
  gameStartTimestamp: number;
  gameEndTimestamp: number;
  gameDuration: number;
}

// Record.tsx에서 UNix 시간 변환하는 함수
export function convertUnixTimestampToDuration(timestamp: number): string {
  const seconds = Math.floor(timestamp / 1000);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(seconds / 86400);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (days) {
    return `${days}일 전`;
  } else if (hours) {
    return `${hours}시간 전`;
  } else {
    return `${minutes}분 ${remainingSeconds}초`;
  }
}

// participant에서 최대 데미지 가져오는 함수
export const getMaxDamageInParticipant = (participants: any) => {
  return participants.reduce(
    (maxParticipant: participants, participant: participants) => {
      if (
        participant.totalDamageDealtToChampions >
        maxParticipant.totalDamageDealtToChampions
      ) {
        return participant;
      }
      return maxParticipant;
    },
    participants[0]
  );
};

export const getMaxtotalDamageTaken = (participants: any) => {
  return participants.reduce(
    (maxParticipant: participants, participant: participants) => {
      if (participant.totalDamageTaken > maxParticipant.totalDamageTaken) {
        return participant;
      }
      return maxParticipant;
    },
    participants[0]
  );
};

export const spellArray = [
  { key: 4, id: "SummonerFlash" },
  { key: 3, id: "SummonerExhaust" },
  { key: 21, id: "SummonerBarrier" },
  { key: 1, id: "SummonerBoost" },
  { key: 14, id: "SummonerDot" },
  { key: 6, id: "SummonerHaste" },
  { key: 7, id: "SummonerHeal" },
  { key: 13, id: "SummonerMana" },
  { key: 30, id: "SummonerPoroRecall" },
  { key: 31, id: "SummonerPoroThrow" },
  { key: 11, id: "SummonerSmite" },
  { key: 39, id: "SummonerSnowURFSnowball_Mark" },
  { key: 32, id: "SummonerSnowball" },
  { key: 12, id: "SummonerTeleport" },
  { key: 54, id: "Summoner_UltBook_Placeholder" },
];
