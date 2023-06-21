import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './Components/Assignment/Redux/Reducers/AlbumReducer';
import userReducer from './Components/Assignment/Redux/Reducers/UserReducer';
import postReducer from './Components/Assignment/Redux/Reducers/PostReducer';
import photoReducer from './Components/Assignment/Redux/Reducers/PhotoReducer';
import commentReducer from './Components/Assignment/Redux/Reducers/CommentReducer';
import { todoReducer } from './Components/Assignment/Redux/Reducers/TodosReducer';

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
})