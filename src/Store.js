import { getUserDataReducer } from './Components/Assignment/Redux/Reducers/UserReducer';
import { configureStore } from '@reduxjs/toolkit';
import { getTodosDataReducer } from './Components/Assignment/Redux/Reducers/TodosReducer';
import { getAlbumDataReducer } from './Components/Assignment/Redux/Reducers/AlbumReducer';
import { getPhotosDataReducer } from './Components/Assignment/Redux/Reducers/PhotoReducer';

const rootReducer = {
  getUserData: getUserDataReducer,
  getTodosData: getTodosDataReducer,
  getAlbumData: getAlbumDataReducer,
  getPhotosDataReducer,
};

export const store = configureStore({
  reducer: rootReducer
})