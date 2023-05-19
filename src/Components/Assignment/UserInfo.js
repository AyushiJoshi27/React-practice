import { Avatar, Box, CardHeader, Container } from '@mui/material'
import React from 'react'
import AboutUser from './AboutUser/AboutUser'
import Posts from './Posts'

export default function UserInfo() {
  return (
    <>
      <div className='bgBlock'>
        <Container>
          <Box sx={{height:"600px", marginBottom: 2}}>
            <img
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="profile-background-img"
              loading="lazy"
              width="1152px"
              height="460px"
              style={{
                position: 'absolute',
                borderRadius: "8px"
              }}
            />
            <CardHeader
              avatar={<Avatar
                alt="Remy Sharp"
                src="data:image/jpeg;base64,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"
                sx={{ 
                  width: 180, 
                  height: 180,
                  border:  5,
                  borderColor: 'rgb(255,255,255)'
                }}
              />}
              title={<b className='userName'>User Name</b>}
              sx={{
                position: "relative",
                top: "400px",
                left: "50px"
              }}
            />
          </Box>
        </Container>
      </div>
      <div className='userActivity'>
        <Container sx={{backgroundColor: "rgb(240,242,245)"}}>
          <Box sx={{
            width: "490px", 
            display: 'inline-block', 
            marginTop: "16px", 
            paddingLeft: "25px",
            }}>
            <AboutUser/>
          </Box>
          <Box sx={{float: "right", marginLeft: "14px", paddingRight: "25px"}}>
            <Posts />
          </Box>
        </Container>
      </div>
    </>
  )
}
