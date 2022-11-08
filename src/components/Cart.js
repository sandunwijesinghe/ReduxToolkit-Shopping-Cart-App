import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const cartItems = useSelector(state=>state.cart.itemList)
  const quantity = useSelector(state=>state.cart.totalQuantity)
  console.log(cartItems)

  const dispatch=useDispatch()
  const showCart=()=>{
    dispatch(cartActions.setShowCart())
  }
  return (
    <div className="cartIcon" onClick={showCart}>
      <h3>Cart:{quantity} Items</h3>
    </div>
  );
};

export default Cart;
