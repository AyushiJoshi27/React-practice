import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './Components/Layout';
import Buttons from './Components/Buttons/Buttons';
import ButtonGroupCompo from './Components/Buttons/ButtonGroup';
import GroupOrientation from './Components/Buttons/VerticalGroup';
import FormPropsTextFields from './Components/TextFields/FormProps';
import Checkboxes from './Components/CheckBox/CheckboxCompo';
import PostContainer from './Components/Layout/Box/Box';
import StandardImageList from './Components/Layout/PostUi';
import TitlebarBelowImageList from './Components/Layout/Grid/StandardTitleBarImg';
import CustomImageListCompo from './Components/Layout/Grid/CustomImgList';
import ResponsiveAppBar from './Components/Navbar/Navbar';
import PrimarySearchAppBar from './Components/Navbar/MenuNavbar';
import SimpleContainer from './Components/Layout/Container/Container';
import ApiContent from './Components/Layout/Container/Api';
import AccessibleBadges from './Components/CheckBox/Badge';
import Albums from './Components/Assignment/Albums';
import ProfilePage from './Components/Assignment/ProfilePage';
import Posts from './Components/Assignment/Posts';
import Comments from './Components/Assignment/Comments';
import { Params } from './Components/Assignment/Params';
import { RoutesManipulator } from './Components/Assignment/ApisExport';
import MediaCard from './Components/Card/Card';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*<Route exact path='photos' element={}*/}
          <Route exact path='/' element={ <Checkboxes /> }></Route>
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
            <Route path='facebook/:param' element={ <ProfilePage/> } />
            <Route path='user-photo' element={ <Posts /> } />
            <Route path="user-photo/:param" element={ <Posts /> } />
            <Route path='comment' element={<Comments/>} />
            <Route path='param' element={<Params/>} />
            <Route path='route-manipulator' element={ <RoutesManipulator /> } />
            <Route path='media-card' element={ <MediaCard /> } />
          </Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
