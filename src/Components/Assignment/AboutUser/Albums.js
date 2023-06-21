import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Paper from '@mui/material/Paper';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import AlbumPhoto from '../Albums/Photo';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../Redux/Actions/PhotosActions';

export default function UserAlbum() {
  const dispatch = useDispatch();
  const albumsList = useSelector((state) => state.albums.albums);
  const photosList = useSelector((state) => state.photos.photos);
  const [combinedList, setCombinedList] = useState('');
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
  const handleCreator = () => {
    navigate('create/album');
  };


  //Dlt Album 
  const AlbumDltHandler = (id) => {
    navigate(`delete/album/${id}`)
  };

  //update handler
  const AlbumEdtHandler = (id) => {
    navigate(`edit/albums/${id}`);
  }

  return (
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
            <AddCircleIcon edge="end" aria-label="addTodo" onClick={handleCreator} />
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
                        onClick={() => AlbumEdtHandler(item.id)}
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
  );
};