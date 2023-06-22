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

const fetchPhotosFailure = (error) => ({
  type: 'FETCH_PHOTOS_FAILURE',
  payload: error,
});

export const fetchPhotosMsg = (msg) => ({
  type: 'FETCH_PhotoS_MSG',
  payload: msg,
});

export const updatedPhotos = (data) => async (dispatch) => {
  dispatch(updatePhotoLoader(true))
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

const updatePhotoLoader = (loader) => ({
  type: 'UPDATE_PhotoS_LOADER',
  payload: loader,
});

export const updatePhotosMsg = (msg) => ({
  type: 'UPDATE_PhotoS_MSG',
  payload: msg,
})

export const deletePhoto = (id) => async (dispatch) => {
  dispatch(deletePhotoUpdate(true))
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

const deletePhotoUpdate = (loader) => ({
  type: 'DELETE_Photo_LOADER',
  payload: loader,
});

export const deletePhotoMsg = (msg) => ({
  type: 'DELETE_Photo_MSG',
  payload: msg,
});

export const createPhoto = (newphoto) => async (dispatch) => {
  dispatch(createPhotoLoader(true))
  try {
    const response = await axios.post(API_BASE_URL, newphoto);
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

const createPhotoLoader = (loader) => ({
  type: 'CREATE_Photo_LOADER',
  payload: loader,
});

export const createPhotoMsg = (msg) => ({
  type: 'CREATE_Photo_MSG',
  payload: msg,
});