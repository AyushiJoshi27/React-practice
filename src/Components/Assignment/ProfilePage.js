import React, { useEffect } from 'react'
import FbNavBarCompo from './FbNavBar'
import UserInfo from './UserInfo'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './Redux/Actions/UserActions.';
import { useParams, userId } from 'react-router';
import { fetchTodos } from './Redux/Actions/TodosAction';
import { fetchPosts } from './Redux/Actions/PostActions';
import { fetchAlbum } from './Redux/Actions/AlbumActions';
import { fetchPhoto } from './Redux/Actions/PhotosActions'
import { DialogLink } from './Dialogs/Dialogs';
import { fetchComments } from './Redux/Actions/CommentActions';

export default function ProfilePage() {
  const {userId} = useParams()
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchUsers(userId));
    dispatch(fetchPosts(userId));
    dispatch(fetchAlbum(userId));
  }, []);

  var postStr = "";
  if (posts) {
    (
      // eslint-disable-next-line array-callback-return
      posts && posts.map((data) => {
        let str1 = "postId=" + data.id + "&";
        postStr += str1;
      })
    )
    let sortStr = "_sort=postId";
    postStr += sortStr;
  }

  useEffect(() => {
    if (postStr !== "_sort=postId") {
      dispatch(fetchComments(postStr));
    }
  }, [postStr, dispatch])

  return (
    <div className='fbMainContainer'>
        <FbNavBarCompo  />
        <UserInfo />
    </div>
  )
}