import { DialogContentText } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CommonBody from '../DialogBody';
import { deleteTodo, deleteTodoMsg, todoMsg } from '../../Redux/Actions/TodosAction';

export default function DeleteTodos() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const todoState = useSelector((state) => state.todos)

  const DeleteHandler = () => {
    setInputDisabled(true);
    dispatch(deleteTodo(id));
  }

  if (todoState.msg) {
    navigate(-1) 
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
      progress={progress}
      buffer={buffer}
      fullscreen={fullScreen}
      inputDisabled={inputDisabled}
      title="Delete a todo"
      button="Delete"
      state={todoState}
      bodyContent={
        <DialogContentText>
          Are you sure you want to delete the todo from the list?
        </DialogContentText>
      }
    />
  )
}
