import React, { useEffect, postef, useState, useRef } from 'react'
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
import { updatedPosts } from '../../Redux/Actions/PostActions';

export default function UpdatePost() {
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
  const postData = useSelector(state => state.posts.posts);
  const postTitleRef = useRef('');
  const postBlogRef = useRef('');
  const [getObjData, setGetObjData] = useState("");

  useEffect(() => {
    if (postData) {
      const data = postData.find(obj => (obj.id) === Number(id))
      setGetObjData(data);
    }
  }, [id, postData]);

  const uploadHandler = () => {
    const data = {
      userId: userId,
      title: postTitleRef.current.value,
      body: postBlogRef.current.value,
      id: Number(id)
    }
    setInputDisabled(true);
    dispatch(updatedPosts(data));
    setTimeout(() => { setDisplay("block") }, 2000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Post updated successfully");
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
      title="Update post"
      button="Update"
      bodyContent={
        getObjData ?
          <>
            <TextField
              id="outlined-update-input"
              label="Post title"
              InputProps={{
                readOnly: false,
              }}
              sx={{
                width: 500
              }}
              defaultValue={getObjData.title}
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
              defaultValue={getObjData.body}
              inputRef={postBlogRef}
              multiline
              disabled={inputDisabled}
            />
          </>
          : ""
      }
    />
  )
}