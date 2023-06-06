const initialState = []

export const getPhotosDataReducer = (state = initialState, action) => {
    switch(action.type) {
      case "GET_PHOTO_DATA": 
        return action.payload;
      default:
        return state;
    }
  }