import React from 'react';
import Paper from '@mui/material/Paper';
import { ImageList, Divider, TextField, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AlbumPhoto from '../Albums/Photo';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function PhotosSection() {
    const navigate = useNavigate();
    const photosList = useSelector((state) => state.photos.photos);

    // Edit Photos in photo section
  const PhotoEdtHandler = (obj) => {
    navigate(`update/photo/${obj.id}`);
  };

  //delete handlers 
  const PhotoDltHandler = (data) => {
    navigate(`delete/photo/${data.id}`);
  };

  // create photos
  const handleClickOpenPhotos = () => {
    navigate(`create/photo`);
  };

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
                        onClick={() => PhotoDltHandler(item)}
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
    </>
  )
}
