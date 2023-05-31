import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ImageList, Divider, TextField, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import AlbumPhoto from '../Albums/Photo';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
import { FormControl } from '@mui/base';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function UserAlbum() {
  const [albums, setAlbums] = useState();
  const [photoList, setPhotoList] = useState('');
  const [combinedList, setCombinedList] = useState('');
  const [albumId, setAalbumId] = React.useState('');
  const { param } = useParams();
  const [scsMsg, setScsMsg] = useState('');
  // modal state
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const titleRef = useRef('');
  const [openD, setOpenD] = useState(false);
  const [dltAlbumId, setDltAlbumId] = useState('');
  const [updateAlbum, setUpdateAlbum] = useState('');
  const [title, setTitle] = useState('');
  const [openU, setOpenU] = useState(false);
  const editTitleRef = useRef('');

  // eslint-disable-next-line
  const fetchAlbums2 = useCallback(() => {
    return axios
      .get(`http://localhost:3000/albums?userId=${param}`)
      .then((response) => setAlbums(response.data));
  })

  // combinedList ? console.log(combinedList) : console.log("combinedList");

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
  const handleClickOpen = () => { setOpen(true) };
  const handleClose = () => { setOpen(false) };

  const ImageUploader = () => {
    // albumId ? console.log(albumId) : console.log("age");
    const data = {
      "userId": param,
      "title": titleRef.current.value
    }
    // console.log("data: ", data);
    data ? axios.post(`http://localhost:3000/albums?userId=${param}`, data) && fetchAlbums2() : console.log("Post album");

    setTimeout(() => { setScsMsg("Successfully submitted") }, 2000)
    setTimeout(() => { setOpen(false) && setScsMsg("") }, 3000);
  }

  //Dlt Album 
  const AlbumDltHandler = (albumId) => {
    setDltAlbumId(albumId);
    setOpenD(true);
  }

  const DeleteTodos = () => {
    dltAlbumId ? axios.delete(`http://localhost:3000/albums/${dltAlbumId}`) && fetchAlbums2() : console.log("Delete Album");
    setTimeout(() => { setScsMsg("Deleted submitted") }, 2000)
    setTimeout(() => { setOpenD(false) && setScsMsg("") }, 3000);
  }

  const handleCloseD = () => { setOpenD(false) };

  //update handler
  const AlbumEdtHandler = (id, title) => {
    // id ? console.log("Update: ", id) : console.log("id");
    console.log(id, title);
    setTitle(title);
    setUpdateAlbum(id);
    setOpenU(true);
  }

  const updateAlbumHandler = () => {
    if (updateAlbum && title) {
      const data = {
        userId: Number(updateAlbum),
        title: editTitleRef.current.value
      }
      console.log(data);

      // axios.put(`http://localhost:3000/albums?userId=${updateAlbum}`, data);
      // fetchAlbums2();
    }
    setTimeout(() => { setScsMsg("Updated submitted") }, 2000)
    setTimeout(() => { setOpenU(false) && setScsMsg("") }, 3000);
  }

  const handleCloseU = () => { setOpenU(false); }

  return (
    <>
      {/* with img list */}
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
          <ImageList sx={{ width: 465, height: 450 }} cols={3} rowHeight={164}>
            {combinedList.map((item) => {
              var image = item.photos;
              var obj = "";
              if (image) {
                obj = image[0]
              } else {
                obj = {
                  thumbnailUrl: "https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                }
              }
              return (
                <ImageListItem key={item.albumId} sx={{ width: 145 }}>
                  <AlbumPhoto album={obj} />
                  <ImageListItemBar
                    sx={{
                      background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      borderRadius: "10px 10px 0 0"
                    }}

                    position="top"
                    actionIcon={
                      <>
                        <IconButton
                          sx={{ color: 'white' }}
                          aria-label={`star ${item.title}`}
                          onClick={() => AlbumEdtHandler(item.id, item.title)}
                        >
                          <EditIcon sx={{ fontSize: "15px", marginRight: "5px" }} />
                        </IconButton>
                        <IconButton
                          sx={{ color: 'white' }}
                          aria-label={`star ${item.title}`}
                          onClick={() => AlbumDltHandler(item.id)}
                        >
                          <DeleteIcon sx={{ fontSize: "15px" }} />
                        </IconButton>
                      </>
                    }
                    actionPosition="right"
                  />
                  <ImageListItemBar
                    sx={{ fontSize: 14 }}
                    title={item.title}
                    position="below"
                  />
                </ImageListItem>
              )
            })}
          </ImageList> : ""}
      </Paper >
      {/* Photos section */}
      <Paper
        sx={{
          borderRadius: "5px",
          boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
          lineHeight: 2,
          marginBottom: "16px",
          padding: 2,
          width: "459px",
        }
        }
        elevation={2}
        className='albums'
      >
        <List>
          <ListItem
            secondaryAction={
              <AddCircleIcon aria-label="addTodo" onClick={handleClickOpen} />
            }
          >
            <ListItemText primary={<b>Photos</b>} />
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
      </Paper >
      {/* Modal */}
      < Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h5'>
          <b>Create a album</b>
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
      </Dialog >
      {/* Confirmation dialog */}
      <Dialog
        fullScreen={fullScreen}
        open={openD}
        onClose={handleCloseD}
        aria-labelledby="responsive-delete-dialog-title"
      >
        <DialogTitle id="responsive-delete-dialog-title" variant='h6'>
          <b>Delete album</b>
          <center style={{ color: "rgb(55,125,51)" }}>{scsMsg}</center>
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", width: 500 }}
        >
          <DialogContentText>
            <Typography>Are you sure you want to delete it?</Typography>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCloseD} variant="contained" color='error'><b>Cancel</b></Button>
          <Button onClick={DeleteTodos} variant="contained"><b>Save</b></Button>
        </DialogActions>
      </Dialog>
      {/* modal to update album */}
      {title ? <Dialog
        fullScreen={fullScreen}
        open={openU}
        onClose={handleCloseU}
        aria-labelledby="responsive-update-dialog-title"
      >
        <DialogTitle id="responsive-update-dialog-title" variant='h4'>
          <b>Update</b>
          <center style={{ color: "rgb(55,125,51)" }}>{scsMsg}</center>
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", height: 200, width: 500 }}
        >
          <DialogContentText>
            <FormControl size="small">
              <TextField
                id="outlined-update-input"
                placeholder='Write a title...'
                defaultValue={title}
                InputProps={{
                  readOnly: false,
                }}
                sx={{ marginTop: 2, height: 50, width: 500 }}
                inputRef={editTitleRef}
                label="Title of the album"
                multiline
                rows={2}
              />
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCloseU} variant="contained" color='error'><b>Cancel</b></Button>
          <Button onClick={updateAlbumHandler} variant="contained"><b>Save</b></Button>
        </DialogActions>
      </Dialog> : ""}
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