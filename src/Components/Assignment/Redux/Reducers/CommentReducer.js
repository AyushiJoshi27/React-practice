const initialState = {
  comments: [],
  loading: false,
  error: null,
  msg: ''
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: null,
        msg: '',
      };
    case 'CREATE_COMMENT_MSG':
    case 'DELETE_COMMENT_MSG':
    case 'UPDATE_COMMENTS_MSG':
    case 'FETCH_COMMENTS_MSG':
      return {
        ...state,
        loading: false,
        msg: "",
        error: null,
      }
    case 'FETCH_COMMENTS_FAILURE':
    case 'UPDATE_COMMENT_FAILURE':
    case 'DELETE_COMMENT_FAILURE':
    case 'CREATE_COMMENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        msg: '',
      };
    case 'CREATE_COMMENT_LOADER':
    case 'UPDATE_COMMENTS_LOADER':
    case 'DELETE_COMMENT_LOADER':
    case 'FETCH_COMMENTS_LOADER':
      return {
        ...state,
        loading: true,
        error: null,
        msg: "",
      }
    case 'UPDATE_COMMENT_SUCCESS':
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.id ? action.payload : comment
        ),
        loading: false,
        error: null,
        msg: "Comment sucessfully updated",
      };
    case 'DELETE_COMMENT_SUCCESS':
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id !== action.payload),
        loading: false,
        error: null,
        msg: "Comment sucessfully deleted",
      };
    case 'CREATE_COMMENT_SUCCESS':
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading: false,
        error: null,
        msg: "Comment sucessfully created",
      };
    default:
      return state;
  }
};

export default commentReducer;