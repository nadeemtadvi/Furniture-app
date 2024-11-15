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
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";

const Home = () => {
  return (
    <div>
      <div className="bg-teal-700 sm:h-[90vh]">
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
      <Footer/>
      <Copyright/>
    </div>
  );
};

export default Home;
