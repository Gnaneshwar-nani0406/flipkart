import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {

  const cartItems = useSelector((state) => state.cart);
const totalItems = cartItems.reduce(
  (sum, item) => sum + (item.quantity || 1),
  0

);

const totalAmount = cartItems.reduce(
  (sum, item) => {return sum + (item.price * (item.quantity || 1));},
  0
);

const [cart, setCart] = useState([]);


 
  return (
  <div className="cart">
    <h1>Cart Page</h1>

    {cartItems.map((item) => (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <p>Price: ₹{item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity || 1}</p>
        <p>Total: ₹{(item.price * (item.quantity || 1)).toFixed(2)}</p>
        <hr />
      </div>
    ))}
    <h6>Total Items: {totalItems}</h6>
    <h6>Total Amount: ₹{totalAmount.toFixed(2)}</h6>
  </div>
);
};

export default Cart;