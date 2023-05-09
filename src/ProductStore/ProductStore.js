import React from 'react';
//import Example from '../Thunk/components/container/Example';
import {useNavigate} from 'react-router-dom';
import GetData from './GetData';
import Header from './Header';

export default function ProductStore() {
 const navigate = useNavigate();
 localStorage.setItem('user', 'Name');
 
  /*if ( sessionStorage.getItem('token') !== null ) {
    setTimeout(() => {
      sessionStorage.removeItem("token");
      console.log("removed item from storage: ",sessionStorage.getItem("token"));
      navigate('/');
    }, 5000);
  };*/

  return (
    <>
      < Header />
      < GetData />
      {/*<Example/>*/}
    </>
  )
}
