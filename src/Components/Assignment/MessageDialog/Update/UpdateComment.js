import React, { useEffect, albumef, useState, useRef } from 'react'
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CommonBody from '../DialogBody';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { updatedComments } from '../../Redux/Actions/CommentActions';

export default function CommentUpdate() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id, userId } = useParams();
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState("none")
  const [scsMsg, setScsMsg] = useState('');
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const [getObjData, setGetObjData] = useState("");
  const commentUpdateRef = useRef('');
  const userData = useSelector(state => state.users.users)
  const commentData = useSelector(state => state.comments.comments)

  useEffect(() => {
    if (commentData) {
      const data = commentData.find(obj => (obj.id) === Number(id))
      setGetObjData(data);
    }
  }, [commentData, id]);

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
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Comment updated successfully");
    }, 3000);
    setTimeout(() => {
      setOpen(false);
      setScsMsg("");
      setInputDisabled(false);
      navigate(-1);
    }, 5000);
  }

  const closeHandler = () => {
    setOpen(false)
    navigate(-1)
  }

  return (
    <CommonBody
      submitHandler={uploadHandler}
      cancelHandler={closeHandler}
      openHandler={open}
      msg={scsMsg}
      display={display}
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Update comment"
      button="Update"
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
  )
}
