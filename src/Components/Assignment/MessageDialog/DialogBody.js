import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Divider, LinearProgress, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/base';

export default function CommonBody({
  selectedAlbum,
  button, 
  title, 
  openHandler, 
  inputDisabled, 
  bodyContent, 
  submitHandler, 
  cancelHandler, 
  progress, 
  buffer, 
  loader, 
  error,
  fullScreen
  }) {
  return (
    <Dialog
          fullScreen={fullScreen}
          open={openHandler}
          onClose={cancelHandler}
          aria-labelledby="responsive-delete-dialog"
        >
          <DialogTitle id="responsive-delete-dialog" variant='h6'>
            {title}
            <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
              { error ? error : "successfully" }
            </Typography>
            {loader === true ? (
                        <LinearProgress
                          variant="buffer"
                          value={progress}
                          valueBuffer={buffer}
                        />
                      ) : (
                        console.log(loader)
                      )}
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ padding: "10px 24px", width: 500 }}
          >
            {bodyContent}
            </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={cancelHandler} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={submitHandler} variant="contained" disabled={inputDisabled}><b>{button}</b></Button>
          </DialogActions>
        </Dialog>
  )
}
