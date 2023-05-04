import { applyMiddleware } from "redux";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("action", action);
    console.log("reducer: ", action.payload )
    console.log("current state from middleware", store.getState());
    next(action);
  };

export const middleware = applyMiddleware(loggerMiddleware);