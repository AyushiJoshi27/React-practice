const cartIntialState = {
  cartItemCount: [],
  removeItemIndex:[],
}

export const CartDataReducer = (state = {...cartIntialState}, action) => {
  switch (action.type) {
    case "CART_DATA_ACTION":
      if (state.cartItemCount.includes(action.payload)) {
        console.log("True", action.payload);
        const a = state.cartItemCount.filter((item) => item.id !== action.payload.id)
        return {...state, cartItemCount: a}
      } else { 
        console.log("False", action.payload);
        state.cartItemCount.push(action.payload);
        return { ...state, cartItemCount: state.cartItemCount}
      };
    default: 
      return state;
  }
}
