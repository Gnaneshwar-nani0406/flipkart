import React from 'react'
import {BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import Services from './Services'
import Cart from './Cart'
import Nav from './Nav'
import CustomerLogin from './Customer_login'
import Registration from './Registration'

const Index = () => {
  return (
    <BrowserRouter>
      <ConditionalNav />
      <Routes>
        <Route path='/' element={<CustomerLogin />} />
        <Route path={'/Customer_login'} element={<CustomerLogin />} />
        <Route path={'/registration'} element={<Registration />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/products'} element={<Products />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/services'} element={<Services />} />
        <Route path={'/cart'} element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

// Component to conditionally render Nav
const ConditionalNav = () => {
  const location = useLocation()
  const hideNavRoutes = ['/Customer_login', '/registration', '/']

  if (hideNavRoutes.includes(location.pathname)) {
    return null
  }

  return <Nav />
}

export default Index
