import { Paper } from '@mui/material'
import React from 'react'

export default function Intro({props}) {
  return (
    <Paper 
      sx={{height:400, width: "490px", marginBottom: "16px"}}
      elevation={2}
      >
        {props}
    </Paper>
  )
}
