import React from "react";
import shopbanner from "../../../Assets/Images/jpg/banne.jpg";
import tapiz from "../../../Assets/Images/jpg/tapiz-la.jpg";
import "./Shop.scss";
import ShopItem from "./ShopItem";
import Footer from "../../Footer/Footer";

import img from "../../../Assets/Images/jpg/shop1.jpg";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__hero">
        <div
          className="shop__hero__background"
          style={{
            background: `url(${shopbanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="shop__hero__title">
          <h2>Shop Now!</h2>
        </div>
      </div>

      <div
        className="shop__container"
        style={{
          background: `url(${tapiz})`,
          backgroundSize: "70px",
          backgroundPosition: "center",
        }}
      >
        <div className="shop__container__title">
          <h3>Products</h3>
        </div>
        <div className="shop__container__list">
          <ShopItem
            img={img}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          sint sunt dicta"
            title="Title"
            subtitle="Subtitle"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
