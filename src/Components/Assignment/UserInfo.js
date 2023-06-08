import { Avatar, Box, CardHeader, Container } from '@mui/material'
import UserPostsCompo from './Posts';
import Intro from './AboutUser/Intro';
import Todos from './AboutUser/Todos';
import UserAlbum from './AboutUser/Albums';
import { Photo } from './Photos/UserPhotos';
import { useSelector } from 'react-redux';
import Posts from './Posts';

export default function UserInfo() {
  const userData = useSelector((state) => state.users.users);
  console.log(useSelector((state) => state.users.users));

  return (
    <>
      <div className='bgBlock'>
        {userData.name ?
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
                {userData.name.split(" ").map(string => string.charAt(0)).join('').toUpperCase()}
              </Avatar>
              }
              title={<b className='userName'>{userData.name}</b>}
              sx={{
                position: "relative",
                top: "400px",
                left: "50px"
              }}
            /> 
          </Box>
        </Container> 
        : ""}
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
            <Posts/>
          </Box>
        </Container>
      </div>
    </>
  )
}
