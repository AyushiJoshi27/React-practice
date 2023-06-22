const initialState = {
  posts: [],
  loading: false,
  error: null,
  msg: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
        msg: "",
      };
    case 'UPDATE_POSTS_LOADER':
    case 'DELETE_POST_LOADER':
    case 'CREATE_POST_LOADER':
      return {
        ...state,
        loading: true,
        msg: "",
        error: null,
      }
    case 'CREATE_POST_MSG':
    case 'DELETE_POST_MSG':
    case 'UPDATE_POST_MSG':
    case 'FETCH_POSTS_MSG':
      return {
        ...state,
        loading: false,
        error: null,
        msg: "",
      }
    case 'FETCH_POSTS_FAILURE':
    case 'DELETE_POST_FAILURE':
    case 'UPDATE_POST_FAILURE':
    case 'CREATE_POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        msg: "",
      };
    case 'UPDATE_POSTS_SUCCESS':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        loading: false,
        msg: "Post updated successfully",
        error: null,
      };
    case 'DELETE_POST_SUCCESS':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false,
        msg: "Post deleted successfully",
        error: null,
      };
    case 'CREATE_POST_SUCCESS':
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        msg: "Post created successfully",
        error: null,
      };
    default:
      return state;
  }
};

export default postReducer;