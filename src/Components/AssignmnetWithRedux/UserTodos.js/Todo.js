import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material'
import { useParams } from 'react-router';
import Checkbox from '@mui/material/Checkbox';
import { GetTodosAction } from '../Redux/Actions/Actions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function Todo() {
  const dispatch = useDispatch();
  const { param } = useParams();
  const getTodos = useSelector((state) => state.TodosReducer);

  useEffect(() => {
    fetch(`http://localhost:3000/todos?userId=${param}`)
      .then(res => res.json())
      .then(data => dispatch(GetTodosAction(data)));
  }, [])

  return (
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
            <IconButton edge="end" aria-label="delete">
              <AddCircleIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={<b>Todos</b>}
          />
        </ListItem>
        {getTodos.map((item, index) => (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="checkbox">
              <Checkbox checked={item.completed === true ? true : false} />
            </IconButton>
          }
        >
          <ListItemIcon sx={{color: "RGB(0 0 0)"}}>{index + 1}</ListItemIcon>
          <ListItemText
            primary={item.title}
          />
        </ListItem>
        ))}
      </List>
    </Paper>
  )
}



// {/* <Typography variant='h6'><b>Todos</b></Typography>
// {getTodos.map((item, index) => (
//   <Typography
//     key={item.id}
//     sx={{ fontSize: "14px" }}
//   >
//     <span>{index + 1}. </span>{item.title}
//     <Checkbox checked={item.completed === true ? true : false} />
//   </Typography>
// ))} */}