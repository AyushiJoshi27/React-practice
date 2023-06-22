import React, { useRef, useState } from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CommonBody from '../DialogBody';
import { updateUser } from '../../Redux/Actions/UserActions.';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const UpdateUserInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { userId } = useParams();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const userState = useSelector(state => state.users);
  const mailRef = useRef('');
  const websiteRef = useRef('');
  const aptsRef = useRef('')
  const streetRef = useRef('');
  const cityRef = useRef('');
  const phoneRef = useRef();
  const companyRef = useRef('');

  const uploadHandler = () => {
    var data = {
      "address": {
        "city": cityRef.current.value,
        geo: {
          lat: userState.users.address.geo.lat,
          lng: userState.users.address.geo.lng,
        },
        "street": streetRef.current.value,
        "suite": aptsRef.current.value,
        zipcode: userState.users.address.zipcode
      },
      "email": mailRef.current.value,
      id: userId,
      name: userState.users.name,
      "phone": phoneRef.current.value,
      username: userState.users.username,
      "website": websiteRef.current.value,
      "company": {
        name: companyRef.current.value,
        catchPhrase: userState.users.company.catchPhrase,
        bs: userState.users.company.bs,
      },
    };
    setInputDisabled(true);
    dispatch(updateUser(data));
  }

  if (userState.msg) {
    navigate(-1)
  } else if (userState.error) {
    navigate(-1);
  }

  const closeHandler = () => {
    setOpen(false)
    navigate(-1)
  }

  return (
    <>
      {userState ?
        <CommonBody
          submitHandler={uploadHandler}
          cancelHandler={closeHandler}
          openHandler={open}
          progress={progress}
          buffer={buffer}
          fullscreen={fullScreen}
          inputDisabled={inputDisabled}
          title="Update user Information"
          button="Update"
          state={userState}
          bodyContent={
            <List sx={{ fontSize: "14px" }}>
              <ListItem>
                <ListItemAvatar><Avatar><PhoneIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={userState.users.phone}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={phoneRef}
                    sx={{ width: 370 }}
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
                    defaultValue={userState.users.email}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={mailRef}
                    sx={{ width: 370 }}
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
                    defaultValue={userState.users.company.name}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={companyRef}
                    sx={{ width: 370 }}
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
                    defaultValue={userState.users.address.suite}
                    InputProps={{
                      readOnly: false,
                    }}
                    multiline
                    inputRef={aptsRef}
                    sx={{ width: 370 }}
                    label="Apartment number"
                    disabled={inputDisabled}
                  />

                } />
              </ListItem>
              <ListItem sx={{ color: "#000000" }}>
                <ListItemAvatar><Avatar><AddRoadIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={userState.users.address.street}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={streetRef}
                    sx={{ width: 370 }}
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
                    defaultValue={userState.users.address.city}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={cityRef}
                    sx={{ width: 370 }}
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
                    defaultValue={userState.users.website}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={websiteRef}
                    sx={{ width: 370 }}
                    label="Website"
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
            </List>
          }
        />
        : ""}
    </>
  )
}

export default UpdateUserInfo;