import React from "react";
import Header from "../Components/Header";
import IntroSection from "../Components/IntroSection";
import Explore from "../Components/Explore";
import Chooseus from "../Components/Chooseus";
import InteriorDesign from "../Components/InteriorDesign";
import Feature from "../Components/Feature";
import Testimonial from "../Components/Testimonial";
import RecentBlog from "../Components/RecentBlog";
import Newsletter from "../Components/Newsletter";

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
      <Feature/>
      <Testimonial/>
      <RecentBlog/>
      <Newsletter/>
    </div>
  );
};

export default Home;
