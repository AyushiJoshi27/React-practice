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

const PostHeaderWrapper = styled('div')({
  root: {
    borderBottom: "1px solid lightGrey",
    padding: 2,
    backgroundColor: "grey"
  },
});

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
  const [photo, setPhoto] = useState({url: ""});
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date();
  //const dateFormate = format(currentDate, "dd/mm/yyyy")
  const dateFormate = currentDate.toLocaleDateString("en-US", options);

  // eslint-disable-next-line
  useEffect(() => {
    fetchPosts();
    fetchUser();
    fetchPhoto()
    //fetchAlbums();
  }, []);

  // eslint-disable-next-line
  const fetchUser = useCallback(() => {
    return axios
      .get(`http://localhost:3000/users?id=${1}`)
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
        <Card key={index} sx={{ maxWidth: 500, marginTop: 2, padding: 0 }}>
          <PostHeaderWrapper>
            <CardHeader
              sx={{ padding: 0 }}
              avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="user">
                {initials}
              </Avatar>}
              title={user}
              subheader={dateFormate}
            />
            <CardContent sx={{ padding: 0, paddingBottom: 1 }}>
              {post.title}
            </CardContent>
          </PostHeaderWrapper>
          <CardMedia
            component="img"
            image={photo.url}
            alt={post.userId}
          />
          <Typography>{post.body}</Typography>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
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