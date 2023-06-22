import React, { useEffect, useState, useRef } from 'react'
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CommonBody from '../DialogBody';
import { updatedAlbums } from '../../Redux/Actions/AlbumActions';

export default function UpdateAlbum() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id, userId } = useParams();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  var albumData = useSelector(state => state.albums);
  const [getObjData, setGetObjData] = useState("");
  const editTitleRef = useRef('')

  useEffect(() => {
    if (albumData.albums) {
      const data = albumData.albums.find(obj => (obj.id) === Number(id))
      setGetObjData(data);
    }
  }, [id, albumData.albums]);

  const uploadHandler = () => {
    const data = {
      userId: userId,
      id: Number(id),
      title: editTitleRef.current.value,
    }
    setInputDisabled(true);
    dispatch(updatedAlbums(data));
  }

  if (albumData.msg) {
    navigate(-1)
  } else if (albumData.error) {
    navigate(-1)
  }

  const closeHandler = () => {
    setOpen(false)
    navigate(-1)
  }


  return (
    <>
    {albumData && getObjData ? 
      <CommonBody
      submitHandler={uploadHandler}
      cancelHandler={closeHandler}
      openHandler={open}
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Update album"
      button="Update"
      state={albumData}
      bodyContent={
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
          }
          />
    : ""}
    </>
  )
}