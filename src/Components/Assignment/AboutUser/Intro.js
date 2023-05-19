import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Intro() {
  const [userIntro, setUserIntro] = useState('');
  const { param } = useParams()
  //console.log(useParams());

  // eslint-disable-next-line
  const FetchIntro = useCallback(async () => {
    const response = await axios.get(`http://localhost:3000/users?id=${param}`);
    setUserIntro(response.data[0]);
  })

  //userIntro ? console.log("userintro:", userIntro) : console.log("none");

  useEffect(() => {
    FetchIntro();
  }, [])

  return (
    <>
      <Paper
        sx={{ width: "490px", marginBottom: "16px" }}
        elevation={2}
      >
        <Card>
          {userIntro ?
            <CardContent sx={{ fontSize: "14px" }} color="text.secondary">
              <Typography gutterBottom variant="h6" sx={{ color: "rgb(0, 0, 0)" }}>
                <b>Intro</b>
              </Typography>
              <Typography sx={{fontSize: "14px"}}>
                <PhoneIcon /> 
                <span>{userIntro.phone}</span>
              </Typography >
              <Typography sx={{fontSize: "14px"}}>
                <EmailIcon />{userIntro.email}
              </Typography>
              <Typography sx={{fontSize: "14px"}}>
                <BusinessCenterIcon />{userIntro.company.name}
              </Typography>
              <Typography sx={{fontSize: "14px"}}>
                <LocationOnIcon />
                {userIntro.address.suite}, { userIntro.address.street}, { userIntro.address.city}
              </Typography>
              <Typography sx={{fontSize: "14px"}}>
                <LinkIcon /><Link href={userIntro.website}>{userIntro.website}</Link>
              </Typography>
            </CardContent> : ''}
        </Card>
      </Paper>
    </>
  )
}
