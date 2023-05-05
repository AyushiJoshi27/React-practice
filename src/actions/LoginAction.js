import { LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE 
} from '../ProductStore/LoginAuth/ActionTypes';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    fetch('https://fakestoreapi.com/auth/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const token = data.token;
        sessionStorage.setItem('token', token);
        dispatch(loginSuccess(token));
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};