import React, { useEffect } from "react";

import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import News from "../../News/News";
import NextMatch from "../../NextMatch/NextMatch";
import ShopContainer from "../../ShopContainer/ShopContainer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Hero />
        <NextMatch />
      <News />
      <ShopContainer />
      <Footer />
    </div>
  );
};

export default Home;
