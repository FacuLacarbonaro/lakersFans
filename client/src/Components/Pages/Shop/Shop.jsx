import React, { useEffect } from "react";
import { connect } from "react-redux";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import shopbanner from "../../../Assets/Images/jpg/banne.jpg";
import tapiz from "../../../Assets/Images/jpg/tapiz-la.jpg";
import "./Shop.scss";
import ShopItem from "../../ShopItem/ShopItem";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const Shop = ({ fetchProducts, products, checkout }) => {
  useEffect(() => {
    fetchProducts();

    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

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
          <Zoom left cascade>
            <h3>Products</h3>
          </Zoom>

          <Link to="/checkout">
            <p>
              Go to Checkout <span>🗑️ ({checkout.length})</span>{" "}
            </p>
          </Link>
        </div>
        <div className="shop__container__list">
          {products.map((item, i) => (
            <Slide left>
              <ShopItem
                key={i}
                id={item._id}
                img={item.img}
                price={item.price}
                title={item.name}
                category={item.category}
              />
            </Slide>
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
    checkout: state.checkoutReducer.checkout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch({ type: "FETCH_PRODUCTS" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
