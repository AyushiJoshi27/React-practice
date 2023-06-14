import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import LinearProgress from '@mui/material/LinearProgress';
//dialog
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../Redux/Actions/UserActions.';

export default function Intro() {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const userData = useSelector((state)=> state.users.users);
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
  const [scsMsg, setScsMsg] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);
  const[display, setDisplay] = useState("none")
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(50);
  const progressRef = React.useRef(() => {});

  const infoUpdate = () => {
      const obj = {
        "address": {
          "city": cityRef.current.value,
          // geo: {
          //   lat:userData.address.geo.lat,
          //   lng: userData.address.geo.lng,
          // },
          "street": streetRef.current.value,
          "suite": aptsRef.current.value,
          // zipcode: userData.address.zipcode
        },
        "email": mailRef.current.value,
        id: userId,
        name: userData.name,
        "phone": phoneRef.current.value,
        username: userData.username,
        "website": websiteRef.current.value,
        "company": {
          name: companyRef.current.value,
          // catchPhrase: userData.company.catchPhrase,
          // bs: userData.company.bs,
        },
      };

      setInputDisabled(true);
      dispatch(updateUser(obj));
      setTimeout(() => {setDisplay("block")}, 2000);
      setTimeout(() => { 
        setDisplay("none");
        setScsMsg("Successfully submitted") ;
      }, 3000);
      setTimeout(() => { 
        setEditInfo(false);
        setScsMsg("");
        setInputDisabled(false); 
      }, 4000);
  };

  const EditInfo = () => {
    setEditInfo(true);
  }

  const editClose = () => {
    setEditInfo(false);
  };

  return (
    <>
    {userData.name && userData.company && userData.address ?
      <Paper
        sx={{
          borderRadius: "5px",
          boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
          marginBottom: "16px",
          width: "490px",
        }}
        elevation={2}
      >
          
          <List sx={{ fontSize: "12px" }}>
            <ListItem
              secondaryAction={
                <Link to={`edit`}>
                  <EditIcon edge="end" aria-label="edit" onClick={EditInfo}/>
                </Link>
              }
            >
              <ListItemText 
                sx={{
                  "&::first-letter": {
                    textTransform: "uppercase"
                  }
                }}
                primary={<b>Information</b>} />
            </ListItem>
            <ListItem>
              <ListItemAvatar sx={{fontSize: 14}}><Avatar><PhoneIcon /></Avatar></ListItemAvatar>
              <ListItemText 
                sx={{
                  "&::first-letter": {
                    textTransform: "uppercase"
                  }
                }}
                primary={userData.phone} />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar><EmailIcon /></Avatar></ListItemAvatar>
              <ListItemText 
                sx={{
                  "&::first-letter": {
                    textTransform: "uppercase"
                  }
                }}
                primary={userData.email} />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar><BusinessCenterIcon /></Avatar></ListItemAvatar>
              <ListItemText 
                sx={{
                  "&::first-letter": {
                    textTransform: "uppercase"
                  }
                }}
                primary={userData.company.name} 
                />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar><LocationOnIcon /></Avatar></ListItemAvatar>
              <ListItemText 
                sx={{
                  "&::first-letter": {
                    textTransform: "uppercase"
                  }
                }}
                primary={<span>{userData.address.suite}, {userData.address.street}, {userData.address.city}</span>} />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar><LinkIcon /></Avatar></ListItemAvatar>
              <ListItemText 
                sx={{
                  "&::first-letter": {
                    textTransform: "uppercase"
                  }
                }}
                primary={userData.website} />
            </ListItem>
          </List> 
        {/* Update dialog */}
        <Dialog
          fullScreen={fullScreen}
          open={editInfo}
          onClose={editClose}
          aria-labelledby="responsive-dialog-title"
          sx={{height: 500}}
        >
          <DialogTitle id="responsive-dialog-title" variant='h6'>
            Edit information
            <Typography sx={{color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center"}}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{display:{display}}}/>
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ width: "500px" }}
          >
              <List sx={{ fontSize: "14px" }}>
                <ListItem>
                  <ListItemAvatar><Avatar><PhoneIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userData.phone}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={phoneRef}
                    sx={{width: 370}}
                    label="Phone number"
                    disabled={inputDisabled}
                  />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><EmailIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userData.email}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={mailRef}
                    sx={{width: 370}}
                    label="Email"
                    disabled={inputDisabled}
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
                    defaultValue={userData.company.name}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={companyRef}
                    sx={{width: 370}}
                    label="Working place"
                    disabled={inputDisabled}
                  />
                    } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><ApartmentIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userData.address.suite}
                    InputProps={{
                      readOnly: false,
                    }}
                    multiline
                    inputRef={aptsRef}
                    sx={{width: 370}}
                    label="Apartment number"
                    disabled={inputDisabled}
                  />
                    
                  } />
                </ListItem>
                <ListItem sx={{color: "#000000"}}>
                  <ListItemAvatar><Avatar><AddRoadIcon/></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userData.address.street}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={streetRef}
                    sx={{width: 370}}
                    label="Street address"
                    disabled={inputDisabled}
                  />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><LocationOnIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userData.address.city}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={cityRef}
                    sx={{width: 370}}
                    label="City name"
                    disabled={inputDisabled}
                  />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><Avatar><LinkIcon /></Avatar></ListItemAvatar>
                  <ListItemText primary={
                    <TextField
                    id="outlined-update-input"
                    defaultValue={userData.website}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={websiteRef}
                    sx={{width: 370}}
                    label="Website"
                    disabled={inputDisabled}
                  />
                  } />
                </ListItem>
              </List>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={editClose} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={infoUpdate} variant="contained" disabled={inputDisabled}><b>Save</b></Button>
          </DialogActions>
        </Dialog> 
      </Paper > : ''}
    </>
  )
};