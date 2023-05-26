import React, { useState, useEffect, useCallback, useRef } from 'react';
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import axios from 'axios';
//import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Comments from './Comments';
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';

//import { FetchPostsIds } from './ApisExport';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  marginTop: '10px',
}));

const ariaLabel = { 'aria-label': 'description' };

export default function Posts() {
  const [expanded, setExpanded] = React.useState(false);
  const [posts, setPosts] = useState("");
  const [user, setUser] = useState("");
  const [initials, setInitials] = useState("");
  const [albumId, setAlbumId] = useState({ url: "" });
  const [photo, setPhoto] = useState("");
  const { param } = useParams();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date();
  const dateFormate = currentDate.toLocaleDateString("en-US", options);

  const commentRef = useRef();
  const nameRef = useRef("");

  // eslint-disable-next-line
  useEffect(() => {
    fetchUser();
    fetchPosts();
    fetchAlbums();
    fetchPhoto();
  }, []);

  useEffect(() => {
    // console.log(commentRef.current);
    // console.log(nameRef.current);
  }, [nameRef.current.value]);

  // eslint-disable-next-line
  const fetchUser = useCallback(() => {
    return axios
      .get(`http://localhost:3000/users?id=${param}`)
      .then((response) => {
        setUser(response.data[0].name);
        setInitials(response.data[0].name.match(/(\b\S)?/g).join("").toUpperCase())
      });
  });

  //eslint-disable-next-line
  const fetchAlbums = useCallback(() => {
    return axios
      .get(`http://localhost:3000/albums?userId=${param}`)
      .then((response) => setAlbumId(response.data));
  })

  // eslint-disable-next-line
  const fetchPosts = useCallback(() => {
    return axios
      .get(`http://localhost:3000/posts?userId=${param}`)
      .then((response) => setPosts(response.data));
  });

  // eslint-disable-next-line
  const fetchPhoto = useCallback(() => {
    return axios
      .get(`http://localhost:3000/photos?albumId=${param}`)
      .then((response) => setPhoto(response.data[0]));
  })

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //add a comment
  const myFunction = () => {
    console.log(commentRef);
    // axios
    //   .post(`http://localhost:3000/comments?userId=${param}`, data);
  }

  //add a post style and functionality
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    max-width: 596px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );


  return (
    <div style={{ float: "right" }}>
      <Paper
        sx={{
          borderRadius: "5px",
          boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
          fontSize: "14px",
          lineHeight: 2,
          marginBottom: "16px",
          padding: 2,
          marginTop: "16px"
        }}
        elevation={2}
      >
        <List
          sx={{ 
            width: '100%', 
            bgcolor: 'background.paper', 
            "&:hover": { backgroundColor: "white" },
            padding: 0
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <Typography variant='h6'><b>Add a post</b></Typography>
          }
        >
          <ListItemButton sx={{
                "&:hover": { backgroundColor: "white" },
                padding: "5px 0"
              }}>
            <ListItemIcon>
              <Avatar sx={{ bgcolor: 'rgb(244 67 54)' }} aria-label="user">
                {initials}
              </Avatar>
            </ListItemIcon>
            <ListItemText 
              primary={
              <StyledTextarea
                sx={{
                  "&:hover": { backgroundColor: "white" },
                  width: "400px"
                }}
                maxRows={4}
                aria-label="maximum height"
                placeholder="Add a post"
              />
            } />
          </ListItemButton>
        </List>
      </Paper>
      {posts && posts.map((post, index) => (
        <Card
          key={index}
          sx={{
            borderRadius: "5px",
            boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
            maxWidth: 596,
            marginTop: 2,
            padding: 0
          }}
        >
          <CardHeader
            sx={{ padding: "16px 16px 8px 16px" }}
            avatar={<Avatar sx={{ bgcolor: 'rgb(244 67 54)' }} aria-label="user">
              {initials}
            </Avatar>}
            title={<b>{user}</b>}
            subheader={dateFormate}
          />
          <CardContent
            style={{
              padding: "16px 16px 6px 16px",
              fontWeight: "500"
            }}>
            {post.title}
          </CardContent>
          <Typography sx={{
            fontSize: "13px",
            padding: "0px 16px 16px 16px",
          }}>
            {post.body}
          </Typography>
          <CardMedia
            component="img"
            image={photo.url}
            alt={post.userId}
          />
          <Input type="text" disableUnderline inputRef={nameRef} className='nameInput' />
          <Input type="text" disableUnderline inputRef={commentRef} className='commentInput' />
          {/* <Input placeholder="Placeholder" inputProps={ariaLabel} /> */}
          <SendIcon onClick={myFunction} sx={{ padding: "0 15px" }} />
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <b><ExpandMoreIcon sx={{ "&:hover": { backgroundColor: 'transparent' } }} /></b>
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Comments props={post.id} />
          </Collapse>
        </Card>
      ))}
    </div>
  );
}