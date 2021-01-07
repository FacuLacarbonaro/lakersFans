import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  CHECKOUT_PRODUCTS_ADD,
  PRODUCT_DETAIL,
} from "../../Redux/Actions/constants";
import "./ShopItem.scss";
import { Link } from "react-router-dom";

const ShopItem = ({ img, price, title, category, id }) => {
  const dispatch = useDispatch();

  return (
    
    <div className="shopItem">
      <div className="shopItem__img">
        <img src={img} alt="" />
      </div>
      <div className="shopItem__description">
        <h3>{title}</h3>
        <h4>{category}</h4>
        <p>${price}</p>
      </div>

      <div className="shopItem__overlay">
        <Link
          to={`/product/${id}`}
          onClick={() =>
            dispatch({
              type: PRODUCT_DETAIL,
              payload: {
                id: id,
                name: title,
                price: price,
                img: img,
                category: category,
              },
            })
          }
        >
          <button> View details</button>
        </Link>
        <button
          onClick={() =>
            dispatch({
              type: CHECKOUT_PRODUCTS_ADD,
              item: {
                id: id,
                name: title,
                price: price,
                img: img,
                category: category,
              },
            })
          }
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(ShopItem);
