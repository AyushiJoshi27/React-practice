import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { InputLabel, ListItemText, MenuList, TextField } from '@mui/material';
import { createPost } from '../../Redux/Actions/PostActions';

export default function CreatePost() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { userId } = useParams();
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState("none")
  const [scsMsg, setScsMsg] = useState('');
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(50);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const postBlogRef = useRef('')
  const postTitleRef = useRef('')

  const DeleteHandler = () => {

  }

  const submitHandler = () => {
    const data = {
      userId: userId,
      title: postTitleRef.current.value,
      body: postBlogRef.current.value,
    }
    setInputDisabled(true);
    dispatch(createPost(data));
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Post created successfully");
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
    navigate(-1)
  }

  return (
    <CommonBody
      submitHandler={submitHandler}
      cancelHandler={closeHandler}
      openHandler={open}
      msg={scsMsg}
      display={display}
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Create a post"
      button="create"
      bodyContent={
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
      }
    />
  )
}
