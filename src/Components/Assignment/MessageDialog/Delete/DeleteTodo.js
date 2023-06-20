import { DialogContentText } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { deleteTodo } from '../../Redux/Actions/TodosAction';

export default function DeleteTodos() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const [scsMsg, setScsMsg] = useState('');
  // const [progress, setProgress] = useState(0);
  // const [buffer, setBuffer] = useState(50);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const loader = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  console.log("id: ", id);

  const DeleteHandler = () => {
    setInputDisabled(true);
    console.log(id)
    dispatch(deleteTodo(id));
    setTimeout(() => {
      setScsMsg("Todo deleted successfully");
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
      loader={loader}
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Delete a todo"
      button="Delete"
      bodyContent={
        <DialogContentText>
          Are you sure you want to delete the todo from the list?
        </DialogContentText>
      }
    />
  )
}
