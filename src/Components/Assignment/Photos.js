import React, { useState, useEffect } from 'react'

export default function Photos() {
    const [photos, setPhotos] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/albums?userId=1')
          .then((res) => res.json())
          .then((json) => setPhotos(json))  
    }, [])


      console.log(photos);

  return (
    <div>Photos</div>
  )
}
