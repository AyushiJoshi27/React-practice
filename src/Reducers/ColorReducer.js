const initialState = 'black';

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return action.payload;
    default:
      return state;
  }
};

export default colorReducer;
