import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { Paper} from '@mui/material'
import { useParams } from 'react-router';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
//dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Todos() {
  const [userTodos, setUserTodos] = useState([]);
  const { param } = useParams();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const status = useRef("");
  const newTodo = useRef("");

  const handleClickOpen = () => {
    console.log('modal open');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AddNewTodos = () => {
    const data = {
      "userId": param,
      "title": newTodo.current.value,
      "completed": status.current.value
    }
    // console.log(data);

    axios
      .post(`http://localhost:3000/todos?userId=${param}`, data);
    FetchTodos();
    setOpen(false);
  }

  // eslint-disable-next-line
  const FetchTodos = useCallback(async () => {
    const response = await axios.get(`http://localhost:3000/todos?userId=${param}`);
    setUserTodos(response.data);
  })

  useEffect(() => {
    FetchTodos();
  }, [])

  return (
    <>
    <Paper
      sx={{
        borderRadius: "5px",
        boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
        fontSize: "14px",
        lineHeight: 2,
        marginBottom: "16px",
        padding: 2,
        width: "459px",
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
          secondaryAction={
            <IconButton edge="end" aria-label="checkbox">
              <Checkbox checked={item.completed === true ? true : false} />
            </IconButton>
          }
          key={item.id}
        >
          <ListItemIcon>{index + 1}.</ListItemIcon>
          <ListItemText
            primary={item.title}
          />
        </ListItem>
        ))}
      </List>
    </Paper>
    {/* Modal */}
    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h4'>
          {"Add a todo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginTop: "20px" }}>
            <label for="html">Status: </label>
            <input type='text' ref={status}  style={{marginBottom: "20px"}} /><br/>
            {/* <TextField id="standard-basic" label="UserName" ref={username} variant="standard" style={{margin: "20px 0"}} /><br/> */}
            <label for="html">Add a Todo: </label>
            <input type='text' ref={newTodo}  style={{marginBottom: "20px"}} /><br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>Calcel</Button>
          <Button onClick={AddNewTodos} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>
</>
  )
}
