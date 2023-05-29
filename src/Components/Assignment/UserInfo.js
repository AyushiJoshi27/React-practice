import { Avatar, Box, CardHeader, Container } from '@mui/material'
import React, {useState, useCallback, useEffect} from 'react'
import Posts from './Posts'
import axios from 'axios';
import { useParams } from 'react-router';
import Intro from './AboutUser/Intro';
import Todos from './AboutUser/Todos';
import UserAlbum from './AboutUser/Albums';
import { Photo } from './Photos/UserPhotos';

export default function UserInfo() {
  const {param} = useParams('');
  const [user, setUser] = useState("");
  const [initials, setInitials] = useState("Alpha");

  useEffect(() => {
    fetchUser();
  }, [])

  // eslint-disable-next-line
  const fetchUser = useCallback(() => {
    return axios
      .get(`http://localhost:3000/users?id=${param}`)
      .then((response) => {
        setUser(response.data[0].name);
        // setInitials(response.data[0].name.match(/(\b\S)?/g).join("").toUpperCase())
      });
  });

  // function stringAvatar(name) {
  //   return {
  //     sx: {
  //       bgcolor: "red",
  //     },
  //     children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  //   };
  // }

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
                borderRadius: "0 0 8px 8px",
                position: 'absolute',
              }}
            />
          
          <CardHeader avatar={<Avatar
                alt="Remy Sharp"
                sx={{ 
                  width: 180, 
                  height: 180,
                  border:  5,
                  backgroundColor: 'rgb(244 67 54)',
                  borderColor: 'rgb(255,255,255)',
                }}>
                {initials}
              </Avatar>
              }
              title={<b className='userName'>{user}</b>}
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
            <Intro />
            <Todos />
            <UserAlbum />
          </Box>
          <Box sx={{float: "right", marginLeft: "14px", paddingRight: "25px"}}>
            <Posts />
          </Box>
        </Container>
      </div>
    </>
  )
}
