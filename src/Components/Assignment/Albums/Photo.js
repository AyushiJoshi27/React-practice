import { Dialog, Divider, TextField } from '@mui/material';
import axios from 'axios';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FormControl } from '@mui/base';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router';

export default function AlbumPhoto({ album, photos }) {
  // album ? console.log(album) : console.log("alpha");
  // photos ? console.log(photos) : console.log("Photos");
  const {param} = useParams();

  // const [open, setOpen] = React.useState(false);
  // const titleRef = useRef('');
  const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // const [scsMsg, setScsMsg] = useState('');

  // const ImageUploader = () => {
  //   // albumId ? console.log(albumId) : console.log("age");
  //   const data = {
  //     "userId": param,
  //     "title": titleRef.current.value
  //   }
  //   // console.log("data: ", data);
  //   // data ? axios.put(`http://localhost:3000/albums?userId=${param}`, data) && fetchAlbums2() : console.log("Post album");

  //   setTimeout(() => { setScsMsg("Successfully submitted") }, 2000)
  //   setTimeout(() => { setOpen(false) && setScsMsg("") }, 3000);
  // }
  // //Model delete controler
  // const handleClose = () => { setOpen(false) };

  return (
    <>
      <>
        {album ?
          <LazyLoadImage
            key={album + 5}
            alt={album.url}
            src={album.thumbnailUrl}
            style={{
              borderRadius: "10px",
              height: "117px",
              marginBottom: "5px",
              width: "145px"
            }}
          /> : ''}
      </>
      <>
        {photos ?
          photos && photos.map((image, index) => (
            <LazyLoadImage
              key={index + 5}
              alt={image.thumbnailUrl}
              src={image.thumbnailUrl}
              style={{
                borderRadius: "10px",
                height: "148px",
                marginBottom: "5px",
                width: "145px"
              }}
            />
          ))
          : ''}
      </>
      {/* Modals */}
      {/* Create a todo */}
      {/* < Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h6'>
          <b>Create</b>
          <center style={{ color: "rgb(55,125,51)" }}>{scsMsg}</center>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ height: 350, width: 300 }}>
          <DialogContentText sx={{ marginTop: "20px", maxWidth: "400px" }}>
            <List>
              <ListItem
                secondaryAction={
                  <FormControl size="small">
                    <TextField
                      id="outlined-update-input"
                      placeholder='Write something...'
                      InputProps={{
                        readOnly: false,
                      }}
                      sx={{ height: 20, width: 300 }}
                      inputRef={titleRef}
                      label="Write a title of the album"
                      multiline
                    />
                  </FormControl>
                }
              >
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color='error'><b>Cancel</b></Button>
          <Button onClick={ImageUploader} variant="contained"><b>Save</b></Button>
        </DialogActions>
      </Dialog > */}
    </>
  )
}