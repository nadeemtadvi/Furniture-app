import React from "react";
import Header from "../Components/Header";
import IntroSection from "../Components/IntroSection";
import Explore from "../Components/Explore";
import Chooseus from "../Components/Chooseus";

const Home = () => {
  return (
    <div>
      <div className="bg-teal-700 h-[90vh]">
        <Header />
        <IntroSection />
      </div>
      <Explore/>
      <Chooseus/>
    </div>
  );
};

export default Home;
