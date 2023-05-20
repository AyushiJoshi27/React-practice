import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Paper, Typography } from '@mui/material'
import { useParams } from 'react-router';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Todos() {
  const [userTodos, setUserTodos] = useState([]);
  const { param } = useParams();

  // eslint-disable-next-line
  const FetchTodos = useCallback(async () => {
    const response = await axios.get(`http://localhost:3000/todos?userId=${param}`);
    setUserTodos(response.data);
  })

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
      <Typography variant='h6'><b>Todos</b></Typography>
      {userTodos.map((item, index) => (
        <Typography 
          key={item.id}
          sx={{fontSize: "14px"}}
        >
          <span>{index+1}. </span>{item.title}
          <Checkbox checked={item.completed === true ? true : false } />
        </Typography>
      ))}
    </Paper>
  )
}
