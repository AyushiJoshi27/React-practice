/*import {createStore} from 'redux';
import RotateReducer from './Reducers/RotateReducer';

function configureStore(state = {rotating: true}) {
    return createStore(RotateReducer, state);
}
export default configureStore;
*/
import { combineReducers, createStore } from "redux";
import { ApiReducer } from "./reducers/StoreReducer";
import { AddToCartReducer } from "./reducers/AddToCartReducer";
import { CartDataReducer } from "./reducers/CartDataReducer";
import { RemoveDataReducer } from "./reducers/CartDataReducer";

const initialState = { counter: 0 };

const initialUserName = { name: 'John' };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const userReducer = (state = initialUserName, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  user: userReducer,
  ApiReducer,
  AddToCartReducer,
  CartDataReducer,
  RemoveDataReducer
})

const store = createStore(rootReducer);
export default store;

/*
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './StateMutation/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer
  },
});*/