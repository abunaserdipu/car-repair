import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Reviews from "../Review/Reviews";
import Services from "../Services/Services";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Services />
      <Blog />
      <Reviews />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
