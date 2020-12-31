import React from "react";
import { connect } from "react-redux";

import "./IconCheckout.scss";

const IconCheckout = ({ checkout }) => {
  if (checkout.length === 0) {
    return null;
  } else {
    return (
      <div className="iconCheckout">
        <h2>{checkout.length}</h2>
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
