import React, { useContext } from "react";
import { AppContext } from "../App";
import cartIcon from "../assets/images/icon-cart.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

const ProductContainer = ({ index }) => {
  const { items, increaseQuantity, decreaseQuantity } = useContext(AppContext);
  const product = items[index];
  const quantity = product.quantity;
  return (
    <>
      <p className="text-Darkgrayishblue ">{product.brand}</p>
      <h2 className="text-3xl font-dark text-Verydarkblue">
        {" "}
        {product.title}{" "}
      </h2>
      <p className="text-Grayishblue"> {product.description} </p>

      <p>
        <span> ${product.price} </span>
        <span className="text-White text-sm bg-Verydarkblue py-1 px-1.5 rounded-sm">
          50%
        </span>
      </p>

      <div className="flex  gap-2">
        <div className="flex items-center gap-3 text-base bg-Lightgrayishblue py-2 px-4 rounded-md">
          <button
            disabled={quantity === 0}
            onClick={() => decreaseQuantity(product.id)}
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            <img src={minusIcon} alt="" sizes="16" />
          </button>
          <span> {quantity} </span>
          <button
            onClick={() =>
              quantity < 1 ? addToCart(product) : increaseQuantity(product.id)
            }
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            <img src={plusIcon} alt="" />
          </button>
        </div>

        <button
          className="flex item-center bg-Orange hover:bg-Orange/70 p-2 rounded-sm text-base"
          disabled={quantity > 0}
          onClick={() => increaseQuantity(product.id)}
        >
          {" "}
          <img src={cartIcon} alt="" /> Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductContainer;
