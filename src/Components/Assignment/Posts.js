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

export default function Posts({ name, mail }) {
  const [expanded, setExpanded] = React.useState(false);
  const [posts, setPosts] = useState("");
  const [user, setUser] = useState("");
  const [initials, setInitials] = useState("");
  const [photo, setPhoto] = useState("");
  const { param } = useParams();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date();
  const dateFormate = currentDate.toLocaleDateString("en-US", options);
  const [scsMsg, setScsMsg] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data, setData] = useState("");
  const openMenu = Boolean(anchorEl);

  //post dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [openP, setOpenP] = React.useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [display, setDisplay] = useState("none")
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => { });
  //create
  const postTitleRef = useRef("");
  const postBlogRef = useRef("");
  //delete modal
  const [openD, setOpenD] = useState(false);
  const [openU, setOpenU] = useState(false);

  // eslint-disable-next-line
  useEffect(() => {
    fetchUser();
    fetchPosts();
    fetchPhoto();
  }, []);

  // eslint-disable-next-line
  const fetchUser = useCallback(() => {
    return axios
      .get(`http://localhost:3000/users/${param}`)
      .then((response) => {
        setUser(response.data.name);
        setInitials(response.data.name.match(/(\b\S)?/g).join("").toUpperCase())
      });
  });

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

  //loader
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 200);

    return () => {
      clearInterval(timer)
    };
  }, []);

  //post dialog handlers
  const createPostHanlder = () => {
    const data = {
      userId: param,
      title: postTitleRef.current.value,
      body: postBlogRef.current.value,
    }
    data ? axios.post(`http://localhost:3000/posts?userId=${param}`, data) : console.log("User post");
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      fetchPosts();
      setScsMsg("Successfully submitted");
    }, 4000);
    setTimeout(() => {
      setOpenP(false);
      setScsMsg("");
      setInputDisabled(false);
    }, 5000);
    // setOpenP(false);
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
      axios.delete(`http://localhost:3000/posts/${data.id}`);
      fetchPosts();
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
      userId: param,
      title: postTitleRef.current.value,
      body: postBlogRef.current.value,
    }
    if (obj) {
      axios.put(`http://localhost:3000/posts/${data.id}`, obj);
    };
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      fetchPosts();
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
            height: "150px",
            width: "200px"
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
              <ListItemIcon><Avatar sx={{ backgroundColor: 'rgb(244 67 54)' }} aria-label="user">{initials}</Avatar></ListItemIcon>
              <ListItemText
                primary={
                  <StyledTextarea
                    sx={{
                      "&:hover": { backgroundColor: "white" },
                      width: "400px"
                    }}
                    maxRows={4}
                    aria-label="Create a post"
                    placeholder="Add a post"
                  />
                }
                onClick={postCreationHandler}
              />
            </ListItem>
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
              sx={{ padding: "16px 16px 0px 16px" }}
              avatar={<Avatar sx={{ bgcolor: 'rgb(244 67 54)' }} aria-label="user">
                {initials}
              </Avatar>}
              title={<b>{user}</b>}
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
                    <MoreVertRoundedIcon onClick={() => vertClick(post)} sx={{ "&:hover": { padding: 0 } }} />
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
            <CardActions disableSpacing>
              See all comments
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
              { (name && mail) ? <Comments commentsId={post.id} userName={name} email={mail} /> : ""}
            </Collapse>
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