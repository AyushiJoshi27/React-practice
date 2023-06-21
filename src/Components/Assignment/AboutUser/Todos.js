import React, { useState } from 'react';
import { Paper } from '@mui/material'
import { useNavigate } from 'react-router';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';

export default function Todos() {
  const navigate = useNavigate();
  const userTodos = useSelector((state) => state.todos.todos);
  const [anchorEl, setAnchorEl] = useState(false);
  const openMenu = Boolean(anchorEl);
  const [id, setId] = useState();

  function vertClick(id) {
    setId(id);
  }

  const handleClick = (event) => { setAnchorEl(event.currentTarget) };

  const TodoHandler = () => { setAnchorEl(false); };

  const handleClickOpen = () => { 
    navigate('create/todo');
  };

  //Todo Delete
  const TodoDeleteHandler = () => {
    setAnchorEl(false);
    navigate(`delete/todo/${id}`);
  };

  //handler for update modal
  const TodoUpdateHandler = () => {
    setAnchorEl(false);
    navigate(`edit/todo/${id}`);
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
                      <MoreVertRoundedIcon onClick={() => vertClick(item.id)} sx={{ "&:hover": { padding: 0 } }} />
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
    </>
  )
}