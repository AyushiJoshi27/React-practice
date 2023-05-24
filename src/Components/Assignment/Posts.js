import React, { useState, useEffect, useCallback, useRef } from 'react';
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import axios from 'axios';
//import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
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
    setTimeout(() => {
      console.log(commentRef.current.value);
      // console.log(nameRef.current.value);
    }, 3000);

    // axios
    //   .post(`http://localhost:3000/comments?userId=${param}`, data);
  }

  return (
    <div style={{ float: "right" }}>
        <input type="text" ref={nameRef} className='nameInput' />
        <input type="text" ref={commentRef} className='commentInput' />
        <Button onClick={myFunction} autoFocus>Save</Button>
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
          {/* <SendIcon onClick={myFunction} sx={{padding: "0 15px"}}/> */}
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