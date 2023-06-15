import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
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
import LinearProgress from '@mui/material/LinearProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { createPhoto, deletedPhoto, updatedPhotos } from '../Redux/Actions/PhotosActions';
import { createAlbum, deletedAlbum, updatedAlbums } from '../Redux/Actions/AlbumActions';

export default function UserAlbum() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  // const [albums, setAlbums] = useState();
  const albumsList = useSelector((state) => state.albums.albums);
  const photosList = useSelector((state) => state.photos.photos);
  const albums2 = useSelector(state => state)
  // const [photosList, setphotosList] = useState('');
  const [combinedList, setCombinedList] = useState('');
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
  const [inputDisabled, setInputDisabled] = useState(false);
  //photos
  //create
  const [openPhoto, setOpenPhoto] = useState(false);
  //delete photo
  const [openDltPhoto, setOpenDltPhoto] = useState(false);
  const [edtItemUrl, setEdtItemUrl] = useState("");
  const [photoAlbumId, setPhotoAlbumId] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [photoDtlId, setPhotoDltId] = useState("");
  const photUrlRef = useRef("");
  const photoTitleRef = useRef("");
  // Edit photo
  const [openEdtPhoto, setOpenEdtPhoto] = useState(false);
  const [photoTitle, setPhotoTitle] = useState("");
  const [edtPhotoId, setEdtPhotoId] = useState("");
  const edtPhotoTitleRef = useRef("");
  const edtPhotoUrlRef = useRef("");


  useEffect(() => {
    if (photosList && albumsList && photosList.length > 0 && albumsList.length > 0) {
      let photosObj = {};
      for (let i = 0; i < photosList.length; i++) {
        let albumId = photosList[i].albumId;
        if (photosObj[albumId] && photosObj[albumId].length > 0) {
          photosObj[albumId].push(photosList[i]);
        } else {
          photosObj[albumId] = [];
          photosObj[albumId].push(photosList[i]);
        }
      }
      var albumsObj = [];
      for (let j = 0; j < albumsList.length; j++) {
        let temp = {};
        if (photosObj[albumsList[j].id]) {
          temp["photos"] = photosObj[albumsList[j].id];
        }
        temp["id"] = albumsList[j].id;
        temp["title"] = albumsList[j].title;
        temp["userId"] = albumsList[j].userId;
        albumsObj.push(temp);
      }
      setCombinedList(albumsObj);
    }
  }, [albumsList, photosList]);

  //modal controllers
  const handleClickOpen = () => { setOpen(true) };
  const handleClose = () => { setOpen(false) };

  const ImageUploader = () => {
    setInputDisabled(true);
    const data = {
      "userId": userId,
      "title": titleRef.current.value
    }
    if (data) {
      dispatch(createAlbum(data));
    } 
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully submitted");
    }, 3000);
    setTimeout(() => {
      setOpen(false);
      setScsMsg("");
      setInputDisabled(false);
    }, 5000);
  }

  //Dlt Album 
  const AlbumDltHandler = (albumId) => {
    setDltAlbumId(albumId);
    setOpenD(true);
  };

  const DeleteAlbum = () => {
    setInputDisabled(true);
    if (dltAlbumId) {
      dispatch(deletedAlbum(dltAlbumId))
    }
    setTimeout(() => { setDisplay("block") }, 3000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully deleted");
    }, 4000);
    setTimeout(() => {
      setOpenD(false);
      setScsMsg("");
      setInputDisabled(false);
    }, 5000);
  };

  const handleCloseD = () => { setOpenD(false) };

  //update handler
  const AlbumEdtHandler = (id, title) => {
    setTitle(title);
    setUpdateAlbum(id);
    setOpenU(true);
  }

  const updateAlbumHandler = () => {
    setInputDisabled(false);
    const data = {
      userId: userId,
      id: Number(updateAlbum),
      title: editTitleRef.current.value,
    }
    data ? dispatch(updatedAlbums(data)) : console.log("Update album");
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully updated");
    }, 4000);
    setTimeout(() => {
      setOpenU(false);
      setScsMsg("");
    }, 5000);
  }

  const handleCloseU = () => { setOpenU(false); }

  //Photo section
  //delete handlers 
  const PhotoDltHandler = (data) => {
    setPhotoDltId(data);
    setOpenDltPhoto(true);
  };

  const handleClosePhoto = () => { setOpenDltPhoto(false) };

  const handleDltPhoto = () => {
    if (photoDtlId) {
      dispatch(deletedPhoto(photoDtlId));
    };
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 1000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully deleted");
    }, 4000);
    setTimeout(() => {
      setScsMsg("");
      setOpenDltPhoto(false);
      setInputDisabled(false);
    }, 5000);
  }

  // create photos
  const handleClickOpenPhotos = () => {
    setOpenPhoto(true);
  };

  const selectAlbum = (e) => {
    setSelectedAlbum(e.target.value)
  }

  const closePhotoM = () => { setOpenPhoto(false) };

  const photoUploader = () => {
    const data = {
      albumId: Number(selectedAlbum),
      thumbnailUrl: photUrlRef.current.value,
      url: photUrlRef.current.value,
      title: photoTitleRef.current.value
    }
    data ? dispatch(createPhoto(data)) : console.log("Post photos");
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 1000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully created");
    }, 4000);
    setTimeout(() => {
      setScsMsg("");
      setOpenPhoto(false);
      setInputDisabled(false);
    }, 5000);
  }

  // Edit Photos in photo section
  const PhotoEdtHandler = (obj) => {
    setEdtItemUrl(obj.thumbnailUrl);
    setPhotoAlbumId(obj.albumId);
    setPhotoTitle(obj.title);
    setEdtPhotoId(obj.id);
    setOpenEdtPhoto(true);
  };

  const closePhotoE = () => setOpenEdtPhoto(false);

  const photoEditHanlder = () => {
    const data = {
      title: edtPhotoTitleRef.current.value,
      thumbnailUrl: edtPhotoUrlRef.current.value,
      albumId: photoAlbumId,
      id: edtPhotoId,
      url: edtPhotoUrlRef.current.value,
    }
    data ? dispatch(updatedPhotos(data)) : console.log("Update Photos");
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully submitted");
    }, 4000);
    setTimeout(() => {
      setOpenEdtPhoto(false);
      setScsMsg("");
      setInputDisabled(false);
    }, 5000);
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
                <ImageListItem key={"Album" + item.id} sx={{ width: 145 }}>
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
                    sx={{
                      fontSize: 12,
                      "&::first-letter": {
                        textTransform: "uppercase"
                      }
                    }}
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
        {photosList ?
          <ImageList sx={{ width: 465, height: 250 }} cols={3} >
            {photosList.map((item) => (
              <ImageListItem key={"Photo" + item.id} sx={{ width: 145 }}>
                <AlbumPhoto photos={item} />
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
                        onClick={() => PhotoEdtHandler(item)}
                      >
                        <EditIcon sx={{ fontSize: "15px", marginRight: "5px" }} />
                      </IconButton>
                      <IconButton
                        sx={{ color: 'white' }}
                        aria-label={`star ${item.title}`}
                        onClick={() => PhotoDltHandler(item.id)}
                      >
                        <DeleteIcon sx={{ fontSize: "15px" }} />
                      </IconButton>
                    </>
                  }
                  actionPosition="right"
                />
                <ImageListItemBar
                  title={item.title}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList> : ""}
      </Paper >
      {/*  Modals  */}
      < Dialog 
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-create-album"
      >
        <DialogTitle id="responsive-dialog-create-album" variant='h6'>
          <b>Create Album</b>
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ height: 100, width: 500 }}>
          <FormControl size="small">
            <TextField
              id="outlined-update-input"
              placeholder='Write something...'
              InputProps={{
                readOnly: false,
              }}
              sx={{
                height: 20,
                marginTop: "20px",
                width: 500
              }}
              inputRef={titleRef}
              label="Write a title of the album"
              multiline
              disabled={inputDisabled}
            />
          </FormControl>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
          <Button onClick={ImageUploader} variant="contained" disabled={inputDisabled}><b>Create</b></Button>
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
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", width: 500 }}
        >
          <DialogContentText>Are you sure you want to delete it?</DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCloseD} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
          <Button onClick={DeleteAlbum} variant="contained" disabled={inputDisabled}><b>Delete</b></Button>
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
          <b>Edit Album</b>
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", height: 100, width: 500 }}
        >
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
              disabled={inputDisabled}
            />
          </FormControl>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCloseU} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
          <Button onClick={updateAlbumHandler} variant="contained" disabled={inputDisabled}><b>Update</b></Button>
        </DialogActions>
      </Dialog> : ""}
      {/* Modals for Photos */}
      {/* create photos */}
      < Dialog 
        fullScreen={fullScreen}
        open={openPhoto}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h6'>
          <b>Add new photo</b>
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ height: 100, width: 500 }}>
          <FormControl sx={{ minWidth: 475 }} size="small">
            <InputLabel id="toDoStatus" >Select Album</InputLabel>
            <Select
              labelId="toDoStatus"
              id="demo-simple-select"
              value={selectedAlbum}
              label="Select Album"
              onChange={selectAlbum}
              sx={{ height: 50 }}
              disabled={inputDisabled}
            >
              {combinedList && combinedList.map((item) => (

                <MenuItem value={item.id} key={item.id} sx={{}}>{item.title}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="outlined-photo-input"
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
            id="outlined-photo-input"
            InputProps={{
              readOnly: false,
            }}
            label="Photo's url"
            inputRef={photUrlRef}
            sx={{ marginRight: 2, marginTop: 2, width: 475 }}
            multiline
            disabled={inputDisabled}
          />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={closePhotoM} variant="contained" color='error'><b>Cancel</b></Button>
          <Button onClick={photoUploader} variant="contained"><b>Save</b></Button>
        </DialogActions>
      </Dialog >
      {/* Delete photos */}
      <Dialog
        fullScreen={fullScreen}
        open={openDltPhoto}
        onClose={handleClosePhoto}
        aria-labelledby="responsive-delete-dialog-title"
      >
        <DialogTitle id="responsive-delete-dialog-title" variant='h6'>
          Delete photo
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", width: 500 }}
        >
          <DialogContentText>Are you sure you want to delete the photo?</DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClosePhoto} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
          <Button onClick={handleDltPhoto} variant="contained" disabled={inputDisabled}><b>Delete</b></Button>
        </DialogActions>
      </Dialog>
      {/* Update Photos */}
      <>
      {edtItemUrl && photoTitle ? 
        < Dialog
          fullScreen={fullScreen}
          open={openEdtPhoto}
          onClose={closePhotoE}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" variant='h6'>
            <b>Edit photo</b>
            <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
          </DialogTitle>
          <Divider />
          <DialogContent sx={{ height: 100, width: 500 }}>
            <TextField
              id="outlined-photo-input"
              InputProps={{
                readOnly: false,
              }}
              label="Photo's title"
              defaultValue={photoTitle}
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
              defaultValue={edtItemUrl}
              inputRef={edtPhotoUrlRef}
              sx={{ marginRight: 2, marginTop: 2, width: 475 }}
              multiline
              disabled={inputDisabled}
            />
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={closePhotoE} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={photoEditHanlder} variant="contained" disabled={inputDisabled}><b>Update</b></Button>
          </DialogActions>
        </Dialog > : ""} 
        </>
    </>
  );
};