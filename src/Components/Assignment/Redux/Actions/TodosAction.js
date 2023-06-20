import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000/todos';

export const fetchTodos = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/todos?userId=${id}`);
    dispatch(fetchTodosSuccess(response.data));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};

const fetchTodosSuccess = (todos) => ({
  type: 'FETCH_TODOS_SUCCESS',
  payload: todos,
});

const fetchTodosFailure = (error) => ({
  type: 'FETCH_TODOS_FAILURE',
  payload: error,
});

// Action creator to update a todo
export const updateTodos = (data) => async (dispatch) => {
  dispatch(updateTodoLoader(true))
  try {
    const response = await axios.put(`http://localhost:3000/todos/${data.id}`, data);
    dispatch(updateTodoLoader(false))
    dispatch({
      type: 'UPDATE_TODOS_SUCCESS',
      payload: response.data,
    })
  } catch (error) {
    dispatch(updateTodoFailure(error.message));
  }
};

const updateTodoLoader = (loader) => ({
  type: 'UPDATE_TODOS_LOADER',
  payload: loader,
});

const updateTodoFailure = (error) => ({
  type: 'UPDATE_TODOS_FAILURE',
  payload: error,
});

// Action creator to delete a todo
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3000/todos/${id}`);
    console.log(response.status)
    response.status === 200 ? dispatch(deleteTodoSuccess(id)) : console.log("delete");
    return id;
  } catch (error) {
    dispatch(deleteTodoFailure(error.message));
  }
};

const deleteTodoSuccess = (todoId) => ({
  type: 'DELETE_TODO_SUCCESS',
  payload: todoId,
});

const deleteTodoLoader = (loader) => ({
  type: 'DELETE_TODO_LOADER',
  payload: loader,
});

const deleteTodoFailure = (error) => ({
  type: 'DELETE_TODO_FAILURE',
  payload: error,
});

// Action creator to create a new todo
export const createTodo = (newTodo) => async (dispatch) => {
  try {
    const response = await axios.post(API_BASE_URL, newTodo);
    dispatch(createTodoSuccess(response.data));
  } catch (error) {
    dispatch(createTodoFailure(error.message));
  }
};

const createTodoSuccess = (todo) => ({
  type: 'CREATE_TODO_SUCCESS',
  payload: todo,
});

const createTodoLoader = (loader) => ({
  type: 'CREATE_TODO_LOADER',
  payload: loader,
});

const createTodoFailure = (error) => ({
  type: 'CREATE_TODO_FAILURE',
  payload: error,
});