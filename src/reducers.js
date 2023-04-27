import { INCREMENT_COUNT, DECREMENT_COUNT } from "./actions";
import initialState from "./state";

export function incrementReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 5 };
    default:
      return state;
  }
}

export function decrementReducer(state = initialState, action) {
  switch (action.type) {
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 5 };
    default:
      return state;
  }
}