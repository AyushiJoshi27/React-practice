import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

export default function AlbumPhoto({albumId}) {

    const [photo, setPhoto] = useState();

  // eslint-disable-next-line
  const fetchAlbums = useCallback(() => {
    return axios
      .get(`http://localhost:3000/photos?albumId=${albumId}`)
      .then((response) => setPhoto(response.data[0]));
  })

  useEffect(() => {
    fetchAlbums();
  }, []);

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
                    marginBottom: "5px",
                    width:"145px"
                }}
            />
        : ''}
    </>
  )
}