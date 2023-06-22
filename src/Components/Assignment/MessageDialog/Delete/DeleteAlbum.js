import { DialogContentText } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { deleteAlbum } from '../../Redux/Actions/AlbumActions';

export default function DeleteAlbum() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(50);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const albumData = useSelector(state => state.albums);

  const DeleteHandler = () => {
    setInputDisabled(true);
    dispatch(deleteAlbum(id));
  }

  const closeHandler = () => {
    setOpen(false);
    navigate(-1)
  }

  if (albumData.msg) {
    navigate(-1) 
  } else if (albumData.error) {
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
      title="Delete an album"
      button="Delete"
      state={albumData}
      bodyContent={
        <DialogContentText>
          Are you sure you want to delete the album from the list?
        </DialogContentText>
      }
    />
  )
}
