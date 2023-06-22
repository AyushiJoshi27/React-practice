import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/albums';

export const fetchAlbum = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/albums?userId=${id}`);
    dispatch({
      type: 'FETCH_ALBUMS_SUCCESS',
      payload: response.data,
    })
  } catch (error) {
    dispatch(fetchAlbumsFailure(error.message));
  }
};

const fetchAlbumsFailure = (error) => ({
  type: 'FETCH_ALBUMS_FAILURE',
  payload: error,
});

const fetchAlbumsLoader = (loader) => ({
  type: 'FETCH_ALBUMS_LOADER',
  payload: loader,
});

export const fetchAlbumsMsg = (msg) => ({
  type: 'FETCH_ALBUMS_MSG',
  payload: msg,
});

export const updatedAlbums = (data) => async (dispatch) => {
  dispatch(updateAlbumLoader(true));
  try {
    const response = await axios.put(`http://localhost:3000/albums/${data.id}`, data);
    dispatch({
      type: 'UPDATE_ALBUM_SUCCESS',
      payload: response.data,
    })
  } catch (error) {
    dispatch(updateAlbumFailure(error.message));
  }
};

const updateAlbumFailure = (error) => ({
  type: 'UPDATE_ALBUM_FAILURE',
  payload: error,
});

const updateAlbumLoader = (loader) => ({
  type: 'UPDATE_ALBUMS_LOADER',
  payload: loader,
});

export const updateAlbumsMsg = (msg) => ({
  type: 'UPDATE_ALBUMS_MSG',
  payload: msg,
})

export const deleteAlbum = (id) => async (dispatch) => {
  dispatch(deleteAlbumLoader(true));
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
    dispatch(deleteAlbumSuccess(id));
  } catch (error) {
    dispatch(deleteAlbumFailure(error.message));
  }
};

const deleteAlbumSuccess = (id) => ({
  type: 'DELETE_ALBUM_SUCCESS',
  payload: id,
});

const deleteAlbumFailure = (error) => ({
  type: 'DELETE_ALBUM_FAILURE',
  payload: error,
});

const deleteAlbumLoader = (loader) => ({
  type: 'DELETE_ALBUM_LOADER',
  payload: loader,
});

export const deleteAlbumMsg = (msg) => ({
  type: 'DELETE_ALBUM_MSG',
  payload: msg,
});

export const createAlbum = (newAlbum) => async (dispatch) => {
  dispatch(createAlbumLoader(true));
  try {
    const response = await axios.post(API_BASE_URL, newAlbum);
    dispatch(createAlbumsSuccess(response.data));
  } catch (error) {
    dispatch(createAlbumsFailure(error.message));
  }
};

const createAlbumsSuccess = (album) => ({
  type: 'CREATE_ALBUM_SUCCESS',
  payload: album,
});

const createAlbumsFailure = (error) => ({
  type: 'CREATE_ALBUM_FAILURE',
  payload: error,
});

const createAlbumLoader = (loader) => ({
  type: 'CREATE_ALBUM_LOADER',
  payload: loader,
});

export const createAlbumMsg = (msg) => ({
  type: 'CREATE_ALBUM_MSG',
  payload: msg,
});