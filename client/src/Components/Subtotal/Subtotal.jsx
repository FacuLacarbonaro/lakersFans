import React, { useState } from "react";
import { connect } from "react-redux";

import "./Subtotal.scss";

const Subtotal = ({ checkout }) => {
  const basketSubTotal = checkout.reduce(
    (price, item) => item.price + price,
    0
  );

  const [addShip, setAddShip] = useState(0);

  const totalBasket = basketSubTotal + addShip;

  const standardShip = () => {
    setAddShip(100);
  };

  const expressShip = () => {
    setAddShip(300);
  };

  const freeShip = () => {
    setAddShip(0);
  };

  return (
    <div className="subtotal">
      <div className="subtotal__shipping">
        <div className="sidebar__content__shipping__option">
          <input type="radio" name="option" onClick={freeShip} />
          Free Shipping ($0)
        </div>
        <div className="sidebar__content__shipping__option">
          <input type="radio" name="option" onClick={standardShip} />
          Stardard ($100)
        </div>
        <div className="sidebar__content__shipping__option">
          <input type="radio" name="option" onClick={expressShip} />
          Express ($300)
        </div>
      </div>
      <div className="subtotal__total">
        <h3>Total: </h3>
        <h4>$ {totalBasket} </h4>
      </div>
      <div className="subtotal__payment">
        <button type="submit"> PROCEED TO CHECKOUT </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkout: state.checkoutReducer.checkout,
  };
};

export default connect(mapStateToProps)(Subtotal);
