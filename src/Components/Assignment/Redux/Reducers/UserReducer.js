const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_USERS_FAILURE':
    case 'UPDATE_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_USERS_SUCCESS':
      console.log()
      console.log(action.payload);
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;