import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './Components/Assignment/Redux/Reducers/AlbumReducer';
import todoReducer from './Components/Assignment/Redux/Reducers/TodosReducer';
import userReducer from './Components/Assignment/Redux/Reducers/UserReducer';
import postReducer from './Components/Assignment/Redux/Reducers/PostReducer';
import photoReducer from './Components/Assignment/Redux/Reducers/PhotoReducer';
import commentReducer from './Components/Assignment/Redux/Reducers/CommentReducer';

const rootReducer = {
  todos: todoReducer,
  users: userReducer,
  posts: postReducer,
  albums: albumReducer,
  photos: photoReducer,
  comments: commentReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})