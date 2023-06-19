import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LinearProgress from '@mui/material/LinearProgress';
import { Divider, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

export default function CreateComment() {
    const {postId} = useParams()
    const [open, setOpen] = useState(true);
    const userData = useSelector(state => state.users.users);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inputDisabled, setInputDisabled] = useState(false);
  const [display, setDisplay] = useState("none")
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [scsMsg, setScsMsg] = useState('');
  const commentRef = useRef();

    const closeHandler = () => {
        setOpen(false);
        navigate(-1);
    }

    const uploadHandler = () => {
        const data = {
            "postId": postId,
            "name": userData.name,
            "email": userData.email,
            "body": commentRef.current.value,
        }
    }

  return (
    <>
    <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={closeHandler}
        aria-labelledby="responsive-delete-dialog"
      >
        <DialogTitle id="responsive-delete-dialog" variant='h6'>
          Create comment
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
                inputRef={commentRef}
                multiline
                disabled={inputDisabled}
              />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={closeHandler} variant="contained" color='error'><b>Cancel</b></Button>
          <Button onClick={uploadHandler} variant="contained"><b>Save</b></Button>
        </DialogActions>
      </Dialog >
    </>
  )
}
