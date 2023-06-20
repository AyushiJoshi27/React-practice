import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { InputLabel, ListItemText, MenuList, TextField } from '@mui/material';
import { createPhoto } from '../../Redux/Actions/PhotosActions';
import { FormControl, MenuItem, Select } from '@mui/base';

export default function CreatePhoto() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState("none")
  const [scsMsg, setScsMsg] = useState('');
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(50);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const albumData = useSelector(state => state.albums.albums)
  albumData ? console.log(albumData) : console.log("albumData");
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const photUrlRef = useRef('')
  const photoTitleRef = useRef('')

  const selectAlbum = (e) => {
    setSelectedAlbum(e.target.value)
    console.log("data");
  }

  const uploadHandler = () => {
    const data = {
      albumId: selectedAlbum,
      title: photoTitleRef.current.value,
      url: photUrlRef.current.value,
      thumbnailUrl: photUrlRef.current.value,
    }
    console.log(data);
    setInputDisabled(true);
    // dispatch(createPhoto(data));
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Photo created successfully");
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
      submitHandler={uploadHandler}
      cancelHandler={closeHandler}
      openHandler={open}
      msg={scsMsg}
      display={display}
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Create a photo"
      button="create"
      selectedAlbum={selectedAlbum}
      bodyContent={
        <>
        {albumData ? 
        <FormControl>
          <InputLabel id="SelectAnAlbumLabel" >Select an album</InputLabel>
          <Select
          labelid="SelectAnAlbumLabel"
          id="SelectAnAlbum"
          value={selectedAlbum}
          // onChange={selectAlbum}
          label="album"
        >
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
            {/* {albumData && albumData.map((item) => (
              <MenuItem value={item.id} key={item.id}>
                {item.title}
              </MenuItem>
            ))} */}
          </Select>
          </FormControl>
           : ""}
          <TextField
            id="outlinedPhotoInput"
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
            id="outlinedPhotoInput"
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
      }
    />
  )
}
