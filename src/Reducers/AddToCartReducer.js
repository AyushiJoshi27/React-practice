export const initialState = {
  itemsCount: 0,
  
};

export const AddToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, itemsCount: state.itemsCount + 1 }
    default:
      return state;
  }
};
