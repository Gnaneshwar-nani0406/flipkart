import { createStore } from "redux";
import cartReducer from "./cartReducer";


const initialState = {
  cart: []
};


const reducer = (state = initialState, action) => {
  return {
    ...state,
    cart: cartReducer(state.cart, action)
  };
};


const store = createStore(reducer);

export default store;
