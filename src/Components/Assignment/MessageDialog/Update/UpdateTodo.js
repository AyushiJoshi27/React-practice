import React, { useEffect, todoef, useState, useRef } from 'react'
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
import { updateTodos } from '../../Redux/Actions/TodosAction';

export default function UpdatedTodo() {
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
  var todosData = useSelector(state => state.todos.todos);
  console.log(useSelector(state => state.todos))
  const updateTitleRef = useRef('');
  const [todoStatus, setTodoStatus] = useState(false);
  const loader = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    if (todosData) {
      const a = todosData.find(obj => Number(obj.id) === Number(id))
      setGetObjData(a);
    }
  }, [id, todosData]);

  //updated select value
  const CheckboxHandler = (event) => {
    setTodoStatus(event.target.value);
  }

  const uploadHandler = () => {
    setInputDisabled(true);
    var data = {
      userId: Number(userId),
      id: Number(id),
      title: updateTitleRef.current.value,
      completed: Boolean(todoStatus)
    };
    setTimeout(() => {
      dispatch(updateTodos(data));
    }, 4000);
    setTimeout(() => {
      setOpen(false);
      setScsMsg("");
      setInputDisabled(false);
      navigate(-1);
    }, 7000);
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
          display={display}
          progress={progress}
          buffer={buffer}
          fullscreen={fullScreen}
          inputDisabled={inputDisabled}
          title="Update todo Information"
          loader={loader}
          button="Update"
          error={error}
          bodyContent={
            <List dense>
              {getObjData ?
              <ListItem
                key="create"
                secondaryAction={
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="toDoStatus">Status</InputLabel>
                    <Select
                      labelId="toDoStatus"
                      id="demo-simple-select"
                      defaultValue={getObjData.completed}
                      name="toDoStatus"
                      label="status"
                      onChange={CheckboxHandler}
                      sx={{ height: 50 }}
                      disabled={inputDisabled}
                    >
                      <MenuItem value={false}>Incompleted</MenuItem>
                      <Divider />
                      <MenuItem value={true}>Completed</MenuItem>
                    </Select>
                  </FormControl>
                }
                disablePadding
              >
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={getObjData.title}
                    InputProps={{
                      readOnly: false,
                    }}
                    label="Edit to-do"
                    inputRef={updateTitleRef}
                    sx={{ marginRight: 2, width: 330 }}
                    multiline
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
              : ""}
            </List>
          }
        />
    </>
  )
}