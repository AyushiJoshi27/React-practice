const initialState = {
  todos: [],
  loading: false,
  error: null,
  msg: ''
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
        msg: "",
      };
    case 'FETCH_TODOS_FAILURE':
    case 'UPDATE_TODOS_FAILURE':
    case 'DELETE_TODO_FAILURE':
    case 'CREATE_TODO_FAILURE':
      return {
        ...state,
        loading: false,
        msg: "",
        error: action.payload,
      };
    case 'CREATE_TODO_MSG':
    case 'DELETE_TODO_MSG':
    case 'UPDATE_TODOS_MSG':
    case 'FETCH_TODOS_MSG':
      return {
        ...state,
        loading: false,
        msg: "",
        error: null,
      }
    case 'CREATE_TODO_LOADER':
    case 'UPDATE_TODOS_LOADER':
    case 'DELETE_TODO_LOADER':
    case 'FETCH_TODOS_LOADER':
      return {
        ...state,
        loading: true,
        error: null,
        msg: "",
      }
    case 'UPDATE_TODOS_SUCCESS':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
        loading: false,
        error: null,
        msg: "Todo sucessfully updated",
      };
    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.filter((data) => data.id !== action.payload),
        loading: false,
        error: null,
        msg: "Todo sucessfully deleted",
      };
    case 'CREATE_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
        error: null,
        msg: "Todo sucessfully created",
      };
    default:
      return state;
  }
};
