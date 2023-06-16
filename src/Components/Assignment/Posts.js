import React, { useState, useEffect, useCallback, useRef } from 'react';
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import axios from 'axios';
//import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { DialogContentText, LinearProgress, ListItem, Paper } from '@mui/material'
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
import TextareaAutosize from '@mui/base/TextareaAutosize';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
//dialog for post creation
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, deletedPost, updatedPosts } from './Redux/Actions/PostActions';

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
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.users);
  const userPhoto = useSelector((state) => state.photos.photos);
  const commentsList = useSelector((state) => state.comments.comments);
  const posts = useSelector((state) => state.posts.posts)
  const [combinedList, setCombinedList] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [postId, setPostId] = useState("");
  const { userId } = useParams();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date();
  const dateFormate = currentDate.toLocaleDateString("en-US", options);
  const [scsMsg, setScsMsg] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState("");
  const openMenu = Boolean(anchorEl);

  //post dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [openP, setOpenP] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [display, setDisplay] = useState("none")
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(20);
  //create
  const postTitleRef = useRef("");
  const postBlogRef = useRef("");
  //delete modal
  const [openD, setOpenD] = useState(false);
  const [openU, setOpenU] = useState(false);

  useEffect(() => {
    if (commentsList && posts && commentsList.length > 0 && posts.length > 0) {
      let commentsObj = {};
      for (let i = 0; i < commentsList.length; i++) {
        let commentId = commentsList[i].postId;
        if (commentsObj[commentId] && commentsObj[commentId].length > 0) {
          commentsObj[commentId].push(commentsList[i]);
        } else {
          commentsObj[commentId] = [];
          commentsObj[commentId].push(commentsList[i]);
        }
      }
      var postsObj = [];
      for (let j = 0; j < posts.length; j++) {
        let temp = {};
        if (commentsObj[posts[j].id]) {
          temp["comments"] = commentsObj[posts[j].id];
        }
        temp["id"] = posts[j].id;
        temp["title"] = posts[j].title;
        temp["userId"] = posts[j].userId;
        temp["body"] = posts[j].body;
        postsObj.push(temp);
      }
      setCombinedList(postsObj);
    }
  }, [posts, commentsList]);

  const handleExpandClick = (data) => {
    setPostId(data);
    setExpanded(true);
  };

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

  //select menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //post dialog handlers
  const createPostHanlder = () => {
    const data = {
      userId: userId,
      title: postTitleRef.current.value,
      body: postBlogRef.current.value,
    }
    if (data) {
      dispatch(createPost(data));
    };
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully submitted");
    }, 4000);
    setTimeout(() => {
      setOpenP(false);
      setScsMsg("");
      setInputDisabled(false);
    }, 5000);
  }

  // VertIcon click
  const vertClick = (obj) => {
    setData(obj);
  }

  // set anchorEl
  const TodoHandler = () => { setAnchorEl(null); };

  const postCreationHandler = () => {
    setOpenP(true);
  };

  const postCreationClose = () => {
    setOpenP(false);
  };

  //delete handler
  const deletePhotoHandler = () => {
    setAnchorEl(null);
    setOpenD(true);
  }

  //close
  const handleCloseD = () => {
    setOpenD(false);
  }

  const deletePost = () => {
    if (data) {
      dispatch(deletedPost(data.id));
    };
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 1000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Deleted successfully");
    }, 3000);
    setTimeout(() => {
      setScsMsg("");
      setOpenD(false);
      setInputDisabled(false);
    }, 5000);
  };

  //Update handler
  const editPhotoHandler = () => {
    setAnchorEl(null);
    setOpenU(true);
  };

  const handleCloseU = () => {
    setOpenU(false);
  };

  const updatePost = () => {
    const obj = {
      userId: userId,
      title: postTitleRef.current.value,
      body: postBlogRef.current.value,
      id: Number(data.id)
    }
    if (obj) {
      dispatch(updatedPosts(obj));
    };
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      // fetchPosts();
      setScsMsg("updated successfully");
    }, 3000);
    setTimeout(() => {
      setOpenU(false);
      setScsMsg("");
      setInputDisabled(false);
    }, 5000);
  };

  return (
    <>
      <div style={{ float: "right" }}>
        <Paper
          sx={{
            borderRadius: "5px",
            boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
            fontSize: "14px",
            lineHeight: 2,
            marginBottom: "16px",
            padding: 2,
            marginTop: "16px",
          }}
          elevation={2}
        >
          <List
            sx={{
              width: '100%',
              padding: 0
            }}
            aria-labelledby="Create-post-field"
            subheader={
              <Typography variant='h6'><b>Add a post</b></Typography>
            }
          >
            <ListItem sx={{
              padding: "5px 0"
            }}>
              {userData.name ?
                <ListItemIcon>
                  <Avatar sx={{ backgroundColor: 'rgb(244 67 54)' }} aria-label="user">
                    {userData.name.split(" ").map(string => string.charAt(0)).join('').toUpperCase()}
                  </Avatar>
                </ListItemIcon> 
              : " " }
              <ListItemText
                primary={
                  <StyledTextarea
                    sx={{
                      "&:hover": { backgroundColor: "white" },
                      width: "450px"
                    }}
                    maxRows={4}
                    aria-label="Create a post"
                    placeholder="Create a post..."
                  />
                }
                onClick={postCreationHandler}
              />
            </ListItem>
          </List>
        </Paper>
        {combinedList && combinedList.map((item, index) => (
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
            {userData.name ?
            <CardHeader
              sx={{ padding: "16px 16px 0px 16px" }}
              avatar={<Avatar sx={{ bgcolor: 'rgb(244 67 54)' }} aria-label="user">
                {userData.name.split(" ").map(string => string.charAt(0)).join('').toUpperCase()}
              </Avatar>}
              title={<b>{userData.name}</b>}
              subheader={dateFormate}
              action={
                <>
                  <Button
                    edge="end"
                    sx={{ padding: 0, float: "right", "&:hover": { backgroundColor: "#ffffff", padding: 0 } }}
                    id="basic-button"
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <MoreVertRoundedIcon onClick={() => vertClick(item)} sx={{ "&:hover": { padding: 0 } }} />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={TodoHandler}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                    sx={{ boxShadow: "2px 2px 5px 4px lightgrey" }}
                  >
                    <MenuItem onClick={() => editPhotoHandler()}>
                      <EditIcon sx={{ marginRight: 2 }} />Update
                    </MenuItem>
                    <MenuItem onClick={() => deletePhotoHandler()}>
                      <DeleteForeverIcon sx={{ marginRight: 2 }} />Delete
                    </MenuItem>
                  </Menu>
                </>
              }
            /> : "" }
            <CardContent
              style={{
                padding: "16px 16px 6px 16px",
                fontWeight: "500"
              }}>
              {item.title}
            </CardContent>
            <Typography sx={{
              fontSize: "13px",
              padding: "0px 16px 16px 16px",
            }}>
              {item.body}
            </Typography>
            {userPhoto[index] ? 
              <CardMedia
                component="img"
                image={userPhoto[index].thumbnailUrl}
                alt={item.userId}
                sx={{height: 500}}
              /> 
            : ""}
            <CardActions disableSpacing>
              See all comments
              <ExpandMore
                expand={expanded}
                onClick={() => handleExpandClick(item.id)}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <b><ExpandMoreIcon sx={{ "&:hover": { backgroundColor: 'transparent' } }} /></b>
              </ExpandMore>
            </CardActions>
            {postId === item.id ?
              <Collapse in={true} timeout="auto" unmountOnExit>
                <Comments comments={item.comments} />
              </Collapse>
              : ""
            }
          </Card>
        ))}
      </div>
      {/* Modal */}
      {/* Create posts */}
      <Dialog
        fullScreen={fullScreen}
        open={openP}
        onClose={postCreationClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h6'>
          Create Post
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ width: 500 }}>
          <TextField
            id="outlined-update-input"
            label="Post title"
            InputProps={{
              readOnly: false,
            }}
            sx={{
              width: 500
            }}
            inputRef={postTitleRef}
            multiline
            disabled={inputDisabled}
          />
          <TextField
            id="outlined-update-input"
            placeholder='Write something...'
            InputProps={{
              readOnly: false,
            }}
            label="Post description"
            sx={{
              marginTop: "20px",
              width: 500
            }}
            inputRef={postBlogRef}
            multiline
            disabled={inputDisabled}
          />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={postCreationClose} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
          <Button onClick={createPostHanlder} variant="contained" disabled={inputDisabled}><b>Create</b></Button>
        </DialogActions>
      </Dialog>
      {/* Delete */}
      <Dialog
        fullScreen={fullScreen}
        open={openD}
        onClose={handleCloseD}
        aria-labelledby="responsive-delete-dialog-title"
      >
        <DialogTitle id="responsive-delete-dialog-title" variant='h6'>
          Delete Post
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", width: 500 }}
        >
          <DialogContentText>
            Are you sure you want to delete the post?
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCloseD} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
          <Button onClick={deletePost} variant="contained" disabled={inputDisabled}><b>Delete</b></Button>
        </DialogActions>
      </Dialog>
      {/* Update photo */}
      {data ?
        <Dialog
          fullScreen={fullScreen}
          open={openU}
          onClose={handleCloseU}
          aria-labelledby="responsive-update-dialog-title"
        >
          <DialogTitle id="responsive-update-dialog-title" variant='h6'>
            <b>Edit posts</b>
            <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ padding: "10px 24px", width: 500 }}
          >
            <TextField
              id="outlined-update-input"
              label="Post title"
              InputProps={{
                readOnly: false,
              }}
              sx={{
                width: 500
              }}
              defaultValue={data.title}
              inputRef={postTitleRef}
              multiline
              disabled={inputDisabled}
            />
            <TextField
              id="outlined-update-input"
              placeholder='Write something...'
              InputProps={{
                readOnly: false,
              }}
              label="Post description"
              sx={{
                marginTop: "20px",
                width: 500
              }}
              defaultValue={data.body}
              inputRef={postBlogRef}
              multiline
              disabled={inputDisabled}
            />
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleCloseU} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={updatePost} variant="contained" disabled={inputDisabled}><b>Update</b></Button>
          </DialogActions>
        </Dialog>
        : " "}
    </>
  );
}