export const getTodosDataReducer = (state = [], action) => {
    switch(action.type) {
      case "GET_TODOS_DATA": 
        return action.payload;
      default:
        return state;
    }
  }