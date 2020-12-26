import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./News.scss";
import NewsCard from "./NewsCard";
import News1 from "../../Assets/Images/jpg/news1.jpg";
import News2 from "../../Assets/Images/jpg/news2.jpg";
import News3 from "../../Assets/Images/jpg/news3.jpg";
import News4 from "../../Assets/Images/jpg/news4.jpg";

const News = () => {
  return (
    <div className="news">
      <h3>News</h3>
      <Carousel
        transitionTime={800}
        interval={10000}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows
      >
        <NewsCard
          img={News1}
          size="cover"
          text="Lakers News: LeBron James ‘on Track’ to Play Saturday vs. Portland Trail Blazers"
        />
        <NewsCard
          img={News2}
          size="cover"
          text="The Lakers will reportedly sign Marc Gasol"
        />
        <NewsCard
          img={News3}
          size="cover"
          text="Lakers news: LeBron James and Anthony Davis headline 1st Team All-NBA"
        />
        <NewsCard
          img={News4}
          size="cover"
          text="Lakers News: Frank Vogel Praises Kyle Kuzma’s Defensive Commitment"
        />
      </Carousel>
    </div>
  );
};

export default News;
