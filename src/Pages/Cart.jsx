import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const discount = totalAmount >= 1000 ? Math.round(totalAmount * 0.05) : 0;
  const finalTotal = totalAmount - discount;

  const handleRemoveItem = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: itemId });
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: itemId });
  };

  return (
    <div className="cart-container">
      <header className="page-header">
        <div className="page-container">
          <h1>Shopping Cart</h1>
          <p>{totalItems} {totalItems === 1 ? "item" : "items"} in your cart</p>
        </div>
      </header>

      <main className="page-container cart-layout">
        <section className="cart-list">
          <div className="section-heading">
            <h2>Your Items</h2>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name || item.title} />
                <div>
                  <h4>{item.name || item.title}</h4>
                  <p>{item.category}</p>
                  <strong>Rs. {Number(item.price).toFixed(0)}</strong>
                </div>
                <div className="cart-actions">
                  <div className="quantity-control">
                    <button onClick={() => handleDecreaseQuantity(item.id)} aria-label="Decrease quantity">-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => handleIncreaseQuantity(item.id)} aria-label="Increase quantity">+</button>
                  </div>
                  <strong>Rs. {(Number(item.price) * (item.quantity || 1)).toFixed(0)}</strong>
                  <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <h3>Your cart is empty</h3>
              <p>Add products to your cart and they will appear here.</p>
              <Link className="primary-link mt-3" to="/products">Browse Products</Link>
            </div>
          )}
        </section>

        <aside className="summary-card">
          <h3>Price Details</h3>
          <div className="summary-row">
            <span>Price ({totalItems} items)</span>
            <strong>Rs. {totalAmount.toFixed(0)}</strong>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <strong>Rs. {discount.toFixed(0)}</strong>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <strong>Free</strong>
          </div>
          <div className="summary-row summary-total">
            <span>Total Amount</span>
            <span>Rs. {finalTotal.toFixed(0)}</span>
          </div>
          <button className="primary-button w-100 mt-3" disabled={cartItems.length === 0}>Place Order</button>
          <Link className="secondary-button w-100 mt-2" to="/products">Continue Shopping</Link>
        </aside>
      </main>
    </div>
  );
};

export default Cart;
