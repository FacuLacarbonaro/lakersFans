import React from "react";

import "./ShopItem.scss";

const ShopItem = ({ img, description, title, subtitle }) => {
  return (
    <div className="shopItem">
      <div
        className="shopItem__img"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="shopItem__description">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>

      <div className="shopItem__overlay">
        <button>View details</button>
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default ShopItem;
