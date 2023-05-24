import React, { useCallback, useEffect, useState } from 'react';
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
  const [phototParam, setPhototParam] = useState('')
  const { param } = useParams();

  // eslint-disable-next-line
  const fetchAlbums2 = useCallback(() => {
    return axios
      .get(`http://localhost:3000/albums?userId=${param}`)
      .then((response) => setAlbums(response.data));
  })

  var str = "";
  if(albums){
    //console.log(albums)
    albums && albums.map((data) => {  
      const str1 ="albumId="+data.id+"&";
      str+=str1;
    })
    var sortStr="_sort=albumId"
      str+=sortStr
      console.log(str)
      // setPhototParam(str)
  }

console.log("String: ", str)

  useEffect(() => {
    fetchAlbums2();
  }, []);

  return (
    <>
      <Paper
        sx={{
          borderRadius: "5px",
          boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
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
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            sx={{
              lineHeight: 2,
              marginBottom: "16px",
              paddingTop: 1,
            }}
          >
            {albums && albums.map((items, index) => (
              <Grid item
                xs={4}
                key={items.title}
                width={127}
                sx={{ marginRight: 0, paddingLeft: 0, paddingRight: 0 }}
              >
                <Item style={{
                  boxShadow: "none",
                  fontSize: "12px",
                  fontWeight: 800,
                  padding: 0
                }}>
                  <AlbumPhoto albumId={items.id} />
                  <p className='albumTitle'>{items.title}</p>
                </Item>
              </Grid>
            ))}
          </Grid>
          : ''}
      </Paper>
    </>
  )
}
