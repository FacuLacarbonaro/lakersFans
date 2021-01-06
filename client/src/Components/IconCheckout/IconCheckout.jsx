import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./IconCheckout.scss";

const IconCheckout = ({ checkout }) => {
  if (checkout.length === 0) {
    return null;
  } else {
    return (
      <div className="iconCheckout">
        <Link className="iconCheckout__link" to="/checkout">
          <h2>{checkout.length}</h2>
        </Link>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    checkout: state.checkoutReducer.checkout,
  };
};

export default connect(mapStateToProps)(IconCheckout);
