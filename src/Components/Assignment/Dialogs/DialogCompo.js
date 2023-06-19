import React, { useEffect, useRef, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { Button } from '@mui/base';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodos } from '../Redux/Actions/TodosAction';
import { deleteAlbum, updatedAlbums } from '../Redux/Actions/AlbumActions';
import { deletePost, updatedPosts } from '../Redux/Actions/PostActions';
import { deletedComment, updatedComments } from '../Redux/Actions/CommentActions';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { updateUser } from '../Redux/Actions/UserActions.';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { deletePhoto, updatedPhotos } from '../Redux/Actions/PhotosActions';

export default function DialogCompo() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { userId } = useParams();
  var { category, type, objId } = useParams();
  const [display, setDisplay] = useState("none")
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const [openD, setOpenD] = useState(true);
  const [editInfo, setEditInfo] = React.useState(true);
  const [scsMsg, setScsMsg] = useState('');
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const userData = useSelector(state => state.users.users);
  const [todoStatus, setTodoStatus] = useState(false);
  const [getObjData, setGetObjData] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const mailRef = useRef('');
  const websiteRef = useRef('');
  const aptsRef = useRef('')
  const streetRef = useRef('');
  const cityRef = useRef('');
  const phoneRef = useRef();
  const companyRef = useRef('');
  const updateTitleRef = useRef('');
  const postTitleRef = useRef('');
  const postBlogRef = useRef('');
  const commentUpdate = useRef('');
  const editTitleRef = useRef('');
  const edtPhotoUrlRef = useRef('');
  const photUrlRef = useRef('');
  var todosData = useSelector(state => state.todos.todos);
  var postData = useSelector(state => state.posts.posts);
  var commentData = useSelector(state => state.comments.comments);
  var albumData = useSelector(state => state.albums.albums);
  var photoData = useSelector(state => state.photos.photos);

  useEffect(() => {
    if (type === "todos" && todosData) {
      const a = todosData.find(obj => Number(obj.id) === Number(objId))
      setGetObjData(a);
    }
  }, [objId, todosData, type]);

  useEffect(() => {
    if (type === "posts") {
      const data = postData.find(obj => (obj.id) === Number(objId))
      setGetObjData(data);
    }
  }, [objId, postData, type]);

  useEffect(() => {
    if (type === "comment") {
      const data = commentData.find(obj => (obj.id) === Number(objId))
      setGetObjData(data);
    }
  }, [commentData, objId, postData, type]);

  useEffect(() => {
    if (type === "albums") {
      const data = albumData.find(obj => (obj.id) === Number(objId))
      setGetObjData(data);
    }
  }, [objId, albumData, type]);

  useEffect(() => {
    if (type === "photo") {
      const data = photoData.find(obj => (obj.id) === Number(objId))
      setGetObjData(data);
    }
  }, [objId, photoData, type]);

  const handleCloseD = () => {
    setOpenD(false);
    navigate(-1);
  };

  const dataDispatcher = (data, dispatchFn, message) => {
    setInputDisabled(true);
    dispatch(dispatchFn(data));
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg(message);
    }, 3000);
    setTimeout(() => {
      setEditInfo(false);
      setScsMsg("");
      setInputDisabled(false);
      navigate(-1);
    }, 5000);
  }

  const DeleteHandler = () => {
    setInputDisabled(true);
    if (type === "todos" && objId) {
      dataDispatcher(objId, deleteTodo, "Successfully deleted");
    } else if (type === "album" && objId) {
      dataDispatcher(objId, deleteAlbum, "Album deleted successfully ");
    } else if (type === "post" && objId) {
      dataDispatcher(objId, deletePost, "Successfully deleted");
    } else if (type === "comment" && objId) {
      dataDispatcher(objId, deletedComment, "Successfully deleted");
    } else if (type === "photo" && objId) {
      dataDispatcher(objId, deletePhoto, "Successfully deleted"); 
    }
  };

  const editClose = () => {
    setEditInfo(false);
    navigate(-1);
  };

  //updated select value
  const CheckboxHandler = (event) => {
    setTodoStatus(event.target.value);
  }

  const infoUpdate = () => {

    if (userId && type === "userInfo") {
      var obj = {
        "address": {
          "city": cityRef.current.value,
          geo: {
            lat: userData.address.geo.lat,
            lng: userData.address.geo.lng,
          },
          "street": streetRef.current.value,
          "suite": aptsRef.current.value,
          zipcode: userData.address.zipcode
        },
        "email": mailRef.current.value,
        id: userId,
        name: userData.name,
        "phone": phoneRef.current.value,
        username: userData.username,
        "website": websiteRef.current.value,
        "company": {
          name: companyRef.current.value,
          catchPhrase: userData.company.catchPhrase,
          bs: userData.company.bs,
        },
      };
      dataDispatcher(obj, updateUser, "Successfully updated");
    }
    else if (type === "todos") {
      const obj = {
        userId: Number(userId),
        id: objId,
        title: updateTitleRef.current.value,
        completed: Boolean(todoStatus)
      }
      dataDispatcher(obj, updateTodos, "Todos updated successfully");
    } else if (type === "posts") {
      const obj = {
        userId: userId,
        title: postTitleRef.current.value,
        body: postBlogRef.current.value,
        id: Number(objId)
      }
      dataDispatcher(obj, updatedPosts, "Post updated successfully");
    } else if (type === "comment") {
      const obj = {
        postId: getObjData.postId,
        id: objId,
        name: getObjData.name,
        email: userData.email,
        body: commentUpdate.current.value,
      }
      dataDispatcher(obj, updatedComments, "Comment updated successfully");
    } else if (type === "albums") {
      const obj = {
        userId: userId,
        id: Number(objId),
        title: editTitleRef.current.value,
      }
      dataDispatcher(obj, updatedAlbums, "Album updated successfully");
    } 
  }

  return (
    <>
      {category === "delete" ?
        <Dialog
          fullScreen={fullScreen}
          open={openD}
          onClose={handleCloseD}
          aria-labelledby="responsive-delete-dialog"
        >
          <DialogTitle id="responsive-delete-dialog" variant='h6'>
            Delete {type}
            <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ padding: "10px 24px", width: 500 }}
          >
            <DialogContentText>
              Are you sure you want to delete the {type} from the list?
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleCloseD} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={DeleteHandler} variant="contained" disabled={inputDisabled}><b>Delete</b></Button>
          </DialogActions>
        </Dialog> : ""}
      {category === "edit" ?
        <Dialog
          fullScreen={fullScreen}
          open={editInfo}
          onClose={editClose}
          aria-labelledby="responsive-dialog-title"
          sx={{ height: 500 }}
        >
          <DialogTitle id="responsive-dialog-title" variant='h6'>
            {category} {type}
            <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ width: "500px" }}
          >
            {userData && type === "userInfo" ?
              <List sx={{ fontSize: "14px" }}>
                <ListItem>
                  <ListItemAvatar><Avatar><PhoneIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                      id="outlined-update-input"
                      defaultValue={userData.phone}
                      InputProps={{
                        readOnly: false,
                      }}
                      inputRef={phoneRef}
                      sx={{ width: 370 }}
                      label="Phone number"
                      disabled={inputDisabled}
                    />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><EmailIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                      id="outlined-update-input"
                      defaultValue={userData.email}
                      InputProps={{
                        readOnly: false,
                      }}
                      inputRef={mailRef}
                      sx={{ width: 370 }}
                      label="Email"
                      disabled={inputDisabled}
                    />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar><BusinessCenterIcon /></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                      id="outlined-update-input"
                      defaultValue={userData.company.name}
                      InputProps={{
                        readOnly: false,
                      }}
                      inputRef={companyRef}
                      sx={{ width: 370 }}
                      label="Working place"
                      disabled={inputDisabled}
                    />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><ApartmentIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                      id="outlined-update-input"
                      defaultValue={userData.address.suite}
                      InputProps={{
                        readOnly: false,
                      }}
                      multiline
                      inputRef={aptsRef}
                      sx={{ width: 370 }}
                      label="Apartment number"
                      disabled={inputDisabled}
                    />

                  } />
                </ListItem>
                <ListItem sx={{ color: "#000000" }}>
                  <ListItemAvatar><Avatar><AddRoadIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                      id="outlined-update-input"
                      defaultValue={userData.address.street}
                      InputProps={{
                        readOnly: false,
                      }}
                      inputRef={streetRef}
                      sx={{ width: 370 }}
                      label="Street address"
                      disabled={inputDisabled}
                    />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><LocationOnIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                      id="outlined-update-input"
                      defaultValue={userData.address.city}
                      InputProps={{
                        readOnly: false,
                      }}
                      inputRef={cityRef}
                      sx={{ width: 370 }}
                      label="City name"
                      disabled={inputDisabled}
                    />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><LinkIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                      id="outlined-update-input"
                      defaultValue={userData.website}
                      InputProps={{
                        readOnly: false,
                      }}
                      inputRef={websiteRef}
                      sx={{ width: 370 }}
                      label="Website"
                      disabled={inputDisabled}
                    />
                  } />
                </ListItem>
              </List> : ""}
            {/* update Todos */}
            {type === "todos" && getObjData ?
              <List dense>
                <ListItem
                  key="create"
                  secondaryAction={
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="toDoStatus">Status</InputLabel>
                      <Select
                        labelId="toDoStatus"
                        id="demo-simple-select"
                        defaultValue={getObjData.completed}
                        name="toDoStatus"
                        label="status"
                        onChange={CheckboxHandler}
                        sx={{ height: 50 }}
                        disabled={inputDisabled}
                      >
                        <MenuItem value={false}>Incompleted</MenuItem>
                        <Divider />
                        <MenuItem value={true}>Completed</MenuItem>
                      </Select>
                    </FormControl>
                  }
                  disablePadding
                >
                  <ListItemText primary={
                    <TextField
                      id="outlined-update-input"
                      defaultValue={getObjData.title}
                      InputProps={{
                        readOnly: false,
                      }}
                      label="Edit to-do"
                      inputRef={updateTitleRef}
                      sx={{ marginRight: 2, width: 330 }}
                      multiline
                      disabled={inputDisabled}
                    />
                  } />
                </ListItem>
              </List>
              : ""}
            {type === "posts" && getObjData ?
              <>
                <TextField
                  id="outlined-update-input"
                  label="Post title"
                  InputProps={{
                    readOnly: false,
                  }}
                  sx={{
                    width: 500
                  }}
                  defaultValue={getObjData.title}
                  inputRef={postTitleRef}
                  multiline
                  disabled={inputDisabled}
                />
                <TextField
                  id="outlined-update-input"
                  placeholder='Write something...'
                  InputProps={{
                    readOnly: false,
                  }}
                  label="Post description"
                  sx={{
                    marginTop: "20px",
                    width: 500
                  }}
                  defaultValue={getObjData.body}
                  inputRef={postBlogRef}
                  multiline
                  disabled={inputDisabled}
                />
              </>
              : ""}
            {type === "comment" && getObjData ?
              <TextField
                id="outlined-update-input"
                label="Edit comment"
                InputProps={{
                  readOnly: false,
                }}
                sx={{
                  width: 500
                }}
                defaultValue={getObjData.body}
                inputRef={commentUpdate}
                multiline
                disabled={inputDisabled}
              />
              : ""}
            {type === "albums" && getObjData ?
              <TextField
                id="outlined-update-input"
                placeholder='Write a title...'
                defaultValue={getObjData.title}
                InputProps={{
                  readOnly: false,
                }}
                sx={{ marginTop: 2, width: 500 }}
                inputRef={editTitleRef}
                label="Title of the album"
                multiline
                rows={2}
                disabled={inputDisabled}
              />
              : ""}
              {/* {type === "photo" && getObjData ?
              <>
              <TextField
              id="outlined-photo-input"
              InputProps={{
                readOnly: false,
              }}
              label="Photo's title"
              defaultValue={getObjData.title}
              inputRef={edtPhotoTitleRef}
              sx={{ marginTop: 2, marginBottom: 2, width: 475 }}
              multiline
              disabled={inputDisabled}
            />
            <TextField
              id="outlined-photo-input"
              InputProps={{
                readOnly: false,
              }}
              label="Photo's url"
              defaultValue={getObjData.thumbnailUrl}
              inputRef={edtPhotoUrlRef}
              sx={{ marginRight: 2, marginTop: 2, width: 475 }}
              multiline
              disabled={inputDisabled}
            />
            </>
              : ""} */}
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={editClose} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={infoUpdate} variant="contained" disabled={inputDisabled}><b>Update</b></Button>
          </DialogActions>
        </Dialog>
        : ""}
    </>
  )
}
