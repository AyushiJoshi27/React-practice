import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Albums2() {
    const [albums, setAlbums] = useState();
    const { param } = useParams();

    // eslint-disable-next-line
    const fetchAlbums2 = useCallback(() => {
        return axios
          .get(`http://localhost:3000/posts?userId=${param}`)
          .then((response) => setAlbums(response.data));
      })

    useEffect(() => {
        fetchAlbums2();
    }, []);

  return (
    <ImageList sx={{ width: 500, height: 450 }}  cols={3}>
      {albums.map((item) => (
        <ImageListItem key={item.img}>
            {/* <Photo /> */}
          <ImageListItemBar
            title={item.title}
            // subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

// <img
//             src={`${item.img}?w=148&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=148&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />