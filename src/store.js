/*import {createStore} from 'redux';
import RotateReducer from './Reducers/RotateReducer';

function configureStore(state = {rotating: true}) {
    return createStore(RotateReducer, state);
}
export default configureStore;
*/
import { combineReducers, createStore, applyMiddleware } from "redux";
import { ApiReducer } from "./reducers/StoreReducer";
import { AddToCartReducer } from "./reducers/AddToCartReducer";
import { CartDataReducer } from "./reducers/CartDataReducer";
//import { RemoveDataReducer } from "./reducers/CartDataReducer";
import usersReducer from "./Thunk2/TReducers";
import reduxThunk from 'redux-thunk';

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

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  user: userReducer,
  ApiReducer,
  AddToCartReducer,
  CartDataReducer,
  reducer,
  users: usersReducer,
})

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("action", action);
  console.log("reducer: ", action.payload )
  action.payload = 3;
  //console.log("updated state for middleware", store.getState());
  next(action);
};

export const middleware = applyMiddleware(loggerMiddleware);

//const store = createStore(rootReducer, middleware);
const store = createStore(rootReducer, applyMiddleware(reduxThunk));
//const store = createStore(rootReducer);
export default store;

store.subscribe(() => {
  console.log("current state", store.getState());
});

store.dispatch({
  type: "INCREMENT",
  payload: 1
});

store.dispatch({
  type: "INCREMENT",
  payload: 5
});

store.dispatch({
  type: "DECREMENT",
  payload: 2
});