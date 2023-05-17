import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { Paper, Grid, Divider } from '@mui/material';
import { red } from '@mui/material/colors';

export default function Comments({props}) {
  const [commentId, setCommentId] = useState();

  const fetchUser = () => {
    return axios
      .get(`http://localhost:3000/comments?postId=${props}`)
      .then((response) => setCommentId(response.data));
  }

  useEffect(() => {
    fetchUser();
  }, [])
  console.log(commentId);

  return (
    <>
      {commentId && commentId.map((item, index) => (
        <Paper key={index} style={{ padding: "5px 16px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
            {/*item.name.match(/(\b\S)?/g).join("").toUpperCase()*/}
            {/*item.name.match(/\b\w/g).join('').slice(0, 2)*/}
            {item.name.split('').slice(0, 2).map(word => word[0]).join('')}
          </Avatar>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>
              {item.name}
            </h4>
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