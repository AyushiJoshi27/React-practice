import React, { useEffect, useState, useRef } from 'react'
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CommonBody from '../DialogBody';
import { updatedPosts } from '../../Redux/Actions/PostActions';

export default function UpdatePost() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id, userId } = useParams();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const postData = useSelector(state => state.posts);
  console.log(postData);
  const postTitleRef = useRef('');
  const postBlogRef = useRef('');
  const [getObjData, setGetObjData] = useState("");

  useEffect(() => {
    if (postData.posts) {
      const data = postData.posts.find(obj => (obj.id) === Number(id))
      setGetObjData(data);
    }
  }, [id, postData.posts]);

  const uploadHandler = () => {
    const data = {
      userId: userId,
      title: postTitleRef.current.value,
      body: postBlogRef.current.value,
      id: Number(id)
    }
    setInputDisabled(true);
    dispatch(updatedPosts(data));
  }

  if (postData.msg) {
    navigate(-1);
  } else if (postData.error) {
    navigate(-1);
  }

  const closeHandler = () => {
    setOpen(false)
    navigate(-1)
  }

  return (
    <>
      {getObjData && postData ?
        <CommonBody
          submitHandler={uploadHandler}
          cancelHandler={closeHandler}
          openHandler={open}
          progress={progress}
          buffer={buffer}
          fullscreen={fullScreen}
          inputDisabled={inputDisabled}
          title="Update post"
          button="Update"
          state={postData}
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
              : ""}
        />
        : ""}
    </>
  )
}