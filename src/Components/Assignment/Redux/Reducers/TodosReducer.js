const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_TODOS_FAILURE':
    case 'UPDATE_TODOS_FAILURE':
    case 'DELETE_TODO_FAILURE':
    case 'CREATE_TODO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_TODOS_SUCCESS':
      return {
        ...state,
        // todos: action.payload
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        // todos: state.todos
      };
    case 'CREATE_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;