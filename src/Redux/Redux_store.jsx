import React from 'react'
import { createStore } from "redux";


const initialState = {
  cart: []
};


const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload]
    };
  }

  return state;
};


const store = createStore(reducer);

export default store;