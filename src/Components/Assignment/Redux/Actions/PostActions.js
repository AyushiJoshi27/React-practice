import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/posts';

export const fetchPosts = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/posts?userId=${id}`);
    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

const fetchPostsSuccess = (posts) => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: posts,
});

const fetchPostsFailure = (error) => ({
  type: 'FETCH_POSTS_FAILURE',
  payload: error,
});

export const fetchPostsMsg = (msg) => ({
  type: 'FETCH_POSTS_MSG',
  payload: msg,
});

export const updatedPosts = (data) => async (dispatch) => {
  dispatch(updatePostLoader(true))
  try {
    const response = await axios.put(`http://localhost:3000/posts/${data.id}`, data);
    dispatch({
      type: 'UPDATE_POSTS_SUCCESS',
      payload: response.data,
    })
  } catch (error) {
    dispatch(updatePostFailure(error.message));
  }
};

const updatePostFailure = (error) => ({
  type: 'UPDATE_POST_FAILURE',
  payload: error,
});

const updatePostLoader = (loader) => ({
  type: 'UPDATE_POSTS_LOADER',
  payload: loader,
});

export const UpdatePostMsg = (msg) => ({
  type: 'UPDATE_POST_MSG',
  payload: msg,
});

export const deletePost = (id) => async (dispatch) => {
  dispatch(deletePostUpdate(true));
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
    dispatch(deletePostSuccess(id));
  } catch (error) {
    dispatch(deletePostFailure(error.message));
  }
};

const deletePostSuccess = (id) => ({
  type: 'DELETE_POST_SUCCESS',
  payload: id,
});

const deletePostFailure = (error) => ({
  type: 'DELETE_POST_FAILURE',
  payload: error,
});

const deletePostUpdate = (loader) => ({
  type: 'DELETE_POST_LOADER',
  payload: loader,
});

export const deletePostMsg = (msg) => ({
  type: 'DELETE_POST_MSG',
  payload: msg,
});

export const createPost = (newPost) => async (dispatch) => {
  dispatch(createPostLoader(true));
  try {
    const response = await axios.post(API_BASE_URL, newPost);
    dispatch(createPostsSuccess(response.data));
  } catch (error) {
    dispatch(createPostsFailure(error.message));
  }
};

const createPostsSuccess = (post) => ({
  type: 'CREATE_POST_SUCCESS',
  payload: post,
});

const createPostsFailure = (error) => ({
  type: 'CREATE_POST_FAILURE',
  payload: error,
});

const createPostLoader = (loader) => ({
  type: 'CREATE_POST_LOADER',
  payload: loader,
});

export const createPostMsg = (msg) => ({
  type: 'CREATE_POST_MSG',
  payload: msg,
});