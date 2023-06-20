import React, { useEffect, albumef, useState, useRef } from 'react'
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CommonBody from '../DialogBody';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { updatedPhotos } from '../../Redux/Actions/PhotosActions';

export default function UpdatePhoto() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id, userId } = useParams();
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState("none")
  const [scsMsg, setScsMsg] = useState('');
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const [getObjData, setGetObjData] = useState("");
  const photoData = useSelector(state => state.photos.photos)
  const edtPhotoTitleRef = useRef('');
  const edtPhotoUrlRef = useRef('');

  useEffect(() => {
    if (photoData) {
      const data = photoData.find(obj => (obj.id) === Number(id))
      setGetObjData(data);
    }
  }, [id, photoData]);

  getObjData ? console.log(getObjData) : console.log("getObjData");

  const uploadHandler = () => {
    const data = {
      albumId: userId,
      id: Number(id),
      title: edtPhotoTitleRef.current.value,
      url: edtPhotoUrlRef.current.value,
      thumbnailUrl: edtPhotoUrlRef.current.value,
    }
    setInputDisabled(true);
    console.log(data);
    dispatch(updatedPhotos(data));
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Photo updated successfully");
    }, 3000);
    setTimeout(() => {
      setOpen(false);
      setScsMsg("");
      setInputDisabled(false);
      navigate(-1);
    }, 5000);
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
      msg={scsMsg}
      display={display}
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Update photo"
      button="Update"
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
  )
}
