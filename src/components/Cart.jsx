import React, { useContext } from "react";
import { AppContext } from "../App";
// import deleteBtn from "../../public/images/icon-delete.svg";

const Cart = () => {
  const { cartItems, resetItem } = useContext(AppContext);
  if (cartItems.length < 1) {
    return (
      <>
        <h2>Cart</h2>
        <hr />
        <div className="h-full flex-1 flex justify-center items-center">
          <span>Your cart is empty</span>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Cart not</h2>
      <hr />
      <div className="flex-1">
        {cartItems.map((item, key) => (
          <div id={key} className="flex">
            <img src={item.image1Thumbnail} alt="" />
            <div>
              <p>{item.title}</p>
              <span>${item.price} x </span>
              <span> {item.quantity} </span>
              <span>{item.quantity * item.price}</span>
            </div>
            <span onClick={() => resetItem(item.id)}>
              <img src="/images/icon-delete.svg" alt="" />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
