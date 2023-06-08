import React, { useEffect } from 'react'
import FbNavBarCompo from './FbNavBar'
import UserInfo from './UserInfo'
import { useDispatch } from 'react-redux';
import { fetchUsers } from './Redux/Actions/UserActions';
import { useParams } from 'react-router';
import { fetchTodos } from './Redux/Actions/TodosAction';
import { fetchPosts } from './Redux/Actions/PostActions';

export default function ProfilePage() {
  const {param} = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(param));
    dispatch(fetchTodos(param));
    dispatch(fetchPosts(param));
  }, []);

  return (
    <div className='fbMainContainer'>
        <FbNavBarCompo  />
        <UserInfo />
    </div>
  )
}
