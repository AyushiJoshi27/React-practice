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
import LinearProgress from '@mui/material/LinearProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
  const [albumId, setAalbumId] = useState('');
  const { param } = useParams();
  const [scsMsg, setScsMsg] = useState('');
  // modal state
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [openD, setOpenD] = useState(false);
  const [dltAlbumId, setDltAlbumId] = useState('');
  const [updateAlbum, setUpdateAlbum] = useState('');
  const [title, setTitle] = useState('');
  const [openU, setOpenU] = useState(false);
  const titleRef = useRef('');
  const editTitleRef = useRef('');
  const [display, setDisplay] = useState("none")
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => { });
  const [openP, setOpenP] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const newTodoRef = useRef("");
  const [selectedValue, setSelectedValue] = useState('');

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

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 200);

    return () => {
      clearInterval(timer)
    };
  }, []);

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
  const handleClickOpenPhotos= () => {setOpenP(true)};
  const closePhotoM = () => {setOpenP(false)};

  const ImageUploader = () => {
    // albumId ? console.log(albumId) : console.log("age");
    const data = {
      "userId": param,
      "title": titleRef.current.value
    }
    // console.log("data: ", data);
    data ? axios.post(`http://localhost:3000/albums?userId=${param}`, data) && fetchAlbums2() : console.log("Post album");

    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully submitted");
    }, 3000);
    setTimeout(() => {
      setOpen(false);
      setScsMsg("");
    }, 5000);
  }

  //Dlt Album 
  const AlbumDltHandler = (albumId) => {
    setDltAlbumId(albumId);
    setOpenD(true);
  };

  const DeleteTodos = () => {
    dltAlbumId ? axios.delete(`http://localhost:3000/albums/${dltAlbumId}`) && fetchAlbums2() : console.log("Delete Album");
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully deleted");
    }, 3000);
    setTimeout(() => {
      setOpenD(false);
      setScsMsg("");
    }, 3000);
  };

  const handleCloseD = () => { setOpenD(false) };

  //update handler
  const AlbumEdtHandler = (id, title) => {
    console.log(id, title);
    setTitle(title);
    setUpdateAlbum(id);
    setOpenU(true);
  }

  const updateAlbumHandler = () => {
    if (updateAlbum && title) {
      const data = {
        userId: Number(updateAlbum),
        title: editTitleRef.current.value,
        photos: {
          thumbnailUrl: "https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        }
      }
      console.log(data);
      console.log(updateAlbum);

      axios.put(`http://localhost:3000/albums/${updateAlbum}`, data);
      fetchAlbums2();
    }
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully updated");
    }, 4000);
    setTimeout(() => { setOpenU(false) && setScsMsg("") }, 5000);
  }

  const handleCloseU = () => { setOpenU(false); }

  const selectAlbum = () => {
    console.log("new photo");
  }

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
          <ImageList sx={{ width: 465, height: 250 }} cols={3} rowHeight={164}>
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
              <AddCircleIcon aria-label="addTodo" onClick={handleClickOpenPhotos} />
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
      {/*                                           Modals                                            */}
      < Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h6'>
          <b>Add Album</b>
          <Typography>
            <center style={{ color: "rgb(55,125,51)", marginTop: "10px" }}>{scsMsg}</center>
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ height: 100, width: 500 }}>
          <DialogContentText sx={{ marginTop: "20px", maxWidth: "400px" }}>
            <FormControl size="small">
              <TextField
                id="outlined-update-input"
                placeholder='Write something...'
                InputProps={{
                  readOnly: false,
                }}
                sx={{ height: 20, width: 500 }}
                inputRef={titleRef}
                label="Write a title of the album"
                multiline
              />
            </FormControl>
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
          <b>Remove Album</b>
          <Typography>
            <center style={{ color: "rgb(55,125,51)", marginTop: "10px" }}>{scsMsg}</center>
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
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
        <DialogTitle id="responsive-update-dialog-title" variant='h6'>
          <b>Edi Albumt</b>
          <Typography>
            <center style={{ color: "rgb(55,125,51)", marginTop: "10px" }}>{scsMsg}</center>
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", height: 100, width: 500 }}
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
      {/* create photos */}
      < Dialog
        fullScreen={fullScreen}
        open={openP}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h6'>
          <b>Add new photo</b>
          <Typography>
            <center style={{ color: "rgb(55,125,51)", marginTop: "10px" }}>{scsMsg}</center>
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ height: 100, width: 500 }}>  
        <List dense>
            <ListItem
              key="create"
              secondaryAction={
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  {/* <InputLabel id="toDoStatus" disabled={inputDisabled}>Photo url</InputLabel> */}
                  <InputLabel id="toDoStatus" >Photo url</InputLabel>
                  <Select
                    labelId="toDoStatus"
                    id="demo-simple-select"
                    value={selectedValue}
                    label="Status"
                    onChange={selectAlbum}
                    sx={{ height: 50 }}
                    // disabled={inputDisabled}
                  >
                  </Select>
                </FormControl>
              }
              disablePadding
            >
              <ListItemText primary={
                <TextField
                  id="outlined-photp-input"
                  defaultValue="url of the photo"
                  InputProps={{
                    readOnly: false,
                  }}
                  inputRef={newTodoRef}
                  sx={{ marginRight: 2, width: 345 }}
                  multiline
                  disabled={inputDisabled}
                />
              } />
            </ListItem>
          </List>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={closePhotoM} variant="contained" color='error'><b>Cancel</b></Button>
          <Button onClick={ImageUploader} variant="contained"><b>Save</b></Button>
        </DialogActions>
      </Dialog >
    </>
  );
};