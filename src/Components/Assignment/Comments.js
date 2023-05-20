import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { Paper, Grid } from '@mui/material';
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

  return (
    <>
      {commentId && commentId.map((item, index) => (
        <Paper key={index} style={{ 
          boxShadow: "none",
          padding: "0px 16px" }}>
        <Grid container 
          wrap="nowrap" 
          spacing={2}
          sx={{ 
            margin: "8px 0",
            paddingLeft: 0 
           }}
        >
          <Grid item style={{paddingLeft: 0, marginLeft: 0}}>
          <Avatar sx={{ 
            bgcolor: red[500],
            }} 
            aria-label="user">
            {/*item.name.match(/(\b\S)?/g).join("").toUpperCase()*/}
            {/*item.name.match(/\b\w/g).join('').slice(0, 2)*/}
            {item.name.split('').slice(0, 2).map(word => word[0]).join('')}
          </Avatar>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth sx={{
            backgroundColor: "rgb(240,242,245)",
            borderRadius: "16px",
            margin: "0 16px 0 10px"
          }}>
            <h4 style={{ margin: 0, fontSize: "13px", textAlign: "left" }}>
              {item.name}
            </h4>
            <p style={{ fontSize: "14px", textAlign: "left", margin: "5px 0", paddingRight: "8px" }}>
            {item.body}
            </p>
          </Grid>
        </Grid>
        </Paper>
      ))}
    </>
  )
}