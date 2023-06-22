import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { TextField } from '@mui/material';
import { createPost } from '../../Redux/Actions/PostActions';

export default function CreatePost() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { userId } = useParams();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(50);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const postState = useSelector(state => state.posts);
  const postBlogRef = useRef('')
  const postTitleRef = useRef('')

  const submitHandler = () => {
    const data = {
      userId: userId,
      title: postTitleRef.current.value,
      body: postBlogRef.current.value,
    }
    setInputDisabled(true);
    dispatch(createPost(data));
  }

  if (postState.msg) {
    navigate(-1) 
  } else if (postState.error) {
    navigate(-1) 
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
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Create a post"
      button="create"
      state={postState}
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
