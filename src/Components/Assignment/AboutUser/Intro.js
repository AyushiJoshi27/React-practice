import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material'
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';

export default function Intro() {
  const navigate = useNavigate();
  const userData = useSelector((state)=> state.users.users);

  const editInfoHandler = () => {
    navigate(`update/info`);
  }

  return (
    <>
    {userData ?
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
                <Button className='editButton'>
                <EditIcon edge="end" aria-label="edit" onClick={editInfoHandler}/>
                </Button>
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
      </Paper > : ''}
    </>
  )
};