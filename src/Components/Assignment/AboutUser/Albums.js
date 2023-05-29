import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography, ImageList, InputLabel, Divider, TextField } from '@mui/material';
import AlbumPhoto from '../Albums/Photo';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
//import ListItemIcon from '@mui/material/ListItemIcon';
//dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/base';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UserAlbum() {
  const [albums, setAlbums] = useState();
  const [photoList, setPhotoList] = useState('');
  const [combinedList, setCombinedList] = useState('');
  const [albumId, setAalbumId] = React.useState('');
  const { param } = useParams();
  // modal state
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const titleRef = useRef('');

  // eslint-disable-next-line
  const fetchAlbums2 = useCallback(() => {
    return axios
      .get(`http://localhost:3000/albums?userId=${param}`)
      .then((response) => setAlbums(response.data));
  })

  combinedList ? console.log(combinedList) : console.log("combinedList");

  var str = "";
  if (albums) {
    (
      albums && albums.map((data) => {
        var str1 = "albumId=" + data.id + "&";
        str += str1;
      })
    )
    var sortStr = "_sort=albumId";
    str += sortStr;
  }

  // str ? console.log("200:", str) : console.log("404: ", str);

  useEffect(() => {
    if (str) {
      fetchPhotos();
    }
  }, [str]);

  // eslint-disable-next-line
  const fetchPhotos = useCallback(() => {
    return axios
      .get(`http://localhost:3000/photos?${str}`)
      .then((response) => setPhotoList(response.data));
  })

  useEffect(() => {
    if (photoList && albums) {
      var y = albums;
      let photosObj = {}

      for (let i = 0; i < photoList.length; i++) {
        let albumId = photoList[i].albumId;

        if (photosObj[albumId] && photosObj[albumId].length > 0) {
          photosObj[albumId].push(photoList[i]);
        } else {
          photosObj[albumId] = []
          photosObj[albumId].push(photoList[i]);
        }
      }

      for (let j = 0; j < albums.length; j++) {
        y[j]['photos'] = photosObj[albums[j].id];
        setCombinedList(y);
      }
    }

  }, [albums, photoList])

  useEffect(() => {
    fetchAlbums2();
  }, [])

  // combinedList ? console.log(combinedList) : console.log("combinedList");

  //modal controllers
  const handleClickOpen = () => {
    // console.log('modal open');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ImageUploader = () => {
    albumId ? console.log(albumId) : console.log("age");
    const data = {
      "userId": param,
      "title": titleRef.current.value
    }
    console.log("data: ", data);
    axios.post(`http://localhost:3000/albums?userId=${param}`, data);
    setOpen(false);
  }

  //event on change
  // const handleChange = (event) => {
  //   setAalbumId(event.target.value);
  //   console.log(typeof (event.target.value));
  // };

  return (
    <>
      <Paper
        sx={{
          borderRadius: "5px",
          boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
          lineHeight: 2,
          marginBottom: "16px",
          padding: 2,
          width: "459px",
        }}
        elevation={2}
        className='albums'
      >
        <List>
          <ListItem
            secondaryAction={
              <AddCircleIcon edge="end" aria-label="addTodo" onClick={handleClickOpen} />
            }
          >
            <ListItemText
              primary={<b>Albums</b>}
            />
          </ListItem>
        </List>
        {combinedList ?
          <Grid container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            sx={{
              lineHeight: 2,
              marginBottom: "16px",
              paddingTop: 1,
            }}
          >
            {combinedList && combinedList.map((items) => {
              var image = items.photos;
              var obj = "";
              if (image) {
                obj = image[0]
              } 
              // obj ? console.log(obj) : console.log("obj");
              return (
                <Grid item
                  xs={4}
                  key={items.id}
                  width={127}
                  sx={{ marginRight: 0, paddingLeft: 0, paddingRight: 0 }}
                >
                  <Item style={{
                    boxShadow: "none",
                    fontSize: "12px",
                    fontWeight: 800,
                    padding: 0
                  }}>
                    {/* { obj ? <AlbumPhoto album={obj} /> : ""} */}
                    <AlbumPhoto album={obj} />
                    <p className='albumTitle'>{items.title}</p>
                  </Item>
                </Grid>
              )
            })}
          </Grid>
          : ''
        }
      </Paper>
      {/* Photos section */}
      <Paper
        sx={{
          borderRadius: "5px",
          boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
          lineHeight: 2,
          marginBottom: "16px",
          padding: 2,
          width: "459px",
        }}
        elevation={2}
        className='albums'
      >
        <List>
          <ListItem
            secondaryAction={
              <AddCircleIcon aria-label="addTodo" onClick={handleClickOpen} />
            }
          >
            <ListItemText
              primary={<b>Photos</b>}
            />
          </ListItem>
        </List>
        <ImageList
          sx={{
            backgroundColor: "rgb(255 255 255)",
            borderRadius: "5px",
            marginBottom: 0,
            height: 305,
            width: "468px"
          }}
          cols={3}
          rowHeight={164}
        >
          {photoList ?
            <AlbumPhoto photos={photoList} />
            : ''}
        </ImageList>
      </Paper>
      {/* Modal */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h5'>
          {<b>Album</b>}
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ height: 500, width: 600 }}>
          <DialogContentText sx={{ marginTop: "20px", maxWidth: "400px" }}>
            <List>
              <ListItem
                secondaryAction={
                  <FormControl size="small">
                    <TextField
                      id="outlined-update-input"
                      placeholder='Title of the album...'
                      InputProps={{
                        readOnly: false,
                      }}
                      sx={{height: 20}}
                      inputRef={titleRef}
                      label="title"
                      multiline
                    />
                  </FormControl>
                }
              >
                <ListItemText
                  primary={<label>Album title: </label>}
                />
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button autoFocus onClick={handleClose}>Cancel</Button>
          <Button autoFocus onClick={ImageUploader}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}


{/* <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={albumId}
                      label="Age"
                     onChange={handleChange}
                    sx={{height: 40, minWidth: 120}}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {combinedList && combinedList.map((item) => (
                      <MenuItem value={item.id}>{item.id}</MenuItem>
                    ))}
                    </Select> */}