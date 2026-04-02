const cartReducer = (state = [], action) => {
  switch (action.type) {

   case "ADD_TO_CART":
  const item = state.find(i => i.id === action.payload.id);

  if (item) {
    // item already exists → increase quantity
    return state.map(i =>
      i.id === action.payload.id
        ? { ...i, quantity: i.quantity + 1 }
        : i
    );
  } else {
    // new item → add quantity = 1
    return [...state, { ...action.payload, quantity: 1 }];
  }
}
};

export default cartReducer;