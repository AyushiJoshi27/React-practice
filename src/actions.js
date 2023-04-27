export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";

export function incrementCount() {
  return {
    type: INCREMENT_COUNT,
  };
}

export function decrementCount() {
  return {
    type: DECREMENT_COUNT,
  };
}

export const AddToCartAction = () => {
  return {
    type: "ADD_TO_CART",
    //payload
  }
}