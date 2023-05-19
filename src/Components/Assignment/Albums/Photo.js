import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

export default function AlbumPhoto({albumId}) {

    const [photo, setPhoto] = useState();

  //albums ? console.log("userintro:", albums) : console.log("none");

  // eslint-disable-next-line
  const fetchAlbums = useCallback(() => {
    return axios
      .get(`http://localhost:3000/photos?albumId=${albumId}`)
      .then((response) => setPhoto(response.data[0]));
  })

  useEffect(() => {
    fetchAlbums();
  }, [])

  if(photo) {
    console.log(photo);
  }

  return (
    <>  
        {/* <h6>Photo</h6> */}
        {photo ? 
            <img 
                src={photo.thumbnailUrl} 
                alt={photo.id} 
                style={{
                    borderRadius: "10px", 
                    height:"148px", 
                    width:"145px"
                }}
            />
        : ''}
    </>
  )
}

/* <img
           src={`${Photo.img}?w=148&fit=crop&auto=format`}
             srcSet={`${item.img}?w=148&fit=crop&auto=format&dpr=2 2x`}
             alt={item.title}
             loading="lazy"
           /> */