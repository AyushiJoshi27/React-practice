const cartIntialState = {
  cartItemCount: [],
  removeItemIndex:[],
}

const cartIntialState1 = {
  cartItemCount: [],
  removeItemIndex:[],
}

export const CartDataReducer = (state = {...cartIntialState}, action) => {
  switch (action.type) {
    case "CART_DATA_ACTION":
      console.log(action.payload);
      state.cartItemCount.push(action.payload)
      return { ...state, cartItemCount: state.cartItemCount};
    default: 
      return state;
  }
}


export const RemoveDataReducer = (state = {...cartIntialState}, action) => {
  //console.log(cartIntialState);
  switch(action.type) {
    case "REMOVE_DATA_INDEX":
      console.log(cartIntialState);
      console.log(state);
      /*
      if (cartIntialState.removeItemIndex === 0) {
        console.log(cartIntialState.removeItemIndex.slice(1));
        state.removeItemIndex.push(action.payload);
      } else if (cartIntialState.removeItemIndex === cartIntialState.cartItemCount.length -1){
        console.log(cartIntialState.cartItemCount.slice(0, -1))
        state.removeItemIndex.push(action.payload);
      } else {
        console.log("index" ,cartIntialState.removeItemIndex)
        console.log(cartIntialState.removeItemIndex.slice(0, cartIntialState.removeItemIndex).concate(cartIntialState.cartItemCount.slice(cartIntialState.removeItemIndex+1)));
        state.removeItemIndex.push(action.payload);
      }
      return {...state, removeItemIndex: state.removeItemIndex};*/
      break
    default:
      return state;

  }
}