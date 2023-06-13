import React, { useEffect } from 'react'
import FbNavBarCompo from './FbNavBar'
import UserInfo from './UserInfo'
import { useDispatch } from 'react-redux';
import { fetchUsers } from './Redux/Actions/UserActions.';
import { useParams, userId } from 'react-router';
import { fetchTodos } from './Redux/Actions/TodosAction';
import { fetchPosts } from './Redux/Actions/PostActions';
import { fetchAlbum, fetchAlbums } from './Redux/Actions/AlbumActions';

export default function ProfilePage() {
  const {userId} = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(userId));
    dispatch(fetchTodos(userId));
    dispatch(fetchPosts(userId));
    // dispatch(fetchAlbums(userId));
    dispatch(fetchAlbum(userId));
  }, []);

  return (
    <div className='fbMainContainer'>
        <FbNavBarCompo  />
        <UserInfo />
    </div>
  )
}