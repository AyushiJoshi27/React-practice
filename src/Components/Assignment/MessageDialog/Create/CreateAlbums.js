import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { TextField } from '@mui/material';
import { createAlbum } from '../../Redux/Actions/AlbumActions';

export default function CreateAlbums() {
    const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { userId } = useParams();
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState("none")
  const [scsMsg, setScsMsg] = useState('');
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const albumTitleRef = useRef('');
  const albumData = useSelector(state => state.albums)

  const uploadHandler = () => {
    const data = {
      "userId": userId,
      "title": albumTitleRef.current.value
    }
    setInputDisabled(true);
    dispatch(createAlbum(data));
  }

  if (albumData.msg) {
    navigate(-1);
  } else if (albumData.error) {
    navigate(-1);
  }

  const closeHandler = () => {
    setOpen(false)
    navigate(-1)
  }
  
  return (
    <CommonBody
        submitHandler={uploadHandler}
        cancelHandler={closeHandler}
        openHandler={open}
        progress={progress}
        buffer={buffer}
        fullscreen={fullScreen}
        inputDisabled={inputDisabled}
        title="Create an album"
        button="Create"
        state={albumData}
        bodyContent={
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
        }
        />
  )
}
