import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { Paper, Grid, Divider } from '@mui/material';
import { red } from '@mui/material/colors';

export default function Comments() {
  const [commentId, setCommentId] = useState();

  const fetchUser = () => {
    return axios
      .get(`http://localhost:3000/comments?userId=${commentId}`)
      .then((response) => setCommentId(response.data));
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <>
      {commentId && commentId.map((item, index) => (
        <Paper key={index} style={{ padding: "5px 16px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user">A</Avatar>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{item.name}</h4>
            <p style={{ textAlign: "left", margin: 5, marginLeft: 0 }}>
            {item.body}
            </p>
          </Grid>
        </Grid>
        </Paper>
      ))}
    </>
  )
}
/*
  return (
    <>
      {commentId && commentId.map((itme, index) => (
        <CardContent key={index}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          <Typography 
            sx={{ marginBottom: 1, display: 'inline'}} 
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">RA</Avatar>}
            paragraph><b>{itme.name}</b>
          </Typography>
          <Typography sx={{ marginBottom: 1}} paragraph>{itme.body}</Typography>
        </CardContent>
      ))}
    </>
  )
}
*/

