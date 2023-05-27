import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, IconButton, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';

export default function Intro() {
  const [userIntro, setUserIntro] = useState('');
  const { param } = useParams()

  // eslint-disable-next-line
  const FetchIntro = useCallback(async () => {
    const response = await axios.get(`http://localhost:3000/users?id=${param}`);
    setUserIntro(response.data[0]);
  })

  useEffect(() => {
    FetchIntro();
  }, [])

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
        <Card
          sx={{
            borderRadius: "5px",
            boxShadow: "rgb(211, 211, 211) 0px 2px 3px 0px",
          }}
        >
          {userIntro ?
            <CardContent sx={{ fontSize: "14px" }} color="text.secondary">
              <Typography gutterBottom variant="h6" sx={{ color: "rgb(0, 0, 0)" }}>
                <b>Intro</b>
              </Typography>
              <IconButton sx={{
                "&:hover": { backgroundColor: "transparent" },
                fontSize: "16px"
              }}>
                <s  pan style={{ textAlign: "left", width: "35px" }} >
                  <PhoneIcon />
                </s>
                <span className='introInfo'>
                  {userIntro.phone}
                </span>
              </IconButton >
              <br />
              <IconButton sx={{ "&:hover": { backgroundColor: "transparent" }, fontSize: "16px" }}>
                <span style={{ textAlign: "left", width: "35px" }} >
                  <EmailIcon />
                </span>
                <span className='introInfo'>
                  {userIntro.email} </span>
              </IconButton>
              <br />
              <IconButton sx={{ "&:hover": { backgroundColor: "transparent" }, fontSize: "16px" }}>
                <span style={{ textAlign: "left", width: "35px" }} >
                  <BusinessCenterIcon />
                </span>
                <span className='introInfo'>
                  {userIntro.company.name}
                </span>
              </IconButton>
              <br />
              <IconButton sx={{ "&:hover": { backgroundColor: "transparent" }, fontSize: "16px" }}>
                <span style={{ textAlign: "left", width: "35px" }} >
                  <LocationOnIcon />
                </span>
                <span className='introInfo'>
                  {userIntro.address.suite}, {userIntro.address.street}, {userIntro.address.city}
                </span>
              </IconButton>
              <br />
              <IconButton sx={{ "&:hover": { backgroundColor: "transparent" }, fontSize: "16px" }}>
                <span style={{ textAlign: "left", width: "35px" }} >
                  <LinkIcon />
                </span>
                <span className='introInfo'>
                  <Link href={userIntro.website}>{userIntro.website}</Link>
                </span>
              </IconButton>
            </CardContent> : ''}
        </Card>
      </Paper>
    </>
  )
}
