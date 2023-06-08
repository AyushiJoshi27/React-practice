import React, { useEffect } from 'react'
import FbNavBarCompo from './FbNavBar'
import UserInfo from './UserInfo'
import { useDispatch } from 'react-redux';
import { fetchUsers } from './Redux/Actions/UserActions';
import { useParams } from 'react-router';
import { fetchTodos } from './Redux/Actions/TodosAction';

export default function ProfilePage() {
  const {param} = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(param));
  }, []);

  useEffect(() => {
    dispatch(fetchTodos(param));
  }, [])

  return (
    <div className='fbMainContainer'>
        <FbNavBarCompo  />
        <UserInfo />
    </div>
  )
}
