import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Paper, Grid, ListItemIcon, ListItemText, ListItem, TextField, Dialog, LinearProgress, DialogContentText, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import { createComment, deletedComment, fetchComments, updatedComments } from './Redux/Actions/CommentActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Comments({ comments }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const userData = useSelector((state) => state.users.users);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [display, setDisplay] = useState("none")
  const [inputDisabled, setInputDisabled] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deleteId, setDeleteId] = useState("");
  const [scsMsg, setScsMsg] = useState('');
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => { });
  const userComments = useRef("")
  const commentUpdate = useRef("")
  //delete modal
  const [openD, setOpenD] = useState(false);
  const [openU, setOpenU] = useState(false);
  //update modal
  const [data, setData] = useState("");
  console.log(comments);

  // useEffect(() => {
  //   dispatch(fetchComments(postId))
  // }, [postId]);

  // eslint-disable-next-line
  const handlePost = () => {
    const data ={
      name: userData.name,
      // postId: postId,
      body: userComments.current.value,
      email: userData.email,
    };

    if (data) {
      dispatch(createComment(data));
    }
  }

  //delete handler
  const deletePhotoHandler = (item) => {
    setDeleteId(item);
    setAnchorEl(null);
    setOpenD(true);
  }

  //close
  const handleCloseD = () => {
    setOpenD(false);
  }

  //delete comment
  const deletePost = () => {
    if (deleteId) {
      dispatch(deletedComment(deleteId));
    };
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 1000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Deleted successfully");
    }, 4000);
    setTimeout(() => {
      setScsMsg("");
      setOpenD(false);
      setInputDisabled(false);
    }, 5000);
  };

  //update handler
  const updateCommentHandler = (obj) => {
    setAnchorEl(null);
    setOpenU(true);
    setData(obj);
  }

  //close 
  const handleCloseU = () => {
    setOpenU(false);
  };

  //update
  const updatePost = () => {
    if (data) {
      const obj = {
        // postId: data.postId,
        id: data.id,
        name: data.name,
        email: userData.email,
        body: commentUpdate.current.value,
      }
      if (obj) {
        dispatch(updatedComments(obj));
      };
      setInputDisabled(true);
      setTimeout(() => { setDisplay("block") }, 2000);
      setTimeout(() => {
        setDisplay("none");
        setScsMsg("updated successfully");
      }, 3000);
      setTimeout(() => {
        setOpenU(false);
        setScsMsg("");
        setInputDisabled(false);
      }, 5000);
    };
  };

  return (
    <>
        <Paper style={{
          boxShadow: "none",
          padding: "0px 16px"
        }}>
        {comments && comments.map((item, index) => (
          <Grid container
            wrap="nowrap"
            key={index}
            spacing={2}
            sx={{
              margin: "8px 0",
              paddingLeft: 0
            }}
          >
            <Grid item style={{ paddingLeft: 0, marginLeft: 0 }}>
              <Avatar sx={{
                bgcolor: red[500],
              }}
                aria-label="user">
                {item.name.split('').slice(0, 2).map(word => word[0]).join('')}
              </Avatar>
            </Grid>
            <Grid justifyContent="left" item sx={{
              backgroundColor: "rgb(240,242,245)",
              borderRadius: "16px",
              margin: "0 8px 0 10px"
            }}>
              <h4 style={{ margin: 0, fontSize: "13px", textAlign: "left" }}>
                {item.name}
              </h4>
              <p style={{ fontSize: "14px", textAlign: "left", margin: "5px 0", paddingRight: "8px" }}>
                {item.body}
              </p>
            </Grid>
            <Grid item>
              <EditIcon sx={{marginRight:1, fontSize: "14px"}} onClick={() => updateCommentHandler(item)} />
              <DeleteIcon sx={{fontSize: "14px"}} onClick={() => deletePhotoHandler(item.id)}/>
            </Grid>
          </Grid>
          ))}
        </Paper>
        <ListItem>
          <ListItemIcon>
            <Avatar sx={{ backgroundColor: 'rgb(244 67 54)' }} aria-label="user">
              <PersonIcon/>
            </Avatar>
          </ListItemIcon>
          <ListItemText primary={
              <TextField
                id="outlined-update-input"
                label="Add a comment"
                InputProps={{
                  readOnly: false,
                }}
                sx={{
                  marginRight: 1,
                  width: 450
                }}
                inputRef={userComments}
                multiline
              />
            } />
          <ListItemIcon>
            <SendIcon onClick={handlePost} />
          </ListItemIcon>
        </ListItem>
        {/* Delete */}
      <Dialog
        fullScreen={fullScreen}
        open={openD}
        onClose={handleCloseD}
        aria-labelledby="responsive-delete-dialog-title"
      >
        <DialogTitle id="responsive-delete-dialog-title" variant='h6'>
          Delete Comment
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
            Are you sure you want to delete the comment?
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCloseD} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
          <Button onClick={deletePost} variant="contained" disabled={inputDisabled}><b>Delete</b></Button>
        </DialogActions>
      </Dialog>
      {/* Update modal */}
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
              label="Edit comment"
              InputProps={{
                readOnly: false,
              }}
              sx={{
                width: 500
              }}
              defaultValue={data.body}
              inputRef={commentUpdate}
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
  )
}