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
              src="http://127.0.0.1:5500/Js/Facebook/images/cover-photo.png"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbD-doHj-XLa-z6nW4QbEgDQK9vXo5Lw4VX7yO6dqjkw&usqp=CAU&ec=48665698"
                sx={{ 
                  width: 180, 
                  height: 180,
                  border:  4,
                  borderColor: 'white'
                }}
              />}
              title={<b>User Name</b>}
              sx={{
                position: "relative",
                top: "400px",
                left: "50px"
              }}
            />
          </Box>
        </Container>
      </div>
      <Container>
        <Box sx={{width: "490px", display: 'inline-block', marginTop: "16px"}}>
          <AboutUser/>
        </Box>
        <Box sx={{float: "right", marginLeft: "14px"}}>
          <Posts />
        </Box>
      </Container>
    </>
  )
}
