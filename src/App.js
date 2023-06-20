import './App.css';
import { Routes, Route } from 'react-router-dom';
import Checkboxes from './Components/CheckBox/CheckboxCompo';
// import Layout from './Components/Layout';
// import Buttons from './Components/Buttons/Buttons';
// import ButtonGroupCompo from './Components/Buttons/ButtonGroup';
// import GroupOrientation from './Components/Buttons/VerticalGroup';
// import FormPropsTextFields from './Components/TextFields/FormProps';
// import PostContainer from './Components/Layout/Box/Box';
// import StandardImageList from './Components/Layout/PostUi';
// import TitlebarBelowImageList from './Components/Layout/Grid/StandardTitleBarImg';
// import CustomImageListCompo from './Components/Layout/Grid/CustomImgList';
// import ResponsiveAppBar from './Components/Navbar/Navbar';
// import PrimarySearchAppBar from './Components/Navbar/MenuNavbar';
// import SimpleContainer from './Components/Layout/Container/Container';
// import ApiContent from './Components/Layout/Container/Api';
// import AccessibleBadges from './Components/CheckBox/Badge';
// import Albums from './Components/Assignment/Albums';
// import Posts from './Components/Assignment/Posts';
// import Comments from './Components/Assignment/Comments';
// import { Params } from './Components/Assignment/Params';
// import { RoutesManipulator } from './Components/Assignment/ApisExport';
// import MediaCard from './Components/Card/Card';
import ProfilePage from './Components/Assignment/ProfilePage';
import CreateTodos from './Components/Assignment/MessageDialog/Create/CreateTodo';
import CreateAlbums from './Components/Assignment/MessageDialog/Create/CreateAlbums';
import CreatePhoto from './Components/Assignment/MessageDialog/Create/CreatePhoto';
import CreatePost from './Components/Assignment/MessageDialog/Create/CreatePost';
import DeleteTodos from './Components/Assignment/MessageDialog/Delete/DeleteTodo';
import DeleteAlbum from './Components/Assignment/MessageDialog/Delete/DeleteAlbum';
import DeletePhoto from './Components/Assignment/MessageDialog/Delete/DeletePhoto';
import DeletePost from './Components/Assignment/MessageDialog/Delete/DeletePost';
import DeleteComment from './Components/Assignment/MessageDialog/Delete/DeleteComment';
import UpdateUserInfo from './Components/Assignment/MessageDialog/Update/UpdateUserInfo';
import UpdatedTodo from './Components/Assignment/MessageDialog/Update/UpdateTodo';
import UpdateAlbum from './Components/Assignment/MessageDialog/Update/UpdateAlbum';
import UpdatePost from './Components/Assignment/MessageDialog/Update/UpdatePost';
import UpdatePhoto from './Components/Assignment/MessageDialog/Update/UpdatePhoto';
import CommentUpdate from './Components/Assignment/MessageDialog/Update/UpdateComment';

function App() {
  return (
    <>
      <Routes>
        {/*<Route exact path='photos' element={}*/}
        {/* 
          <Route exact path='/layout' element={<Layout />} >
            <Route index element={< ButtonGroupCompo />} />
            <Route path='group-orient' element={<GroupOrientation/>}/>
            <Route path='button' element={ <Buttons />}></Route>
            <Route path='form-props' element={ <FormPropsTextFields/> } />
            <Route path='post-container' element={<PostContainer/>}></Route>
            <Route path='img-list' element={ <StandardImageList />} />
            <Route path='standard-title-bar-img' element={< TitlebarBelowImageList />}></Route>
            <Route path='custom-img-list' element={ <CustomImageListCompo/> } />
            <Route path='basic-navbar' element={ <ResponsiveAppBar /> } />
            <Route path='menu-navbar' element={ <PrimarySearchAppBar /> } />
            <Route path='SimpleContainer' element={<SimpleContainer/>} />
            <Route path='api-content' element={<ApiContent/>} />
            <Route path='badge' element={<AccessibleBadges />} />
            <Route path='albums' element={ <Albums/> } />
            <Route path='user-photo' element={ <Posts /> } />
            <Route path="user-photo/:userId" element={ <Posts /> } />
            <Route path='comment' element={<Comments/>} />
            <Route path='param' element={<Params/>} />
            <Route path='route-manipulator' element={ <RoutesManipulator /> } />
            <Route path='media-card' element={ <MediaCard /> } />
            <Route path='list_control' element={< Checkboxes />} />
            <Route path='dialog' element={ <ResponsiveDialog /> } />
          </Route> */}
        {/* <Route exact path='/' element={ <Checkboxes /> }></Route>
        <Route path='/facebook/:userId' element={<ProfilePage />}>
        </Route>
        <Route path="/edit" element={<DialogComponent />} /> */}
        <Route path="/" exact element={<Checkboxes />} />
        <Route path="/facebook/:userId" element={<ProfilePage />}>
          <Route path="create/album" element={<CreateAlbums />} />
          <Route path="create/todo" element={<CreateTodos />} />
          <Route path="create/photo" element={<CreatePhoto />} />
          <Route path="create/post" element={<CreatePost />} />
          <Route path="delete/todo/:id" element={<DeleteTodos />} />
          <Route path="delete/album/:id" element={<DeleteAlbum />} />
          <Route path="delete/photo/:id" element={<DeletePhoto />} />
          <Route path="delete/post/:id" element={<DeletePost />} />
          <Route path="delete/comment/:id" element={<DeleteComment />} />
          <Route path="update/user_info" element={<UpdateUserInfo />} />
          <Route path="edit/todo/:id" element={<UpdatedTodo />} />
          <Route path="edit/albums/:id" element={<UpdateAlbum/>} />
          <Route path="update/photo/:id" element={<UpdatePhoto/>} />
          <Route path="update/posts/:id" element={<UpdatePost />} />
          <Route path="update/comment/:id" element={<CommentUpdate />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
