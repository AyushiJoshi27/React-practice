import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography, ImageList } from '@mui/material';
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
  const { param } = useParams();
  // modal state
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const imgUrl = useRef('');

  // eslint-disable-next-line
  const fetchAlbums2 = useCallback(() => {
    return axios
      .get(`http://localhost:3000/albums?userId=${param}`)
      .then((response) => setAlbums(response.data));
  })

  var str = "";
  if (albums) {
    (
      albums && albums.map((data) => {
        const str1 = "albumId=" + data.id + "&";
        str += str1;
      })
    )
    var sortStr = "_sort=albumId"
    str += sortStr
  }

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

  combinedList ? console.log(combinedList) : console.log("combinedList");

  useEffect(() => {
    fetchAlbums2();
    fetchPhotos();
  }, []);

  //modal controllers
  const handleClickOpen = () => {
    // console.log('modal open');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ImageUploader = () => {
    console.log(imgUrl.current.value);
  }

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
        <Typography variant='h6'><b>Albums</b></Typography>
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
              var obj = ''
              if (image) {
                obj = image[0]
              }
              obj ? console.log(obj) : console.log("obj");
              return (
                <Grid item
                  xs={4}
                  key={items.title}
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
              <IconButton edge="end" aria-label="addTodo" onClick={handleClickOpen}>
                <AddCircleIcon />
              </IconButton>
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
        <DialogTitle id="responsive-dialog-title" variant='h4'>
          {"Add a todo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginTop: "20px", maxWidth: "400px" }}>
            <List>
              <ListItem
                secondaryAction={
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={''}
                    label="Age"
                  // onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {combinedList && combinedList.map((item) => (
                      <MenuItem value={item.id}>{item.id}</MenuItem>
                    ))}
                  </Select>
                }
              >
                <ListItemText
                  primary={<label>Selected album: </label>}
                />
              </ListItem>
            </List>
            <label>Image url: </label>
            <input type='text' ref={imgUrl} style={{ marginBottom: "20px" }} /><br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>Calcel</Button>
          <Button autoFocus onClick={ImageUploader}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
