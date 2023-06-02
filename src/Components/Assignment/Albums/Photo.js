import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AlbumPhoto({ album, photos }) {

  return (
    <>
      <>
        {album ?
          <LazyLoadImage
            alt={album.url}
            src={album.thumbnailUrl}
            style={{
              borderRadius: "10px",
              height: "117px",
              marginBottom: "5px",
              width: "145px"
            }}
          /> : ''}
      </>
      <>
        {photos ?
            <LazyLoadImage
              alt={photos.thumbnailUrl}
              src={photos.thumbnailUrl}
              style={{
                borderRadius: "10px",
                height: "148px",
                marginBottom: "5px",
                width: "145px"
              }}
            />
          : ''}
      </>
    </>
  )
};