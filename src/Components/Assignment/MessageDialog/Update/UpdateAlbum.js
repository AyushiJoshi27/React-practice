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
import { updatedAlbums } from '../../Redux/Actions/AlbumActions';

export default function UpdateAlbum() {
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
  var albumData = useSelector(state => state.albums.albums);
  const [getObjData, setGetObjData] = useState("");
  const editTitleRef = useRef('')

  useEffect(() => {
    if (albumData) {
      const data = albumData.find(obj => (obj.id) === Number(id))
      setGetObjData(data);
    }
  }, [id, albumData]);

  const uploadHandler = () => {
    const data = {
      userId: userId,
      id: Number(id),
      title: editTitleRef.current.value,
    }
    setInputDisabled(true);
    dispatch(updatedAlbums(data));
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Album updated successfully");
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
      title="Update album"
      button="Update"
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
  )
}