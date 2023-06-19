import { useTheme } from '@emotion/react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography, useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LinearProgress from '@mui/material/LinearProgress';
import { Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import { createTodo } from '../Redux/Actions/TodosAction';
import { createPost } from '../Redux/Actions/PostActions';
import { createAlbum } from '../Redux/Actions/AlbumActions';
import { updatedPhotos } from '../Redux/Actions/PhotosActions';

export default function CreateDialogCompo() {
  const { userId, categoryType } = useParams()
  console.log(categoryType);
  const navigate = useNavigate()
  const [open, setOpen] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(false);
  // const al
  const [display, setDisplay] = useState("none")
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [scsMsg, setScsMsg] = useState('');
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState('');
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const newTodoRef = useRef('');
  const dispatch = useDispatch();
  const postTitleRef = useRef("");
  const postBlogRef = useRef("");
  const albumTitleRef = useRef('');
  const edtPhotoTitleRef = useRef('');
  const photoTitleRef = useRef('');

  const dataDispatcher = (data, dispatchFn, message) => {
    setInputDisabled(true);
    dispatch(dispatchFn(data));
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg(message);
    }, 3000);
    setTimeout(() => {
      setOpen(false);
      setScsMsg("");
      setInputDisabled(false);
      navigate(-1);
    }, 5000);
  }

  const closeHandler = () => {
    setOpen(false);
    navigate(-1);
  }

  // const selectAlbum = (e) => {
  //   setSelectedAlbum(e.target.value)
  // }


  const handleSelector = (event) => {
    setSelectedValue(event.target.value);
  }

  const uploadHandler = () => {
    if (categoryType === "todo") {
      const data = {
        userId: Number(userId),
        title: newTodoRef.current.value,
        completed: Boolean(selectedValue)
      }
      dataDispatcher(data, createTodo, "Todo created successfully")
    } else if (categoryType === "post") {
      const data = {
        userId: userId,
        title: postTitleRef.current.value,
        body: postBlogRef.current.value,
      }
      console.log(data);
      dataDispatcher(data, createPost, "Post created successfully")
    } else if (categoryType === "album") {
      const data = {
        "userId": userId,
        "title": albumTitleRef.current.value
      }
      console.log(data);
      dataDispatcher(data, createAlbum, "Post created successfully")
    } 
    // else if (categoryType === "photo") {
    //   const obj = {
    //     title: edtPhotoTitleRef.current.value,
    //     thumbnailUrl: edtPhotoUrlRef.current.value,
    //     albumId: getObjData.albumId,
    //     id: getObjData.id,
    //     url: edtPhotoUrlRef.current.value,
    //   }
    //   dataDispatcher(obj, updatedPhotos, "Album updated successfully");
    // }
  }

  return (
    <>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={closeHandler}
        aria-labelledby="responsive-delete-dialog"
      >
        <DialogTitle id="responsive-delete-dialog" variant='h6'>
          Create {categoryType}
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", width: 500 }}
        >
          {categoryType === "album" ?
            <TextField
              id="outlined-update-input"
              placeholder='Write something...'
              InputProps={{
                readOnly: false,
              }}
              sx={{
                marginTop: "20px",
                width: 500
              }}
              inputRef={albumTitleRef}
              label="Write a title of the album"
              multiline
              disabled={inputDisabled}
            />
            : ""}
          {categoryType === "todo" ?
            <List dense>
              <ListItem
                key="create"
                secondaryAction={
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="toDoStatus" disabled={inputDisabled}>Status</InputLabel>
                    <Select
                      labelId="toDoStatus"
                      id="todo-select"
                      value={selectedValue}
                      label="Todo"
                      onChange={handleSelector}
                      sx={{ height: 50 }}
                      disabled={inputDisabled}
                    >
                      <MenuItem value={false}>In progress</MenuItem>
                      <MenuItem value={true}>Completed</MenuItem>
                    </Select>
                  </FormControl>
                }
                disablePadding
              >
                <ListItemText primary={
                  <TextField
                    id="outlined-post-input"
                    label="create todo"
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={newTodoRef}
                    sx={{ marginRight: 2, width: 345 }}
                    multiline
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
            </List>
            : ""}
          {categoryType === "post" ?
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
                inputRef={postBlogRef}
                multiline
                disabled={inputDisabled}
              />
            </>
            : ""}
            {/* {type === "photo" ? 
            <>
              <FormControl sx={{ minWidth: 475 }} size="small">
            <InputLabel id="toDoStatus" >Select Album</InputLabel>
            <Select
              labelId="toDoStatus"
              id="demo-simple-select"
              value={selectedAlbum}
              label="Select Album"
              onChange={selectAlbum}
              sx={{ height: 50 }}
              disabled={inputDisabled}
            >
              {albumData && albumData.map((item) => (

                <MenuItem value={item.id} key={item.id} sx={{}}>{item.title}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="outlined-photo-input"
            InputProps={{
              readOnly: false,
            }}
            label="Photo's title"
            inputRef={photoTitleRef}
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
            inputRef={photUrlRef}
            sx={{ marginRight: 2, marginTop: 2, width: 475 }}
            multiline
            disabled={inputDisabled}
          />
          </>
            : "" } */}
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={closeHandler} variant="contained" color='error'><b>Cancel</b></Button>
          <Button onClick={uploadHandler} variant="contained"><b>Save</b></Button>
        </DialogActions>
      </Dialog >
    </>
  )
}
