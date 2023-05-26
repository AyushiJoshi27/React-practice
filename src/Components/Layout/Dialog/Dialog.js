import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useParams } from 'react-router';

export default function ResponsiveDialog() {
  const {param} = useParams();
  const [createPost, setCreatePost] = React.useState(false);
  const [newTodo, setNewTodo] = useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const postCreationHandler = () => {
    setCreatePost(true);
  };

  const postCreationClose = () => {
    setCreatePost(false);
  };

  const AddNewTodos = () => {
    // (newTodo) ? console.log(newTodo) : console.log("Hii");

    // fetch(`http://localhost:3000/todos/${param}`, {
    //   method: 'POST',
    //   body: newTodo
    // })

    setCreatePost(false);
  }

  return (
    <div>
      <Button variant="outlined" onClick={postCreationHandler}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={createPost}
        onClose={postCreationClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h4'>
          {"Add a todo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginTop: "20px" }}>
              <TextField
                label="Add a todo"
                defaultValue=""
                onChange={(e) => setNewTodo(e.target.value)}
              />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={postCreationClose}>
            Cancel
          </Button>
          <Button onClick={AddNewTodos} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}