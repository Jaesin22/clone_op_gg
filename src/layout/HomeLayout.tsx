import Header from "../header/Header";
import Navbar from "../header/Navbar";
import Home from "../home/Home";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <div>
        <Home />
      </div>
    </>
  );
};

export default HomeLayout;
