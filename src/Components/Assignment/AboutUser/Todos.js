import React, { useEffect, useState, useCallback } from 'react';
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


export default function Todos() {
  const [userTodos, setUserTodos] = useState([]);
  const { param } = useParams();

  (userTodos) ? console.log(userTodos) : console.log("data");

  // eslint-disable-next-line
  const FetchTodos = useCallback(async () => {
    const response = await axios.get(`http://localhost:3000/todos?userId=${param}`);
    setUserTodos(response.data);
  })

  const AddTodo = () => {
    console.log("add to todo");
  }

  useEffect(() => {
    FetchTodos();
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
            <IconButton edge="end" aria-label="addTodo" onClick={() => AddTodo}>
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
          <ListItemIcon>{index + 1}</ListItemIcon>
          <ListItemText
            primary={item.title}
          />
        </ListItem>
        ))}
      </List>
    </Paper>
  )
}
