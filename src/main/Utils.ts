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

type bans = {
  championId: number | string;
  pickTurn: number | string;
};

interface Team {
  bans: bans[];
  objectives: any[];
  win: boolean;
}

export interface GameData {
  gameMode: string;
  gameName: string;
  participants: any;
  teams: Team;
  gameStartTimestamp: number;
  gameEndTimestamp: number;
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
