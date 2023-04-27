/*import {createStore} from 'redux';
import RotateReducer from './Reducers/RotateReducer';

function configureStore(state = {rotating: true}) {
    return createStore(RotateReducer, state);
}


export default configureStore;*/

import { combineReducers, createStore } from "redux";
import { itemCount } from "./reducers/StoreReducer";

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

const userReducer = ( state= initialUserName, action) => {
  switch(action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload};
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  counterReducer: counterReducer,
  user: userReducer
})

const store = createStore(rootReducer);

export default store;


/*import { createStore, combineReducers } from "redux";
import { incrementReducer, decrementReducer } from "./reducers";

const rootReducer = combineReducers({
  increment: incrementReducer,
  decrement: decrementReducer,
});

const store = createStore(rootReducer);

export default store;*/