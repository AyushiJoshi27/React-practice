import axios from 'axios';

export const fetchUsers = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    const user = response.data;
    dispatch(fetchUsersSuccess(user));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

const fetchUsersSuccess = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: users,
});

const fetchUsersFailure = (error) => ({
  type: 'FETCH_USERS_FAILURE',
  payload: error,
});

export const updateUser = (userInfo) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3000/users/${userInfo.id}`, userInfo);
    const updatedUserData = response.data;
    dispatch({
      type: 'UPDATE_USERS_SUCCESS',
      payload: updatedUserData
    });
  } catch (error) {
    dispatch(updateUserFailure(error.message));
  }
};

const updateUserFailure = (error) => ({
  type: 'UPDATE_USERS_FAILURE',
  payload: error,
});