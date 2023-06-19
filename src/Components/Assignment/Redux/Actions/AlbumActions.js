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

// const fetchAlbumsSuccess = (albums) => ({
//   type: 'FETCH_ALBUMS_SUCCESS',
//   payload: albums,
// });

const fetchAlbumsFailure = (error) => ({
  type: 'FETCH_ALBUMS_FAILURE',
  payload: error,
});

export const updatedAlbums = (data) => async (dispatch) => {
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

export const deleteAlbum = (id) => async (dispatch) => {
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

export const createAlbum = (newAlbum) => async (dispatch) => {
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