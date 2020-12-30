import React, { useEffect } from "react";
import { connect } from "react-redux";

import shopbanner from "../../../Assets/Images/jpg/banne.jpg";
import tapiz from "../../../Assets/Images/jpg/tapiz-la.jpg";
import "./Shop.scss";
import ShopItem from "./ShopItem";
import Footer from "../../Footer/Footer";

const Shop = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

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
          <p>
            Go to basket <span>🗑️</span>{" "}
          </p>
        </div>
        <div className="shop__container__list">
          {products.map((item, i) => (
            <ShopItem
              key={i}
              img={item.img}
              description={item.price}
              title={item.name}
              subtitle={item.category}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch({ type: "FETCH_PRODUCTS" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
