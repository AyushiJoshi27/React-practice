import React, { useState, useEffect, useCallback } from 'react';
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
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Comments from './Comments';
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
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);
  const [initials, setInitials] = useState(null);
  const [photo, setPhoto] = useState({ url: "" });
  const {param} = useParams();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date();
  //const dateFormate = format(currentDate, "dd/mm/yyyy")
  const dateFormate = currentDate.toLocaleDateString("en-US", options);

  // eslint-disable-next-line
  useEffect(() => {
    fetchPosts();
    fetchUser();
    fetchPhoto();
    //FetchPostsIds();
    //fetchAlbums();
  }, []);

  // eslint-disable-next-line
  const fetchUser = useCallback(() => {
    return axios
      .get(`http://localhost:3000/users?id=${param}`)
      .then((response) => {
        setUser(response.data[0].name);
        setInitials(response.data[0].name.match(/(\b\S)?/g).join("").toUpperCase())
      });
  });

  // eslint-disable-next-line
  const fetchPosts = useCallback(() => {
    return axios
      .get(`http://localhost:3000/posts?userId=${1}`)
      .then((response) => setPosts(response.data));
  });

  // eslint-disable-next-line
  const fetchPhoto = useCallback(() => {
    return axios
      .get(`http://localhost:3000/photos?albumId=${1}`)
      .then((response) => setPhoto(response.data[0]));
  })

  // eslint-disable-next-line
  //  const fetchAlbums = () => {
  //     return axios
  //       .get('http://localhost:3000/albums?userId=1')
  //       .then((response) => console.log("Albums", response.data));
  //   };


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ float: "right" }}>
      {posts && posts.map((post, index) => (
        <Card key={index} sx={{ maxWidth: 596, marginTop: 2, padding: 0 }}>
          <CardHeader
            sx={{ padding: "16px 16px 8px 16px" }}
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="user">
              {initials}
            </Avatar>}
            title={<b>{user}</b>}
            subheader={dateFormate}
          />
          <CardContent 
            style={{ 
              padding: "0 16px 6px 16px",
              fontWeight: "500"
              }}>
            {post.title}
          </CardContent>
          <Typography sx={{
            fontSize: "14px", 
            padding: "0px 16px 16px 16px",
            fontSize: "13px",
            padding: "0px 16px 16px",
            lineHeight: 1
            }}>
            {post.body}
          </Typography>
          <CardMedia
            component="img"
            image={photo.url}
            alt={post.userId}
          />
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <b><ExpandMoreIcon /></b>
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