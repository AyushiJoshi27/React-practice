import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { InputLabel, ListItemText, MenuList, TextField } from '@mui/material';
import { createPhoto } from '../../Redux/Actions/PhotosActions';
import { FormControl } from '@mui/base';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function CreatePhoto() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(50);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const albumData = useSelector(state => state.albums.albums)
  const photoData = useSelector(state => state.photos);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const photUrlRef = useRef('')
  const photoTitleRef = useRef('')

  const selectAlbum = (e) => {
    setSelectedAlbum(e.target.value);
  }

  const uploadHandler = () => {
    const data = {
      albumId: selectedAlbum,
      title: photoTitleRef.current.value,
      url: photUrlRef.current.value,
      thumbnailUrl: photUrlRef.current.value,
    }
    setInputDisabled(true);
    dispatch(createPhoto(data));
  }

  if (photoData.msg) {
    navigate(-1)
  } else if (photoData.error) {
    // navigate(-1);
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
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Create a photo"
      button="create"
      state={photoData}
      bodyContent={
        <>
          {albumData ?
            <FormControl>
              <InputLabel id="SelectAnAlbumLabel" >Select an album</InputLabel>
              <Select
                labelid="SelectAnAlbumLabel"
                id="Select-an-album"
                value={selectedAlbum}
                onChange={selectAlbum}
                label="album"
                disabled={inputDisabled}
                sx={{width: 475}}
              >
                {albumData && albumData.map((item) => (
                  <MenuItem value={item.id} key={item.id} sx={{width: 475}}>
                    {item.title}
                  </MenuItem>
                ))}
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
