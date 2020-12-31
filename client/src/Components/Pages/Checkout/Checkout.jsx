import React from "react";
import { connect, useDispatch } from "react-redux";
import Footer from "../../Footer/Footer";
import {
  CHECKOUT_PRODUCTS_ADD,
  CHECKOUT_PRODUCTS_REMOVE,
} from "../../../Redux/Actions/constants";
import "./Checkout.scss";

const Checkout = ({ checkout }) => {
  const dispatch = useDispatch();
  return (
    <div className="Checkout">
      <div className="Checkout__container">
        <h2>Checkout</h2>
        <div className="Checkout__container__list">
          {checkout.map((item) => (
            <div className="Checkout__container__list__item">
              <img src={item.img} alt={item.name} />
              <div className="Checkout__container__list__item__detail">
                <h3>{item.name}</h3>
                <h4>${item.price}</h4>
                <button
                  onClick={() =>
                    dispatch({ type: CHECKOUT_PRODUCTS_ADD, item: item })
                  }
                >
                  Add other eq.
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: CHECKOUT_PRODUCTS_REMOVE, id: item.id })
                  }
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkout: state.checkoutReducer.checkout,
  };
};

export default connect(mapStateToProps)(Checkout);
