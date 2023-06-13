import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import { ImageList, Paper, Typography } from '@mui/material';
import AlbumPhoto from '../Albums/Photo';

export function Photo() {
  const { userId } = useParams();

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
    <Typography variant={'h6'}><b>Photos</b></Typography>
    <ImageList 
      sx={{ 
        backgroundColor:"rgb(255 255 255)",  
        borderRadius: "5px",
        marginBottom: 0,
        height: 305,
        width: "468px"
      }}
      cols={3} 
      rowHeight={164}
    >
      Albums
    {/* {albumId && albumId.map((item) => (
        <AlbumPhoto albumId={item.id} />
      )
    )} */}
    </ImageList>
    </Paper>
    </>
  )
}