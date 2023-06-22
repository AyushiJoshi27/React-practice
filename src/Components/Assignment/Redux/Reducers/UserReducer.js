const initialState = {
  users: "",
  loading: false,
  error: null,
  msg: "", 
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
        msg: ""
      };
    case 'FETCH_USERS_FAILURE':
    case 'UPDATE_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        msg: "",
        error: action.payload,
      };
    case 'UPDATE_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        msg: "User data successfully updated",
        error: null,
      };
      case 'UPDATE_USER_LOADER':
        return {
          ...state,
          loading: true,
          error: null,
          msg: "",
        };
    default:
      return state;
  }
};

export default userReducer;