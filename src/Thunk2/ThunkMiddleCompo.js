import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Thunk3Red from './ThunkCompoRed';
import { fetchDataFailure, fetchDataSuccess, fetchDataRequest } from './ThunkMiddle';

export const ThunkMiddle = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const fetchData = () => {
    return dispatch => {
      dispatch(fetchDataRequest());
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(data => {
          dispatch(fetchDataSuccess(data));
        })
        .catch(error => {
          dispatch(fetchDataFailure(error.message));
        });
    };
  };

  if (data.loading) {
    return <div>Loading...</div>;
  }

  if (data.error) {
    return <div>{data.error}</div>;
  }

  return (
    <div>
      Middleware
    </div>
  );
};
