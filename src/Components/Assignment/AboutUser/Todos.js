import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { FormControlLabel, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// import ListItemButton from '@mui/material/ListItemButton';
//Todo update/dalete
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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

export default function Todos() {
  const [userTodos, setUserTodos] = useState([]);
  const { param } = useParams();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  //Todos update/delete
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  //modal => Delete
  const [id, setId] = useState();
  const [openD, setOpenD] = useState(false);
  //update
  const [title, setTitle] = useState('');
  const [openU, setOpenU] = useState(false);
  const [checked, setChecked] = useState(false);

  const titleRef = useRef('');

  useEffect(() => {
    FetchTodos();
  }, [])

  // eslint-disable-next-line
  const FetchTodos = useCallback(async () => {
    const response = await axios.get(`http://localhost:3000/todos?userId=${param}`);
    setUserTodos(response.data);
  });

  const vertClick = (id, title) => {
    setId(id);
    setTitle(title);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const TodoHandler = () => {
    setAnchorEl(null);
  };

  const status = useRef("");
  const newTodo = useRef("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //post
  const AddNewTodos = () => {
    const data = {
      userId: Number(param),
      title: newTodo.current.value,
      completed: Boolean(status.current.value)
    }

    axios.post(`http://localhost:3000/todos?userId=${param}`, data);
    FetchTodos();
    setOpen(false);
  }

  //Todo Delete
  const TodoDeleteHandler = () => {
    setOpenD(true);
  };

  const DeleteTodos = () => {
    if (id) {
      axios.delete(`http://localhost:3000/todos/${id}`)
      FetchTodos();
    };
    setOpenD(false);
  }

  const handleCloseD = () => {
    setOpenD(false);
  };

  //handler for update modal
  const TodoUpdateHandler = () => {
    // id ? console.log("Update: ", id) : console.log("id");
    setOpenU(true);
  }

  const handleCloseU = () => {
    setOpenU(false);
  }

  const updateTodo = () => {
    setAnchorEl(null);

    if (titleRef) {
      const data = {
        userId: Number(param),
        title: titleRef.current.value,
        completed: Boolean(checked)
      }

      console.log(Number(param))
      console.log(titleRef.current.value)
      console.log(Boolean(checked))
      axios.put(`http://localhost:3000/todos/${id}`, data);
      FetchTodos();
      setOpenU(false);
    }
  }

  const CheckboxHandler = (event) => {
    setChecked(event.target.checked)
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
              key={item.title}
              secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="changes"
                    sx={{ "&:hover": { backgroundColor: "#ffffff" } }}
                  >
                    <Button
                      sx={{ paddingRight: 0, float: "right", "&:hover": { backgroundColor: "#ffffff", padding: "0px" } }}
                      id="basic-button"
                      aria-controls={openMenu ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openMenu ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <MoreVertRoundedIcon onClick={() => vertClick(item.id, item.title)} sx={{ "&:hover": { padding: "0px" } }} />
                    </Button>
                    <Menu
                      sx={{ boxShadow: "null" }}
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={TodoHandler}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => TodoUpdateHandler()} >Update</MenuItem>
                      <MenuItem onClick={() => TodoDeleteHandler()} >Delete</MenuItem>
                    </Menu>
                  </IconButton>
              }
            >
              <ListItem
                dense
                sx={{ "&:hover": { backgroundColor: "#ffffff" } }}
              >
                <ListItemIcon sx={{ width: "50px" }}>{index + 1}.</ListItemIcon>
                <ListItemText> {item.title}</ListItemText>
                <Checkbox
                  edge="start"
                  sx={{ paddingLeft: 2 }}
                  checked={item.completed === true ? true : false}
                />
              </ListItem>
            </ListItem>
          ))}
        </List>
      </Paper>
      {/* Modal => CREATE */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h4'>
          {"Add a todo"}
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ width: 500 }}
        >
          <DialogContentText sx={{ marginTop: "20px" }}>
            <Typography sx={{
              display: "inline-block",
              width: "180px",
              textAlign: "end",
              paddingRight: "10px"
            }}
            >
              <label for="html">Status: </label>
            </Typography>
            <input type='text' ref={status} style={{ marginBottom: "20px", width: 200 }} /><br />
            <Typography sx={{
              display: "inline-block",
              width: "180px",
              textAlign: "end",
              paddingRight: "10px"
            }}
            >
              <label for="html">Add a Todo: </label>
            </Typography>
            <input type='text' ref={newTodo} style={{ marginBottom: "20px", width: 200 }} /><br />
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button autoFocus onClick={handleClose}>Cancel</Button>
          <Button onClick={AddNewTodos} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>
      {/* Modal Delete */}
      <Dialog
        fullScreen={fullScreen}
        open={openD}
        onClose={handleCloseD}
        aria-labelledby="responsive-delete-dialog-title"
      >
        <DialogTitle id="responsive-delete-dialog-title" variant='h4'>
          Delete
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ padding: "10px 24px", width: 500 }}
        >
          <DialogContentText>
            <Typography>Are you sure you want to delete it?</Typography>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button autoFocus onClick={handleCloseD}>Cancel</Button>
          <Button onClick={DeleteTodos} autoFocus>Delete</Button>
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
          <DialogTitle id="responsive-update-dialog-title" variant='h4'>
            Update
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ padding: "10px 24px", width: 500 }}
          >
            <DialogContentText>
              <TextField
                id="outlined-update-input"
                defaultValue={title}
                InputProps={{
                  readOnly: false,
                }}
                inputRef={titleRef}
                sx={{width: 500}}
                multiline
                rows={2}
              />
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={CheckboxHandler} />}
              />
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button autoFocus onClick={handleCloseU}>Cancel</Button>
            <Button onClick={updateTodo} autoFocus>Update</Button>
          </DialogActions>
        </Dialog>
        : " "}
    </>
  )
}
