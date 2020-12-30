import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NewsCard from "../News/NewsCard";
import shop1 from "../../Assets/Images/jpg/shop1.jpg";
import shop2 from "../../Assets/Images/jpg/shop2.jpg";
import shop3 from "../../Assets/Images/jpg/shop3.jpg";
import shop4 from "../../Assets/Images/jpg/shop4.jpg";
import shop5 from "../../Assets/Images/jpg/shop5.jpg";

import "./ShopContainer.scss";

const ShopContainer = () => {
  return (
    <div className="shopContainer">
      <h3>
        NEW IN
        <br /> THE LATEST ARRIVALS
      </h3>
      <Carousel
        transitionTime={800}
        interval={10000}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows
      >
        <NewsCard
          size="contain"
          img={shop1}
          text="Los Angeles Lakers Nike City Edition."
        />
        <NewsCard
          size="contain"
          img={shop2}
          text="Los Angeles Lakers Home kit Edition."
        />
        <NewsCard
          size="contain"
          img={shop3}
          text="Los Angeles Lakers Away kit Edition."
        />
        <NewsCard
          size="contain"
          img={shop4}
          text="Los Angeles Lakers Sandals."
        />
        <NewsCard size="contain" img={shop5} text="Los Angeles Lakers Short." />
      </Carousel>
    </div>
  );
};

export default ShopContainer;
