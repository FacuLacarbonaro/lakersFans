import React from "react";
import { connect, useDispatch } from "react-redux";
import { CHECKOUT_PRODUCTS_ADD } from "../../../Redux/Actions/constants";
import Footer from "../../Footer/Footer";

import "./ProductDetail.scss";

const ProductDetail = ({ productSelected }) => {
  console.log(productSelected);
  const dispatch = useDispatch();

  return (
    <div className="productDetail">
      <div className="productDetail__container">
        <h2>{productSelected.name}</h2>
        <h3>{productSelected.category}</h3>
        <img src={productSelected.img} alt="" />
        <h3>Description</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, dolorem
          enim. Doloribus iure hic cumque, corporis, quisquam quasi odio maiores
          aperiam officia recusandae unde voluptatem. Nemo placeat omnis
          eligendi soluta.
        </p>
        <h4>${productSelected.price}</h4>

        <button
          onClick={() =>
            dispatch({
              type: CHECKOUT_PRODUCTS_ADD,
              item: {
                id: productSelected.id,
                name: productSelected.title,
                price: productSelected.price,
                img: productSelected.img,
                category: productSelected.category,
              },
            })
          }
        >
          Add to Basket
        </button>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  productSelected: state.productDetailReducer.productDetail,
});

export default connect(mapStateToProps)(ProductDetail);
