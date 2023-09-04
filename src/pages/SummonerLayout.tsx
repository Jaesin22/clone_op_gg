import Rank from "../components/aside/Rank";
import FreeRank from "../components/aside/FreeRank";
import Arena from "../components/aside/Arena";
import Statbox from "../components/main/Statbox";
import MainTop from "../components/main/MainTop";
import Record from "../components/main/Record";
import Header from "../components/header/Header";
import Searchbar from "../components/header/Searchbar";
import Navbar from "../components/header/Navbar";
import Profile from "../components/header/Profile";
// import SummaryHeader from "../header/SummaryHeader";
import { useTheme } from "../contexts/ThemeProvider";
import useSummonerData from "../hooks/useSummonerData";

const SummonerLayout = () => {
  const { isDarkMode } = useTheme();
  const { data } = useSummonerData();
  return (
    <div
      className={`${isDarkMode ? "bg-[#1C1C1F]" : "bg-[#dadada]"} min-h-screen`}
    >
      <Header />
      <Searchbar />
      <Navbar />
      <Profile />

      <div className="content-container w-[1080px] mx-auto my-0">
        {data?.name !== "AxiosError" && (
          <div className="flex">
            <aside>
              <div className="w-[332px] text-xs align-top inline-block min-h-[870px]">
                <Rank />
                <FreeRank />
                <Arena />
              </div>
            </aside>
            <main>
              <div className="w-[740px] mt-2 ml-2 text-xs align-top">
                <MainTop />
                <Statbox />
                <Record />
              </div>
            </main>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummonerLayout;
