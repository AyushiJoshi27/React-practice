import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/comments';

export const fetchComments = (postStr) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/comments?${postStr}`);
    dispatch({
      type: 'FETCH_COMMENTS_SUCCESS',
      payload: response.data
    }
    )
  } catch (error) {
    dispatch(fetchCommentsFailure(error.message));
  }
};

const fetchCommentsFailure = (error) => ({
  type: 'FETCH_COMMENTS_FAILURE',
  payload: error,
});

export const updatedComments = (data) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3000/comments/${data.id}`, data);
    dispatch({
      type: 'UPDATE_COMMENT_SUCCESS',
      payload: response.data,
    })
  } catch (error) {
    dispatch(updateCommentFailure(error.message));
  }
};

const updateCommentFailure = (error) => ({
  type: 'UPDATE_COMMENT_FAILURE',
  payload: error,
});

export const deletedComment = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/comments/${id}`);
    dispatch({
      type: 'DELETE_COMMENT_SUCCESS',
      payload: id,
    });
  } catch (error) {
    dispatch(deleteCommentFailure(error.message));
  }
};

const deleteCommentFailure = (error) => ({
  type: 'DELETE_COMMENT_FAILURE',
  payload: error,
});

export const createComment = (newComment) => async (dispatch) => {
  try {
    const response = await axios.post(API_BASE_URL, newComment);
    dispatch({
      type: 'CREATE_COMMENT_SUCCESS',
      payload: response.data,
    })
  } catch (error) {
    dispatch(createCommentsFailure(error.message));
  }
};

const createCommentsFailure = (error) => ({
  type: 'CREATE_COMMENT_FAILURE',
  payload: error,
});