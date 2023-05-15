import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ApiContent() {
    const [user, getUser] = useState();
        
    fetch('http://localhost:3000/users/1')
    .then(res=>res.json())
    .then(json=>getUser(json.name))

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <p>{user}</p>
        </Box>
      </Container>
    </React.Fragment>
  );
}