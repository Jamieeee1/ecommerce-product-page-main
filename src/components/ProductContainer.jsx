import React, { useContext } from "react";
import { AppContext } from "../App";
import cartIcon from "../assets/images/icon-cart.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

const ProductContainer = ({ index }) => {
  const { items, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(AppContext);
  const product = items[index];
  const quantity = product.quantity;
  // const quantity = 3; // For testing purposes, replace with product.quantity when available
  return (
    <>
      <p className="text-Darkgrayishblue ">{product.brand}</p>
      <h2 className="text-3xl font-dark text-Verydarkblue">
        {" "}
        {product.title}{" "}
      </h2>
      <p className="text-Grayishblue"> {product.description} </p>
      <div>
        <button
          disabled={quantity === 0}
          onClick={() => decreaseQuantity(product.id)}
        >
          <img src={minusIcon} alt="" />
        </button>
        <span> {quantity} </span>
        <button
          onClick={() =>
            quantity < 1 ? addToCart(product) : increaseQuantity(product.id)
          }
        >
          <img src={plusIcon} alt="" />
        </button>
      </div>
      <span> ${product.price} </span>
      <button
        className="flex"
        disabled={quantity > 0}
        onClick={() => addToCart(product)}
      >
        {" "}
        <img src={cartIcon} alt="" /> Add to Cart
      </button>
    </>
  );
};

export default ProductContainer;
