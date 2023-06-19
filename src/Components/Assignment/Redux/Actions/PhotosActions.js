import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/photos';

export const fetchPhoto = (str) => async (dispatch) => {
  if (str) {
    try {
      const response = await axios.get(`http://localhost:3000/photos?${str}`);
      dispatch({
        type: 'FETCH_PHOTOS_SUCCESS',
        payload: response.data,
      })
    } catch (error) {
      dispatch(fetchPhotosFailure(error.message));
    }
  }
};

// const fetchphotosSuccess = (photos) => ({
//   type: 'FETCH_photoS_SUCCESS',
//   payload: photos,
// });

const fetchPhotosFailure = (error) => ({
  type: 'FETCH_PHOTOS_FAILURE',
  payload: error,
});

export const updatedPhotos = (data) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3000/photos/${data.id}`, data);
    dispatch({
      type: 'UPDATE_PHOTO_SUCCESS',
      payload: response.data,
    })
  } catch (error) {
    dispatch(updatePhotoFailure(error.message));
  }
};

const updatePhotoFailure = (error) => ({
  type: 'UPDATE_PHOTO_FAILURE',
  payload: error,
});

export const deletePhoto = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
    dispatch(deletePhotoSuccess(id));
  } catch (error) {
    dispatch(deletePhotoFailure(error.message));
  }
};

const deletePhotoSuccess = (id) => ({
  type: 'DELETE_PHOTO_SUCCESS',
  payload: id,
});

const deletePhotoFailure = (error) => ({
  type: 'DELETE_PHOTO_FAILURE',
  payload: error,
});

export const createPhoto = (newphoto) => async (dispatch) => {
  try {
    const response = await axios.photo(API_BASE_URL, newphoto);
    dispatch(createPhotosSuccess(response.data));
  } catch (error) {
    dispatch(createPhotosFailure(error.message));
  }
};

const createPhotosSuccess = (photo) => ({
  type: 'CREATE_PHOTO_SUCCESS',
  payload: photo,
});

const createPhotosFailure = (error) => ({
  type: 'CREATE_PHOTO_FAILURE',
  payload: error,
});