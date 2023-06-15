const initialState = {
    comments: [],
    loading: false,
    error: null,
  };
  
  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMMENTS_SUCCESS':
        return {
          ...state,
          comments: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_COMMENTS_FAILURE':
      case 'UPDATE_COMMENT_FAILURE':
      case 'DELETE_COMMENT_FAILURE':
      case 'CREATE_COMMENT_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'UPDATE_COMMENT_SUCCESS':
        return {
          ...state,
          comments: state.comments.map((comment) =>
            comment.id === action.payload.id ? action.payload : comment
          ),
        };
      case 'DELETE_COMMENT_SUCCESS':
        return {
          ...state,
          comments: state.comments.filter((comment) => comment.id !== action.payload),
        };
      case 'CREATE_COMMENT_SUCCESS':
        return {
          ...state,
          comments: [...state.comments, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default commentReducer;