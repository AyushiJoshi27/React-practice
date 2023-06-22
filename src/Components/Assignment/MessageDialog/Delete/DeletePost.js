import { DialogContentText } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { deletePost } from '../../Redux/Actions/PostActions';

export default function DeletePost() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(50);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const postState = useSelector(state => state.posts);

  const DeleteHandler = () => {
    setInputDisabled(true);
    dispatch(deletePost(id));
  }

  if (postState.msg || postState.error) {
    navigate(-1) 
  }

  const closeHandler = () => {
    setOpen(false);
    navigate(-1)
  }

  return (
    <CommonBody
      submitHandler={DeleteHandler}
      cancelHandler={closeHandler}
      openHandler={open}
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Delete a post"
      button="Delete"
      state={postState}
      bodyContent={
        <DialogContentText>
          Are you sure you want to delete the post from the list?
        </DialogContentText>
      }
    />
  )
}
