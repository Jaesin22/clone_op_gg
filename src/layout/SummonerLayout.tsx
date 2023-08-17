import Rank from "../aside/Rank";
import FreeRank from "../aside/FreeRank";
import Arena from "../aside/Arena";
import MainTop from "../main/MainTop";
import Statbox from "../main/Statbox";
import Record from "../main/Record";
import Header from "../header/Header";
import Searchbar from "../header/Searchbar";
import Navbar from "../header/Navbar";
import Profile from "../header/Profile";
import SummaryHeader from "../header/SummaryHeader";

const SummonerLayout = () => {
  return (
    <>
      <header>
        <Header />
        <Searchbar />
        <Navbar />
        <Profile />
        <SummaryHeader />
      </header>
      <div className="content-container w-[1080px] mx-auto my-0">
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
      </div>
    </>
  );
};

export default SummonerLayout;
