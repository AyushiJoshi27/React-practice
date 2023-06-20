import React, { useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Paper, Grid, ListItemIcon, ListItemText, ListItem, TextField, Dialog, LinearProgress, DialogContentText, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import { createComment } from './Redux/Actions/CommentActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function Comments({ comments }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.users.users);
  var userComments = useRef("")
  const [scsMsg, setScsMsg] = useState('');
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(50);
  const [display, setDisplay] = useState("none")
  const [inputDisabled, setInputDisabled] = useState(false);

  // eslint-disable-next-line
  const handleComment = () => {
      const obj = {
        name: userData.name,
        postId: comments[0].postId,
        body: userComments.current.value,
        email: userData.email,
      };
      if (obj) {
        dispatch(createComment(obj));
        setTimeout(() => { setDisplay("block") }, 2000);
        setTimeout(() => {
          setDisplay("none");
          setScsMsg("Comment created successfully");
        }, 3000);
        setTimeout(() => {
          setScsMsg("");
          userComments = ""
          setInputDisabled(false);
        }, 5000);
      }
  }

  //delete handler
  const deleteComment = (item) => {
    navigate(`delete/comment/${item}`);
  }

  //update handler
  const updateCommentHandler = (obj) => {
    navigate(`update/comment/${obj}`)
  }

  return (
    <>
      <Divider />
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
              margin: "0 0px 0 10px",
              paddingRight: "8px",
              paddingLeft: "10px"
            }}>
              <h4 style={{ margin: 0, fontSize: "13px", textAlign: "left" }}>
                {item.name}
              </h4>
              <p style={{ fontSize: "14px", textAlign: "left", margin: "5px 0", paddingRight: "8px", width: "450px" }}>
                {item.body}
              </p>
            </Grid>
            <Grid item sx={{ padding: "0 10px" }}>
              <EditIcon sx={{ marginRight: 1, fontSize: "24px" }} onClick={() => updateCommentHandler(item.id)} />
              <DeleteIcon sx={{ fontSize: "24px" }} onClick={() => deleteComment(item.id)} />
            </Grid>
          </Grid>
        ))}
      </Paper>
      <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
          {scsMsg}
        </Typography>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
      <ListItem>
        <ListItemIcon>
          <Avatar sx={{ backgroundColor: 'rgb(244 67 54)' }} aria-label="user">
            <PersonIcon />
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
          <SendIcon onClick={handleComment} disabled={inputDisabled}/>
        </ListItemIcon>
      </ListItem>
    </>
  )
}