import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0); 
    
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img width={50} height={50} src="https://play-lh.googleusercontent.com/0-sXSA0gnPDKi6EeQQCYPsrDx6DqnHELJJ7wFP8bWCpziL4k5kJf8RnOoupdnOFuDm_n" /> <b>FLIPKART</b>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">HOME</Link>
         </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/products">PRODUCTS</Link>
         </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">CONTACT</Link>
         </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/services">SERVICES</Link>
         </li>

      </ul>
      <Link class="btn btn-outline-success me-3" to="/cart">CART <span>{totalItems}</span></Link>
      <Link class="btn btn-outline-danger"  aria-current="page" to="/Customer_login">LOGOUT</Link>
        </div>
       </div>
       </nav>
        </div>
  )
}
export default Nav
