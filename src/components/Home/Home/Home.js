import React from "react";
import User from "../../User/User/User";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Reviews from "../Review/Reviews";
import Services from "../Services/Services";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <Navbar />
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
