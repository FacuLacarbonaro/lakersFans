import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Footer from "../../Footer/Footer";
import {
  CHECKOUT_PRODUCTS_ADD,
  CHECKOUT_PRODUCTS_REMOVE,
} from "../../../Redux/Actions/constants";
import "./Checkout.scss";
import Subtotal from "../../Subtotal/Subtotal";
import { Link } from "react-router-dom";

const Checkout = ({ checkout }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="Checkout">
      <div className="Checkout__container">
        <h2>Checkout</h2>
        {checkout.length === 0 ? (
          <div className="vacio">
            Empty Basket, go to{" "}
            <Link className="vacio__link" to="/shop">
              Shop
            </Link>{" "}
          </div>
        ) : (
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
                      dispatch({
                        type: CHECKOUT_PRODUCTS_REMOVE,
                        id: item.id,
                      })
                    }
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Subtotal />
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
