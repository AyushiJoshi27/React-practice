import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import AlbumPhoto from '../Albums/Photo';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UserAlbum() {
    const [albums, setAlbums] = useState();
    const { param } = useParams();

    // eslint-disable-next-line
    const fetchAlbums2 = useCallback(() => {
        return axios
          .get(`http://localhost:3000/albums?userId=${param}`)
          .then((response) => setAlbums(response.data));
      })

    useEffect(() => {
        fetchAlbums2();
    }, []);

  return (
    <>
    <Paper
      sx={{ 
        lineHeight: 2,
        marginBottom: "16px",
        padding: 2,
        width: "459px", 
      }} 
      elevation={2}
      className='albums'
      >
    <Typography variant='h6'><b>Albums</b></Typography>
    {albums ? 
      <Grid container 
        rowSpacing={1} 
        columnSpacing={{ xs: 1, sm: 1}}
        sx={{
          lineHeight: 2,
          marginBottom: "16px",
          paddingTop: 1,
          columnGap: "8px",
        }}
      >
        {albums && albums.map((items, index) => (
          <Grid item 
            xs={4} 
            key={index} 

            sx={{
              paddingLeft:"5px",
            }}>
            <Item style={{
              paddingLeft: "5px",
              fontSize: "12px",
              fontWeight: 800,
            }}>
              <div style={{marginBottom: "5px"}}><AlbumPhoto albumId={items.id} /></div>
              <p className='albumTitle'>{items.title}</p>
            </Item>
          </Grid>
        ))}
    {/* <Grid item xs={4}>
      <Item>1</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>2</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>3</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>4</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>5</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>6</Item>
    </Grid> */}
    </Grid>
    : ''}
    </Paper>
    </>
  )
}

/* <img
              src={`${item.img}?w=148&fit=crop&auto=format`}
              srcSet={`${item.img}?w=148&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            /> */

// <img
//             src={`${item.img}?w=148&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=148&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />

// import React, { useCallback, useEffect, useState } from 'react';
// import axios from 'axios';
// import { Paper } from '@mui/material'
// import { useParams } from 'react-router';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import Typography from '@mui/material/Typography';

// export default function UserAlbums() {
//   const [albums, setAlbums] = useState();
//   const { param } = useParams();

//   //albums ? console.log("userintro:", albums) : console.log("none");

//   // eslint-disable-next-line
//   const fetchAlbums = useCallback(() => {
//     return axios
//       .get(`http://localhost:3000/posts?userId=${param}`)
//       .then((response) => setAlbums(response.data));
//   })

//   useEffect(() => {
//     fetchAlbums();
//   }, [])

//   return (
//     <Paper
//       sx={{ 
//         lineHeight: 2,
//         marginBottom: "16px",
//         padding: 2,
//         width: "459px", 
//       }} 
//       elevation={2}
//       className='albums'
//       >
        
//         <Typography variant='h6'><b>Albums</b></Typography>
//       {albums && albums.map((item, index) => (
//         <Typography 
//           sx={{fontSize: "14px"}}
//           key={index}
//         >
//         <span><b>{index+1}. </b></span>{item.title}
//         </Typography>
//       ))}
//     </Paper>
//   )
// }
