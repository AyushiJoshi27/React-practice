import React, { useEffect, useState, useRef } from 'react'
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CommonBody from '../DialogBody';
import { updatedPhotos } from '../../Redux/Actions/PhotosActions';

export default function UpdatePhoto() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id, userId } = useParams();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const [getObjData, setGetObjData] = useState("");
  const photoData = useSelector(state => state.photos)
  const edtPhotoTitleRef = useRef('');
  const edtPhotoUrlRef = useRef('');

  useEffect(() => {
    if (photoData.photos) {
      const data = photoData.photos.find(obj => (obj.id) === Number(id))
      setGetObjData(data);
    }
  }, [id, photoData.photos]);

  const uploadHandler = () => {
    const data = {
      albumId: userId,
      id: Number(id),
      title: edtPhotoTitleRef.current.value,
      url: edtPhotoUrlRef.current.value,
      thumbnailUrl: edtPhotoUrlRef.current.value,
    }
    setInputDisabled(true);
    dispatch(updatedPhotos(data));
  }

  if (photoData.msg) {
    navigate(-1)
  } else if (photoData.error) {
    navigate(-1);
  }

  const closeHandler = () => {
    setOpen(false)
    navigate(-1)
  }

  return (
    <>
    {photoData && getObjData ? 
    <CommonBody
      submitHandler={uploadHandler}
      cancelHandler={closeHandler}
      openHandler={open}
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Update photo"
      button="Update"
      state={photoData}
      bodyContent={
        <>
          {getObjData ?
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
          : ""}
        </>
      }
    />
    : ""}
    </>
  )
}
