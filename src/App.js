import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Buttons from './Components/Buttons/Buttons';
import ButtonGroupCompo from './Components/Buttons/ButtonGroup';
import GroupOrientation from './Components/Buttons/VerticalGroup';
import FormPropsTextFields from './Components/TextFields/FormProps';
import Checkboxes from './Components/CheckBox/CheckboxCompo';
import PostContainer from './Components/Layout/Box/Box';
import StandardImageList from './Components/Assignment/PostUi';
import TitlebarBelowImageList from './Components/Layout/Grid/StandardTitleBarImg';
import CustomImageListCompo from './Components/Layout/Grid/CustomImgList';
import ResponsiveAppBar from './Components/Navbar/Navbar';
import PrimarySearchAppBar from './Components/Navbar/MenuNavbar';

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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
