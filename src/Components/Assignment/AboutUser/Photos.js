import { Paper } from '@mui/material'
import React from 'react'

export default function Photos({photo}) {
  return (
    <Paper 
      sx={{height:400, width: "490px", marginBottom: "16px"}}
      elevation={2}
      >
        {photo}
    </Paper>
  )
}
