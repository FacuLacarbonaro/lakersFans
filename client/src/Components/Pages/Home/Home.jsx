import React from "react";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import News from "../../News/News";
import NextMatch from "../../NextMatch/NextMatch";
import Shop from "../../Shop/Shop";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <NextMatch />
      <News/>
      <Shop/>
      <Footer/>
    </div>
  );
};

export default Home;
