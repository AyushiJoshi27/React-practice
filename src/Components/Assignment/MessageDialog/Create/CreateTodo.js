import React, { useRef, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import CommonBody from '../DialogBody';
import { createTodo, createTodoMsg, todoMsg } from '../../Redux/Actions/TodosAction';
import { TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function CreateTodos() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { userId } = useParams();
  var [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  var [inputDisabled, setInputDisabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const newTodoRef = useRef('');
  const todoState = useSelector((state) => state.todos)

  const handleSelector = (event) => {
    setSelectedValue(event.target.value);
  }

  const uploadHandler = () => {
    setInputDisabled(true);
    const data = {
      userId: Number(userId),
      title: newTodoRef.current.value,
      completed: Boolean(selectedValue)
    }
    dispatch(createTodo(data));
  }

  if (todoState.msg) {
    setTimeout(() => {
      navigate(-1) 
    }, 1000)
  }

  const closeHandler = () => {
    setOpen(false)
    navigate(-1)
  }

  return (
    <>
      <CommonBody
        submitHandler={uploadHandler}
        cancelHandler={closeHandler}
        openHandler={open}
        progress={progress}
        buffer={buffer}
        fullscreen={fullScreen}
        inputDisabled={inputDisabled}
        title="Create a todo"
        button="Create"
        state={todoState}
        bodyContent={
          <List dense>
            <ListItem
              key="create"
              secondaryAction={
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="toDoStatus" disabled={inputDisabled}>Status</InputLabel>
                  <Select
                    labelId="toDoStatus"
                    id="todo-select"
                    value={selectedValue}
                    label="Todo"
                    onChange={handleSelector}
                    sx={{ height: 50 }}
                    disabled={inputDisabled}
                  >
                    <MenuItem value={false}>In progress</MenuItem>
                    <MenuItem value={true}>Completed</MenuItem>
                  </Select>
                </FormControl>
              }
              disablePadding
            >
              <ListItemText primary={
                <TextField
                  id="outlined-post-input"
                  label="create todo"
                  InputProps={{
                    readOnly: false,
                  }}
                  inputRef={newTodoRef}
                  sx={{ marginRight: 2, width: 345 }}
                  multiline
                  disabled={inputDisabled}
                />
              } />
            </ListItem>
          </List>
        }
      />
    </>
  )
}
