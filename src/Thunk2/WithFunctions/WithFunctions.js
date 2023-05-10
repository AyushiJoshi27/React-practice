import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import GetUsers from '../../JsonServer/GetUsers';

const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    return fetch('https://fakestoreapi.com/users/1')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchDataSuccess(data));
        console.log(data);
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

const fetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST'
  };
};

const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data
  };
};

const fetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error
  };
};

const initialState = {
  data: '',
  isLoading: false,
  error: null
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};


export const WithFunction = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.dataReducer.data);
  //console.log("Data:", data)

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const username = useSelector(state => state.dataReducer.data.username);
  //console.log(useSelector(state => state.dataReducer.data))
  //console.log(username);
  const isLoading = useSelector(state => state.dataReducer.isLoading);
  const error = useSelector(state => state.dataReducer.isLoading);

  return (
    <>
      <div>
        {isLoading && <p>Loading data...</p>}
        {error.error && <p>{error.error}</p>}
        {username && <p>usernam: {username}</p>}
        WithFunctions
      </div>
      <GetUsers />
    </>
  );
};