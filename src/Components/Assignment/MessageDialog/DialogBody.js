import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Divider, LinearProgress, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function CommonBody({
  submitHandler,
  cancelHandler,
  openHandler,
  progress,
  buffer,
  fullScreen,
  inputDisabled,
  title,
  button,
  state,
  bodyContent,
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
        {state.loading === true ?
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
          : ""
        }
        <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
          {state.msg ? state.msg : ""}
        </Typography>
        <Typography color="error" sx={{ marginTop: "10px", textAlign: "center" }}>
          {state.error ? state.error : ""}
        </Typography>
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
