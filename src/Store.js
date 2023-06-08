import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { getAlbumDataReducer } from './Components/Assignment/Redux/Reducers/AlbumReducer';
import { getPhotosDataReducer } from './Components/Assignment/Redux/Reducers/PhotoReducer';
import { getPostsDataReducer } from './Components/Assignment/Redux/Reducers/PostReducer';
import todoReducer from './Components/Assignment/Redux/Reducers/TodosReducer';
import userReducer from './Components/Assignment/Redux/Reducers/UserReducer';

const rootReducer = {
  todos: todoReducer,
  users: userReducer,
  getAlbumData: getAlbumDataReducer,
  getPhotoData: getPhotosDataReducer,
  getPostsData: getPostsDataReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})