import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { Button } from '@mui/base';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

export default function DeleteItem({title, inputDisabled, openD, buffer, progress, handleCloseD, scsMsg, DeletedItem, display }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openD}
      onClose={handleCloseD}
      aria-labelledby="responsive-delete-dialog"
    >
      <DialogTitle id="responsive-delete-dialog-title" variant='h6'>
        Delete {title}
        <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
          {scsMsg}
        </Typography>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
      </DialogTitle>
      <Divider />
      <DialogContent
        sx={{ padding: "10px 24px", width: 500 }}
      >
        <DialogContentText>
          Are you sure you want to delete the {title} from the list?
        </DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={handleCloseD} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
        <Button onClick={DeletedItem} variant="contained" disabled={inputDisabled}><b>Delete</b></Button>
      </DialogActions>
    </Dialog>
  )
}
