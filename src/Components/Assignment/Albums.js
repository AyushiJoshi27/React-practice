import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'blue',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
}));

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

      console.log(itemData);
    
  return (
    <div>
        <p>item</p>
    </div>
  )
}

/*<ImageList sx={{ height: 450, margin: 2 }} cols={3} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
      </ImageList>*/