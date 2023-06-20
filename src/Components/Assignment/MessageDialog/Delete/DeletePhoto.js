import { DialogContentText } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { deletePhoto } from '../../Redux/Actions/PhotosActions';

export default function DeletePhoto() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const theme = useTheme();
    const { id } = useParams();
    const [open, setOpen] = useState(true);
    const [display, setDisplay] = useState("none")
    const [scsMsg, setScsMsg] = useState('');
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(50);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [inputDisabled, setInputDisabled] = useState(false);
  
    const DeleteHandler = () => {
      setInputDisabled(true);
      console.log(id);
      dispatch(deletePhoto(id));
      setTimeout(() => { setDisplay("block") }, 2000);
      setTimeout(() => {
        setDisplay("none");
        setScsMsg("Photo deleted successfully");
      }, 3000);
      setTimeout(() => {
        setOpen(false);
        setScsMsg("");
        setInputDisabled(false);
        navigate(-1);
      }, 5000);
    }
  
    const closeHandler = () => {
      setOpen(false);
      navigate(-1)
    }
  
    return (
      <CommonBody
        submitHandler={DeleteHandler}
        cancelHandler={closeHandler}
        openHandler={open}
        msg={scsMsg}
        display={display}
        progress={progress}
        buffer={buffer}
        fullscreen={fullScreen}
        inputDisabled={inputDisabled}
        title="Delete an photo"
        button="Delete"
        bodyContent={
          <DialogContentText>
            Are you sure you want to delete the photo from the list?
          </DialogContentText>
        }
      />
    )
  }
  