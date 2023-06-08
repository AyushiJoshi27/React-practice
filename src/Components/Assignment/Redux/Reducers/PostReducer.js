const initialState = []

export const getPostsDataReducer = (state = initialState, action) => {
    switch(action.type) {
      case "GET_POST_DATA": 
        return action.payload;
      default:
        return state;
    }
  }