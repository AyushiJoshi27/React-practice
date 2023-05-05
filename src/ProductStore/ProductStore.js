import React from 'react';
//import Example from '../Thunk/components/container/Example';
import GetData from './GetData';
import Header from './Header';
import UserList from '../Thunk2/UserList';

export default function ProductStore() {
  return (
    <>
      <UserList />
      < Header />
      < GetData />
      {/*<Example/>*/}
    </>
  )
}
