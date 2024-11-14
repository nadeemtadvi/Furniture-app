import React from "react";
import Header from "../Components/Header";
import IntroSection from "../Components/IntroSection";
import Explore from "../Components/Explore";
import Chooseus from "../Components/Chooseus";
import InteriorDesign from "../Components/InteriorDesign";

const Home = () => {
  return (
    <div>
      <div className="bg-teal-700 h-[90vh]">
        <Header />
        <IntroSection />
      </div>
      <Explore/>
      <Chooseus/>
      <InteriorDesign/>
    </div>
  );
};

export default Home;
