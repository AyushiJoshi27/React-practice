import React from 'react';
import { Paper } from '@mui/material'

export default function Todos({props}) {
  return (
    <Paper 
      sx={{height:400, width: "490px", marginBottom: "16px"}}
      elevation={2}
      >
        {props}
    </Paper>
  )
}
