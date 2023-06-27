import './App.css';
import { Routes, Route } from 'react-router-dom';
import Checkboxes from './Components/CheckBox/CheckboxCompo';
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
import UpdatedTodo from './Components/Assignment/MessageDialog/Update/UpdateTodo';
import UpdateAlbum from './Components/Assignment/MessageDialog/Update/UpdateAlbum';
import UpdatePost from './Components/Assignment/MessageDialog/Update/UpdatePost';
import UpdatePhoto from './Components/Assignment/MessageDialog/Update/UpdatePhoto';
import CommentUpdate from './Components/Assignment/MessageDialog/Update/UpdateComment';
import BasicFormikForm from './Components/Formik/BasicFormikForm';
import SigUpForm from './Components/Formik/SigUpForm/SigUpForm';
import UpdateUserInfo from './Components/Assignment/MessageDialog/Update/UpdateUserInfo';
import DatePickerParent from './Components/Formik/Fields/DatePickerParent';
import { JobApplicationForm } from './Components/Formik/JobApplicationForm';
import { TouchedFieldsCompo } from './Components/Formik/TouchedFields';
import TextareaFormik from './Components/Formik/Fields/TextareaFormik';
import { FormikCompo } from './Components/Formik/FormikCompo';
import FormikDropdown from './Components/Formik/FormikDropdown';
import { Checkbox } from './Components/Formik/Checkbox';
import AutoComplete from './Components/Formik/AutoComplete';
import FileUpload from './Components/Formik/FileUpload';
import FileUploadWithPreview from './Components/Formik/FileUploadWithPreview';
import RegisterValues from './Components/FormHook/RegisterValues';
import FormHook from './Components/FormHook/FormHook';
import RegisterFields from './Components/FormHook/RegisterFields';
import { IntegrateForm } from './Components/FormHook/IntegrateForm';
import ErrorHandlingForm from './Components/FormHook/ErrorHandling';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Checkboxes />} />
      <Route path="/textarea_formik" element={<TextareaFormik />} />
      <Route path="/form_form" element={<BasicFormikForm />} />
      <Route path="/sign_up_form" element={<SigUpForm />} />
      <Route path="datePickerParent" element={<DatePickerParent />} />
      <Route path="jobApplicationForm" element={<JobApplicationForm />} />
      <Route path="touchedFields" element={<TouchedFieldsCompo />} />
      <Route path="formik_compo" element={<FormikCompo />} />
      <Route path="formik_dropdown" element={<FormikDropdown/>} />
      <Route path="Checkbox" element={<Checkbox/>} />
      <Route path="AutoComplete" element={<AutoComplete/>} />
      <Route path="FileUpload" element={<FileUpload />} />
      <Route path="FileUploadWithPreview" element={<FileUploadWithPreview />} />
      <Route path="RegisterValues" element={<RegisterValues />} />
      <Route path="FormHook" element={<FormHook />} />
      <Route path="Integrate_Form" element={<IntegrateForm />} />
      <Route path="RegisterFields" element={<RegisterFields />} />
      <Route path="ErrorHandlingForm" element={<ErrorHandlingForm />} />
      <Route path="/facebook/:userId" element={<ProfilePage />}>
        <Route path="update/info" element={<UpdateUserInfo />} />
        <Route path="create/album" element={<CreateAlbums />} />
        <Route path="create/todo" element={<CreateTodos />} />
        <Route path="create/photo" element={<CreatePhoto />} />
        <Route path="create/post" element={<CreatePost />} />
        <Route path="delete/todo/:id" element={<DeleteTodos />} />
        <Route path="delete/album/:id" element={<DeleteAlbum />} />
        <Route path="delete/photo/:id" element={<DeletePhoto />} />
        <Route path="delete/post/:id" element={<DeletePost />} />
        <Route path="delete/comment/:id" element={<DeleteComment />} />
        <Route path="edit/todo/:id" element={<UpdatedTodo />} />
        <Route path="edit/albums/:id" element={<UpdateAlbum />} />
        <Route path="update/photo/:id" element={<UpdatePhoto />} />
        <Route path="update/posts/:id" element={<UpdatePost />} />
        <Route path="update/comment/:id" element={<CommentUpdate />} />
      </Route>
    </Routes>
  );
}

export default App;


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

// {/* <Route exact path='/layout' element={<Layout />} >
//   <Route index element={< ButtonGroupCompo />} />
//   <Route path='group-orient' element={<GroupOrientation />} />
//   <Route path='button' element={<Buttons />}></Route>
//   <Route path='form-props' element={<FormPropsTextFields />} />
//   <Route path='post-container' element={<PostContainer />}></Route>
//   <Route path='img-list' element={<StandardImageList />} />
//   <Route path='standard-title-bar-img' element={< TitlebarBelowImageList />}></Route>
//   <Route path='custom-img-list' element={<CustomImageListCompo />} />
//   <Route path='basic-navbar' element={<ResponsiveAppBar />} />
//   <Route path='menu-navbar' element={<PrimarySearchAppBar />} />
//   <Route path='SimpleContainer' element={<SimpleContainer />} />
//   <Route path='api-content' element={<ApiContent />} />
//   <Route path='badge' element={<AccessibleBadges />} />
//   <Route path='albums' element={<Albums />} />
//   <Route path='user-photo' element={<Posts />} />
//   <Route path="user-photo/:userId" element={<Posts />} />
//   <Route path='comment' element={<Comments />} />
//   <Route path='param' element={<Params />} />
//   <Route path='route-manipulator' element={<RoutesManipulator />} />
//   <Route path='media-card' element={<MediaCard />} />
//   <Route path='list_control' element={< Checkboxes />} />
//   <Route path='dialog' element={<ResponsiveDialog />} />
// </Route> */}