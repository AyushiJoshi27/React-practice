import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
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
      {commentId && commentId.map((itme, index) => (
        <CardContent key={index}>
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
