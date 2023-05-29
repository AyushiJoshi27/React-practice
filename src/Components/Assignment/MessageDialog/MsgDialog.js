import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/base';

export default function MsgDialog() {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
        {/* <Dialog
          fullScreen={fullScreen}
          open={editInfo}
          onClose={editClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" variant='h6'>
            Edit info
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ width: "500px" }}
          >
            <DialogContentText></DialogContentText>
            </DialogContent>
          <Divider />
          <DialogActions>
            <Button autoFocus onClick={editClose}>Cancel</Button>
            <Button onClick={infoUpdate} variant="contained" autoFocus type='submit'>Post</Button>
          </DialogActions>
        </Dialog> */}
    </>
  )
}
