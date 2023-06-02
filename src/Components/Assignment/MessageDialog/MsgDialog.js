import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/base';
import { Divider } from '@mui/material';

export default function DialogModal({modalOpen, modalClose, header, body, footer}) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={modalOpen}
        onClose={modalClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h6'>
          {header}
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ width: "520px" }}
        >
          {body}
        </DialogContent>
        <Divider />
        <DialogActions>
          {footer}
        </DialogActions>
      </Dialog>
    </>
  )
}

{/* <DialogModal 
        modalOpen={open} 
        modalClose={handleClose}
        header={
          <>
            <b>Add new photo</b>
            <Typography sx={{color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center"}}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
          </>
        }
        body={
          <>
            <List dense>
            <ListItem
              key="create"
              secondaryAction={
                <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                  {/* <InputLabel id="toDoStatus" disabled={inputDisabled}>Photo url</InputLabel> 
                  <InputLabel id="toDoStatus" >Select Album</InputLabel>
                  <Select
                    labelId="toDoStatus"
                    id="demo-simple-select"
                    value={selectedValue}
                    label="Select Album"
                    onChange={selectAlbum}
                    sx={{ height: 50 }}
                    disabled={inputDisabled}
                  >
                    {combinedList && combinedList.map((item, index) => (
                      <>
                      <MenuItem value={item.id} key={index}>{item.id}</MenuItem>
                      <Divider />
                      </>
                    ))}
                  </Select>
                </FormControl>
              }
              disablePadding
            >
              <ListItemText primary={
                <TextField
                  id="outlined-photp-input"
                  defaultValue="url of the photo"
                  InputProps={{
                    readOnly: false,
                  }}
                  inputRef={newTodoRef}
                  sx={{ marginRight: 2, width: 345 }}
                  multiline
                  disabled={inputDisabled}
                />
              } />
            </ListItem>
          </List>
          </>
        }
        footer={
          <>
            <Button onClick={closePhotoM} variant="contained" color='error'><b>Cancel</b></Button>
            <Button onClick={ImageUploader} variant="contained"><b>Save</b></Button>
          </>
        }
      /> */}
