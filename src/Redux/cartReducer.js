const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = state.find(i => i.id === action.payload.id);

      if (item) {
        return state.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: (i.quantity || 1) + 1 }
            : i
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload);

    case "INCREASE_QUANTITY":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );

    case "DECREASE_QUANTITY":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
          : item
      );

    default:
      return state;
  }
};

export default cartReducer;
