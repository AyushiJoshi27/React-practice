import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { Paper, Typography } from '@mui/material'
import { useParams } from 'react-router';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
//Todo update/dalete
import Menu from '@mui/material/Menu';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
//dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo, fetchTodos, updateTodos } from '../Redux/Actions/TodosAction';

export default function Todos() {
  const dispatch = useDispatch()
  const userTodos = useSelector((state) => state.todos.todos);
  const { userId } = useParams();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [scsMsg, setScsMsg] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);
  //Todos update/delete
  const [anchorEl, setAnchorEl] = useState(false);
  const openMenu = Boolean(anchorEl);
  //modal => Delete
  const [id, setId] = useState();
  const [openD, setOpenD] = useState(false);
  //update
  const [title, setTitle] = useState('');
  const [openU, setOpenU] = useState(false);
  const [todoStatus, setTodoStatus] = useState(false);
  const [display, setDisplay] = useState("none")
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const progressRef = React.useRef(() => { });
  const titleRef = useRef('');
  const newTodoRef = useRef("");

  function vertClick(id, title, status) {
    setId(id);
    setTitle(title);
    setTodoStatus(status);
  }

  const handleClick = (event) => { setAnchorEl(event.currentTarget); };

  const TodoHandler = () => { setAnchorEl(false); };

  const handleClickOpen = () => { setOpen(true); };

  const handleClose = () => { setOpen(false); };

  //post
  const AddNewTodos = () => {
    setAnchorEl(false);
    setScsMsg("");
    const data = {
      userId: Number(userId),
      title: newTodoRef.current.value,
      completed: Boolean(selectedValue)
    }

    setInputDisabled(true);
    data ? dispatch(createTodo(data)) : console.log("todo's post");
    setTimeout(() => { setDisplay("block") }, 1000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully submitted");
    }, 3000);
    setTimeout(() => {
      setScsMsg("");
      setOpen(false);
      setInputDisabled(false);
    }, 4000);
  }

  //Todo Delete
  const TodoDeleteHandler = () => {
    setAnchorEl(false);
    setOpenD(true);
  };

  const DeleteTodos = () => {
    if (id) {
      dispatch(deleteTodo(id));
    }
     
    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 1000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully submitted");
    }, 4000);
    setTimeout(() => {
      setScsMsg("");
      setOpenD(false);
      setInputDisabled(false);
    }, 5000);
  }

  const handleCloseD = () => {
    setOpenD(false);
  };

  //handler for update modal
  const TodoUpdateHandler = () => {
    setAnchorEl(false);
    setOpenU(true);
  }

  const handleCloseU = () => {
    setOpenU(false);
  }

  const updateTodo = () => {
    const obj = {
      userId: Number(userId),
      id: id,
      title: titleRef.current.value,
      completed: Boolean(todoStatus)
    };

    if (obj) {
      dispatch(updateTodos(obj));
    }

    setInputDisabled(true);
    setTimeout(() => { setDisplay("block") }, 1000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully submitted");
    }, 3000);
    setTimeout(() => {
      setOpenU(false);
      setScsMsg("");
      setInputDisabled(false);
    }, 5000);
  }

  const CheckboxHandler = (event) => {
    setTodoStatus(event.target.value);
  }

  const handleSelector = (event) => {
    setSelectedValue(event.target.value);
  }

  return (
    <>
      <Paper
        sx={{
          borderRadius: "5px",
          boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
          fontSize: "14px",
          lineHeight: 2,
          marginBottom: "16px",
          padding: "16px 12px 16ppx 16px",
          width: "490px",
        }}
        elevation={2}
      >
        {userTodos ?
          <List>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="addTodo" onClick={handleClickOpen}>
                  <AddCircleIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={<b>Todos</b>}
              />
            </ListItem>
            {userTodos.map((item, index) => (
              <ListItem
                sx={{ paddingLeft: 0 }}
                key={item.id}
                secondaryAction={
                  <>
                    <Button
                      edge="end"
                      sx={{ padding: 0, float: "right", "&:hover": { backgroundColor: "#ffffff", padding: 0 } }}
                      id="basic-button"
                      aria-controls={openMenu ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openMenu ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <MoreVertRoundedIcon onClick={() => vertClick(item.id, item.title, item.completed)} sx={{ "&:hover": { padding: 0 } }} />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={TodoHandler}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                      sx={{ boxShadow: "2px 2px 5px 4px lightgrey" }}
                    >
                      <MenuItem onClick={() => TodoUpdateHandler()} >Update</MenuItem>
                      <MenuItem onClick={() => TodoDeleteHandler()} >Delete</MenuItem>
                    </Menu>
                  </>
                }
              >
                <ListItem
                  dense
                  sx={{ "&:hover": { backgroundColor: "#ffffff" } }}
                >
                  <ListItemIcon sx={{ width: "50px" }}>{index + 1}.</ListItemIcon>
                  <ListItemText
                    sx={{
                      "&::first-letter": {
                        textTransform: "uppercase"
                      }
                    }}
                  >
                    {item.title}</ListItemText>
                  <Checkbox
                    edge="start"
                    sx={{ paddingLeft: 2, marginRight: 1 }}
                    checked={item.completed === true ? true : false}
                    disableRipple={true}
                  />
                </ListItem>
              </ListItem>
            ))}
          </List>
          : ""}
      </Paper>
      {/* Modal => CREATE */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h6'>
          New to-do
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ width: "520px" }}
        >
          <List dense>
            <ListItem
              key="create"
              secondaryAction={
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="toDoStatus" disabled={inputDisabled}>Status</InputLabel>
                  <Select
                    labelId="toDoStatus"
                    id="demo-simple-select"
                    value={selectedValue}
                    label="Status"
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
                  label="New to-do"
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
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
          <Button onClick={AddNewTodos} variant="contained" disabled={inputDisabled}><b>Save</b></Button>
        </DialogActions>
      </Dialog>
      {/* Modal Delete */}
      <Dialog
        fullScreen={fullScreen}
        open={openD}
        onClose={handleCloseD}
        aria-labelledby="responsive-delete-dialog-title"
      >
        <DialogTitle id="responsive-delete-dialog-title" variant='h6'>
          Delete to-do
          <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
            {scsMsg}
          </Typography>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", width: 500 }}
        >
          <DialogContentText>
            Are you sure you want to delete the to-do from the list?
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCloseD} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
          <Button onClick={DeleteTodos} variant="contained" disabled={inputDisabled}><b>Delete</b></Button>
        </DialogActions>
      </Dialog>
      {/* Modal to update */}
      {title ?
        <Dialog
          fullScreen={fullScreen}
          open={openU}
          onClose={handleCloseU}
          aria-labelledby="responsive-update-dialog-title"
        >
          <DialogTitle id="responsive-update-dialog-title" variant='h6'>
            <b>Edit to-do</b>
            <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ padding: "10px 24px", width: 500 }}
          >
            <List dense>
              <ListItem
                key="create"
                secondaryAction={
                  <>
                  <form sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="toDoStatus">Status</InputLabel>
                    <Select
                      labelId="toDoStatus"
                      id="demo-simple-select"
                      value={todoStatus}
                      label="status"
                      onChange={CheckboxHandler}
                      sx={{ height: 50 }}
                      disabled={inputDisabled}
                    >
                      <MenuItem value={false}>Incompleted</MenuItem>
                      <Divider />
                      <MenuItem value={true}>Completed</MenuItem>
                    </Select>
                  </form>
                  </>
                }
                disablePadding
              >
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={title}
                    InputProps={{
                      readOnly: false,
                    }}
                    label="Edit to-do"
                    inputRef={titleRef}
                    sx={{ marginRight: 2, width: 330 }}
                    multiline
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
            </List>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleCloseU} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={updateTodo} variant="contained" disabled={inputDisabled}><b>Update</b></Button>
          </DialogActions>
        </Dialog>
        : " "}
    </>
  )
}