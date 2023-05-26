import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AlbumPhoto({ album, photos }) {
  // album ? console.log(album) : console.log("alpha");
  // photos ? console.log(photos) : console.log("Photos");

  return (
    <>
      <>
        {album ?
          <img
            src={album.thumbnailUrl}
            alt={album.id}
            style={{
              borderRadius: "10px",
              height: "148px",
              marginBottom: "5px",
              width: "145px"
            }}
          />
          : ''}
      </>
      <>
        {photos ?
          photos && photos.map((image, index) => (
            <LazyLoadImage
              key={index + 5}
              alt={image.thumbnailUrl}
              src={image.thumbnailUrl}
              style={{
                borderRadius: "10px",
                height: "148px",
                marginBottom: "5px",
                width: "145px"
              }}
            />
          ))
          : ''}
      </>
    </>
  )
}