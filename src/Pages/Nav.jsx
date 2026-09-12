import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0); 
    
  return (
    <nav className="navbar navbar-expand-lg site-nav">
      <div className="container-fluid page-container">
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img
            className="brand-logo"
            src="https://play-lh.googleusercontent.com/0-sXSA0gnPDKi6EeQQCYPsrDx6DqnHELJJ7wFP8bWCpziL4k5kJf8RnOoupdnOFuDm_n"
            alt="Flipkart"
          />
          <span className="brand-name">Flipkart</span>
        </Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#siteNavigation" aria-controls="siteNavigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="siteNavigation">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <Link className="btn nav-action cart-action" to="/cart">Cart ({totalItems})</Link>
            <Link className="btn nav-action logout-action" to="/Customer_login">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav
