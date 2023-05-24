import React, { useState, useEffect } from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

export default function Albums() {
  const [itemData, setitemData] = useState();

  const fetchInfo = () => {
    return fetch('http://localhost:3000/albums?userId=1')
      .then((res) => res.json())
      .then((json) => setitemData(json))
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      {itemData && itemData.map((item, index) => (
        <CardHeader
        key={item.title}
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="comment-avatar">RA</Avatar>}
        subheader={item.title}
        />
      ))}
    </>
  )
}
