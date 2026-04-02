import React from 'react'

import {BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import Services from './Services'
import Cart from './Cart'
import Nav from './Nav'
import Customer_login from './Customer_login'
import Registration from './Registration'
import LOGOUT from'./Customer_login'

      const Index = () => {
      return (
    <div>
        <BrowserRouter>
          <Nav />
           <Routes>
           <Route path={'/Customer_login'} element={<Customer_login />} /> 
           <Route path={'/registration'} element={<Registration />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/products'} element={<Products />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/services'} element={<Services />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/Customer_login'} element={<LOGOUT/>}/>
          
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Index
          
          
         