export const GetTodosReducer = (state = [], action) => {
    switch(action.type) {
      case "GET_COMMENTS": 
        return action.payload;
      default:
        return state;
    }
  }