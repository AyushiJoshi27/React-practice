import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
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
import { createPhoto, deletePhoto, fetchPhoto, updatedPhotos } from '../Redux/Actions/PhotosActions';
import { createAlbum, deleteAlbum, updatedAlbums } from '../Redux/Actions/AlbumActions';
import { fetchComments } from '../Redux/Actions/CommentActions';

export default function UserAlbum() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const albumsList = useSelector((state) => state.albums.albums);
  const photosList = useSelector((state) => state.photos.photos);
  const [combinedList, setCombinedList] = useState('');
  const [scsMsg, setScsMsg] = useState('');
  // modal state
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [openD, setOpenD] = useState(false);
  const [dltAlbumId, setDltAlbumId] = useState('');
  const titleRef = useRef('');
  const [display, setDisplay] = useState("none")
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
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
  const navigate = useNavigate();

  var str = "";
  if (albumsList) {
    (
      // eslint-disable-next-line array-callback-return
      albumsList && albumsList.map((data) => {
        let str1 = "albumId=" + data.id + "&";
        str += str1;
      })
    )
    var sortStr = "_sort=albumId";
    str = str + sortStr;
  }

  useEffect(() => {
    if (str !== "_sort=albumId") {
      dispatch(fetchPhoto(str));
    }
  }, [str, dispatch, albumsList])

  

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
  const handleClickOpen = () => { 
    navigate('create/album');
  };
  const handleClose = () => { setOpen(false) };

  //Dlt Album 
  const AlbumDltHandler = (id) => {
    navigate(`delete/album/${id}`)
  };

  //update handler
  const AlbumEdtHandler = (id, title) => {
    navigate(`edit/albums/${id}`);
  }

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
      {/* < Dialog 
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
      </Dialog > */}
      {/* Update Photos  */}
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