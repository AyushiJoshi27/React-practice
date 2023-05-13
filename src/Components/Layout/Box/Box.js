import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function PostContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> <p>Hello</p></Box>
      </Container>
    </React.Fragment>
  );
}
