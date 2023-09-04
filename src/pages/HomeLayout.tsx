import Header from "../components/header/Header";
import Navbar from "../components/header/Navbar";
import Home from "../components/home/Home";

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
