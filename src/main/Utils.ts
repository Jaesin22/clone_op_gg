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
