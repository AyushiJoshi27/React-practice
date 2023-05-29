import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
//dialog
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/base';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function Intro() {
  const [userIntro, setUserIntro] = useState('');
  const { param } = useParams()
  // dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [editInfo, setEditInfo] = React.useState(false);
  const mailRef = useRef('');
  const websiteRef = useRef('');
  const aptsRef = useRef('')
  const streetRef = useRef('');
  const cityRef = useRef('');
  const phoneRef = useRef();
  const companyRef = useRef('');

  // eslint-disable-next-line
  const FetchIntro = useCallback(async () => {
    const response = await axios.get(`http://localhost:3000/users?id=${param}`);
    setUserIntro(response.data[0]);
  })

  useEffect(() => {
    FetchIntro();
  }, []);

  const infoUpdate = () => {
    const data = {
      "email": mailRef.current.value,
      "website": websiteRef.current.value,
      "address": {
        "street": streetRef.current.value,
        "suite": aptsRef.current.value,
        "city": cityRef.current.value
      },
      "phone": phoneRef.current.value,
      "company": {
        "name": companyRef.current.value,
      }
    };

    data ? axios.put(`http://localhost:3000/users/${param}`, data) : console.log("Info");
    FetchIntro();
    setEditInfo(false);
  };

  const EditInfo = () => {
    setEditInfo(true);
  }

  const editClose = () => {
    setEditInfo(false);
  };

  return (
    <>
      <Paper
        sx={{
          borderRadius: "5px",
          boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
          marginBottom: "16px",
          width: "490px",
        }}
        elevation={2}
      >
        {userIntro ?
          <List sx={{ fontSize: "12px" }}>
            <ListItem
              secondaryAction={
                <EditIcon edge="end" aria-label="edit" onClick={EditInfo}/>
              }
            >
              <ListItemText primary={<b>Intro</b>} />
            </ListItem>
            <ListItem>
              <ListItemAvatar sx={{fontSize: 14}}><Avatar><PhoneIcon /></Avatar></ListItemAvatar>
              <ListItemText primary={userIntro.phone} />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar><EmailIcon /></Avatar></ListItemAvatar>
              <ListItemText primary={userIntro.email} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar><BusinessCenterIcon /></Avatar>
              </ListItemAvatar>
              <ListItemText primary={userIntro.company.name} />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar><LocationOnIcon /></Avatar></ListItemAvatar>
              <ListItemText primary={<span>{userIntro.address.suite}, {userIntro.address.street}, {userIntro.address.city}</span>} />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar><LinkIcon /></Avatar></ListItemAvatar>
              <ListItemText primary={<Link href={userIntro.website}>{userIntro.website}</Link>} />
            </ListItem>
          </List> : ''}
        {/* Update dialog */}
        {userIntro ? <Dialog
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
            <DialogContentText>
              <List sx={{ fontSize: "14px" }}>
                <ListItem>
                  <ListItemAvatar><Avatar><PhoneIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userIntro.phone}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={phoneRef}
                    sx={{width: "auto"}}
                  />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><EmailIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userIntro.email}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={mailRef}
                    sx={{width: "auto"}}
                  />
                    } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar><BusinessCenterIcon /></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userIntro.company.name}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={companyRef}
                    sx={{width: "auto"}}
                  />
                    } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><ApartmentIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userIntro.address.suite}
                    InputProps={{
                      readOnly: false,
                    }}
                    multiline
                    inputRef={aptsRef}
                    sx={{width: "auto"}}
                  />
                    
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><AddRoadIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userIntro.address.street}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={streetRef}
                    sx={{width: "auto"}}
                  />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><LocationOnIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userIntro.address.city}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={cityRef}
                    sx={{width: "auto"}}
                  />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><LinkIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userIntro.website}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={websiteRef}
                    sx={{width: "auto"}}
                  />
                  } />
                </ListItem>
              </List>
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button autoFocus onClick={editClose}>Cancel</Button>
            <Button onClick={infoUpdate} variant="contained" autoFocus type='submit'>Post</Button>
          </DialogActions>
        </Dialog> : ''}
      </Paper >
    </>
  )
};