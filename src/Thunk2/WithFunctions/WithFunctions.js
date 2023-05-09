import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
// action creators
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
  
  // reducer
  const initialState = {
    data: null,
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
  
  // component
  export const WithFunction = () => {
    const dispatch = useDispatch();
    console.log(useSelector(state => state.withFunctions.data.id))
    const id = useSelector(state => state.withFunctions.data);
    const username = useSelector(state => state.withFunctions)
    const isLoading = useSelector(state => state.withFunctions);
    const error = useSelector(state => state.withFunctions);
  
    useEffect(() => {
      dispatch(fetchData());
    }, []);
  
    return (
      <div>
        {/*{isLoading && <p>Loading data...</p>}
        {data && <p>{data}</p>}
    {error && <p>{error}</p>}*/}
    WithFunctions
      </div>
    );
  };