import React, { useState, useEffect } from 'react';
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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null)
  const { param } = useParams();
  console.log(param);

  const fetchPosts = () => {
    return axios
      .get('http://localhost:3000/posts?userId=1')
      .then((response) => setPosts(response.data));
  };

  const fetchUser = () => {
    return axios
      .get('http://localhost:3000/users?userId=1')
      .then((response) => setUser(response.data));
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, []);

  console.log(posts);
  console.log(user);

  return (
    <div style={{ float: "right" }}>
      {posts && posts.map((post, index) => (
        <Card key={post.id} sx={{ maxWidth: 500, marginTop: 2, padding: 5 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">RA</Avatar>}
            title="Username"
            subheader={post.date}
          />
          <CardContent>
            <Typography variant="body2">
              {post.title}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
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