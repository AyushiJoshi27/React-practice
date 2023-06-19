import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Divider } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function CommonDialog() {
  return (
    <Dialog
          fullScreen={fullScreen}
          open={openD}
          onClose={handleCloseD}
          aria-labelledby="responsive-delete-dialog"
        >
          <DialogTitle id="responsive-delete-dialog" variant='h6'>
            Delete {type}
            <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ padding: "10px 24px", width: 500 }}
          >
            </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleCloseD} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={DeleteHandler} variant="contained" disabled={inputDisabled}><b>Delete</b></Button>
          </DialogActions>
        </Dialog>
  )
}
