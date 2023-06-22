import React, { useEffect, albumef, useState, useRef } from 'react'
// import { Divider, List, ListItem, ListItemText } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CommonBody from '../DialogBody';
import { updatedComments } from '../../Redux/Actions/CommentActions';

export default function CommentUpdate() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const [getObjData, setGetObjData] = useState("");
  const commentUpdateRef = useRef('');
  const userData = useSelector(state => state.users.users)
  const commentData = useSelector(state => state.comments)
  console.log(commentData);

  useEffect(() => {
    if (commentData.comments) {
      const data = commentData.comments.find(obj => (obj.id) === Number(id))
      setGetObjData(data);
    }
  }, [commentData.comments, id]);

  const uploadHandler = () => {
    const data = {
      postId: getObjData.postId,
      id: Number(id),
      name: getObjData.name,
      email: userData.email,
      body: commentUpdateRef.current.value,
    }
    setInputDisabled(true);
    dispatch(updatedComments(data));
  }

  if (commentData.msg) {
    navigate(-1);
  } else if (commentData.error) {
    navigate(-1);
  }

  const closeHandler = () => {
    setOpen(false)
    navigate(-1)
  }

  return (
    <>
    {commentData && getObjData ? 
    <CommonBody
      submitHandler={uploadHandler}
      cancelHandler={closeHandler}
      openHandler={open}
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Update comment"
      button="Update"
      state={commentData}
      bodyContent={
        <>
          {getObjData ?
            <TextField
              id="outlined-update-input"
              label="Edit comment"
              InputProps={{
                readOnly: false,
              }}
              sx={{
                width: 500
              }}
              defaultValue={getObjData.body}
              inputRef={commentUpdateRef}
              multiline
              disabled={inputDisabled}
            />
            : ""}
        </>
      }
    />
    : ""}
    </>
  )
}
