// Header.tsx에서 사용하는 ul interface
interface listInfo {
  name: string;
  src: string;
  href: string;
}

//Header.tsx에서 사용하는 ul list
export const gameList: listInfo[] = [
  {
    name: "리그오브레전드",
    src: "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&v=1690271849565",
    href: "https://www.naver.com",
  },
  {
    name: "Gigs",
    src: "https://opgg-gnb.akamaized.net/static/images/icons/gigs.svg?image=q_auto,f_webp,w_48&v=1690271849565",
    href: "https://www.naver.com",
  },
  {
    name: "데스크톱",
    src: "https://opgg-gnb.akamaized.net/static/images/icons/01-icon-00-logo-icon-opggsquare.svg?image=q_auto,f_webp,w_48&v=1690271849565",
    href: "https://www.naver.com",
  },
  {
    name: "전략적 팀 전투",
    src: "https://opgg-gnb.akamaized.net/static/images/icons/img_navi_tft-whte.svg?image=q_auto,f_webp,w_48&v=1690271849565",
    href: "https://www.naver.com",
  },
  {
    name: "발로란트",
    src: "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg?image=q_auto,f_webp,w_48&v=1690271849565",
    href: "https://www.naver.com",
  },
  {
    name: "배틀그라운드",
    src: "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg?image=q_auto,f_webp,w_48&v=1690271849565",
    href: "https://www.naver.com",
  },
];

// Navbar.tsx list에서 사용
type routeItems = {
  keys: string;
  name: string;
};

export const routeList: routeItems[] = [
  {
    name: "홈",
    keys: "HOME",
  },
  {
    name: "챔피언 분석",
    keys: "CHAMPION",
  },
  {
    name: "아레나",
    keys: "ARENA",
  },
  {
    name: "게임 모드",
    keys: "GAME_MODE",
  },
  {
    name: "통계",
    keys: "STATISTICS",
  },
  {
    name: "랭킹",
    keys: "LEADERBOARDS",
  },
  {
    name: "프로관전",
    keys: "SPECTATE",
  },
  {
    name: "멀티서치",
    keys: "MULTI_SEARCH",
  },
  {
    name: "커뮤니티",
    keys: "TALK",
  },
];
