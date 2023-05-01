const intialState = {
  cartItemCount: [],
}

export const CartDataReducer = (state = intialState, action) => {
  switch (action.type) {
    case "CART_DATA_ACTION":
      state.cartItemCount.push(action.payload)
      return { ...state, cartItemCount: state.cartItemCount};
    default: 
      return state;
  }
}