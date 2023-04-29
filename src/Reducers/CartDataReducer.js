const intialState = {
  cartItemCount: [],
}

export const CartDataReducer = (state = intialState, action) => {
  switch (action.type) {
    case "CART_DATA_ACTION":
      return { ...state, cartData: action.data};
    default: 
      return state;
  }
}