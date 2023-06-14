// import React from 'react'

// export default function Dialogs() {
//   return (
//     <div>Dialogs</div>
//   )
// }


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

// Dialog component
export const DialogComponent = ({ stateOpen, handleClose }) => {
  return <h1>New compo</h1>
    // <Dialog open={stateOpen} onClose={handleClose}>
    //   <DialogTitle>title</DialogTitle>
    //   <DialogContent>content</DialogContent>
    //   <DialogActions>
    //     <Button onClick={handleClose}>Close</Button>
    //   </DialogActions>
    // </Dialog>
  
};

// Link component to open the dialog
export const DialogLink = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

        <Link to={`new`}>
            <button onClick={() => setOpen(true)}>Open Edit Dialog</button> 
        </Link>
      {open && <DialogComponent stateOpen={true} handleClose={handleClose} />}
    </>
  );
};
