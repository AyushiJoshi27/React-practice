import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { getAlbumDataReducer } from './Components/Assignment/Redux/Reducers/AlbumReducer';
import { getPhotosDataReducer } from './Components/Assignment/Redux/Reducers/PhotoReducer';
import todoReducer from './Components/Assignment/Redux/Reducers/TodosReducer';
import userReducer from './Components/Assignment/Redux/Reducers/UserReducer';
import postReducer from './Components/Assignment/Redux/Reducers/PostReducer';

const rootReducer = {
  todos: todoReducer,
  users: userReducer,
  posts: postReducer,
  getAlbumData: getAlbumDataReducer,
  getPhotoData: getPhotosDataReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})